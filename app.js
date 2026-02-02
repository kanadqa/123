const form = document.getElementById("transactionForm");
const tableBody = document.getElementById("transactionTable");
const totalIncomeEl = document.getElementById("totalIncome");
const totalExpenseEl = document.getElementById("totalExpense");
const balanceEl = document.getElementById("balance");
const exportButton = document.getElementById("exportCsv");
const clearButton = document.getElementById("clearAll");
const categorySelect = document.getElementById("category");
const subcategorySelect = document.getElementById("subcategory");
const categoryForSubSelect = document.getElementById("categoryForSub");
const addCategoryButton = document.getElementById("addCategory");
const addSubcategoryButton = document.getElementById("addSubcategory");
const newCategoryInput = document.getElementById("newCategory");
const newSubcategoryInput = document.getElementById("newSubcategory");
const expenseCategoryChart = document.getElementById("expenseCategoryChart");
const incomeCategoryChart = document.getElementById("incomeCategoryChart");
const expenseSubcategoryChart = document.getElementById("expenseSubcategoryChart");
const navLinks = document.querySelectorAll("[data-view-target]");
const views = document.querySelectorAll("[data-view]");
const viewTitle = document.getElementById("viewTitle");
const layoutButtons = document.querySelectorAll("[data-layout]");

const STORAGE_KEY = "budget.transactions.v2";
const CATEGORY_KEY = "budget.categories.v1";
const VIEW_KEY = "budget.view.active";
const LAYOUT_KEY = "budget.layout";
const DEFAULT_SUBCATEGORY = "Без подкатегории";

const currencyFormatter = new Intl.NumberFormat("ru-RU", {
  style: "currency",
  currency: "RUB",
  minimumFractionDigits: 2,
});

const palette = [
  "#2563eb",
  "#16a34a",
  "#ea580c",
  "#7c3aed",
  "#0f766e",
  "#db2777",
  "#ca8a04",
  "#dc2626",
  "#0891b2",
  "#4f46e5",
];

const formatType = (type) => (type === "income" ? "Доход" : "Расход");

const loadTransactions = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (error) {
    console.error("Не удалось загрузить данные", error);
    return [];
  }
};

const loadCategories = () => {
  try {
    const raw = localStorage.getItem(CATEGORY_KEY);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch (error) {
    console.error("Не удалось загрузить категории", error);
  }
  return {
    Еда: ["Еда домой", "Еда вне дома"],
    Транспорт: ["Метро", "Такси"],
    Доход: ["Зарплата", "Фриланс"],
  };
};

const saveCategories = (categories) => {
  localStorage.setItem(CATEGORY_KEY, JSON.stringify(categories));
};

let transactions = loadTransactions();
let categories = loadCategories();

const updateSummary = () => {
  const totals = transactions.reduce(
    (acc, item) => {
      if (item.type === "income") {
        acc.income += item.amount;
      } else {
        acc.expense += item.amount;
      }
      return acc;
    },
    { income: 0, expense: 0 }
  );

  totalIncomeEl.textContent = currencyFormatter.format(totals.income);
  totalExpenseEl.textContent = currencyFormatter.format(totals.expense);
  balanceEl.textContent = currencyFormatter.format(totals.income - totals.expense);
};

const renderTable = () => {
  tableBody.innerHTML = "";

  if (transactions.length === 0) {
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    cell.colSpan = 7;
    cell.textContent = "Пока нет операций. Добавьте первую запись.";
    cell.classList.add("hint");
    row.appendChild(cell);
    tableBody.appendChild(row);
    return;
  }

  transactions
    .slice()
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .forEach((item, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${item.date}</td>
        <td><span class="tag ${item.type}">${formatType(item.type)}</span></td>
        <td>${item.category}</td>
        <td>${item.subcategory}</td>
        <td>${currencyFormatter.format(item.amount)}</td>
        <td>${item.note || "—"}</td>
        <td><button class="button secondary" data-index="${index}">Удалить</button></td>
      `;
      tableBody.appendChild(row);
    });
};

const buildTotals = (filterType) => {
  return transactions
    .filter((item) => (filterType ? item.type === filterType : true))
    .reduce(
      (acc, item) => {
        acc[item.category] = (acc[item.category] || 0) + item.amount;
        return acc;
      },
      {}
    );
};

const buildSubTotals = (filterType) => {
  return transactions
    .filter((item) => (filterType ? item.type === filterType : true))
    .reduce(
      (acc, item) => {
        const key = `${item.category} · ${item.subcategory}`;
        acc[key] = (acc[key] || 0) + item.amount;
        return acc;
      },
      {}
    );
};

const renderChart = (container, totals, emptyText) => {
  container.innerHTML = "";
  const entries = Object.entries(totals).sort((a, b) => b[1] - a[1]);

  if (entries.length === 0) {
    const empty = document.createElement("p");
    empty.className = "hint";
    empty.textContent = emptyText;
    container.appendChild(empty);
    return;
  }

  const maxValue = entries[0][1];
  entries.forEach(([label, value], index) => {
    const row = document.createElement("div");
    row.className = "chart-row";

    const legend = document.createElement("div");
    legend.className = "chart-legend";

    const swatch = document.createElement("span");
    swatch.className = "chart-swatch";
    swatch.style.background = palette[index % palette.length];

    const name = document.createElement("span");
    name.textContent = label;

    legend.appendChild(swatch);
    legend.appendChild(name);

    const barWrapper = document.createElement("div");
    barWrapper.className = "chart-bar";

    const bar = document.createElement("span");
    bar.style.width = `${Math.max((value / maxValue) * 100, 6)}%`;
    bar.style.background = palette[index % palette.length];
    barWrapper.appendChild(bar);

    const amount = document.createElement("strong");
    amount.textContent = currencyFormatter.format(value);

    row.appendChild(legend);
    row.appendChild(barWrapper);
    row.appendChild(amount);
    container.appendChild(row);
  });
};

const renderCharts = () => {
  renderChart(
    expenseCategoryChart,
    buildTotals("expense"),
    "Добавьте расходы, чтобы увидеть диаграмму."
  );
  renderChart(
    incomeCategoryChart,
    buildTotals("income"),
    "Добавьте доходы, чтобы увидеть диаграмму."
  );
  renderChart(
    expenseSubcategoryChart,
    buildSubTotals("expense"),
    "Добавьте расходы с подкатегориями, чтобы увидеть детализацию."
  );
};

const ensureDefaultSubcategory = (list) => {
  if (list.length === 0) {
    list.push(DEFAULT_SUBCATEGORY);
  }
  return list;
};

const renderCategories = () => {
  const categoryNames = Object.keys(categories).sort();

  categorySelect.innerHTML = "";
  categoryForSubSelect.innerHTML = "";

  categoryNames.forEach((name) => {
    const option = document.createElement("option");
    option.value = name;
    option.textContent = name;
    categorySelect.appendChild(option);

    const optionForSub = document.createElement("option");
    optionForSub.value = name;
    optionForSub.textContent = name;
    categoryForSubSelect.appendChild(optionForSub);
  });

  const selectedCategory = categorySelect.value || categoryNames[0];
  updateSubcategoryOptions(selectedCategory);
};

const updateSubcategoryOptions = (categoryName) => {
  subcategorySelect.innerHTML = "";
  const subs = ensureDefaultSubcategory(categories[categoryName] || []);
  categories[categoryName] = subs;
  subs.forEach((sub) => {
    const option = document.createElement("option");
    option.value = sub;
    option.textContent = sub;
    subcategorySelect.appendChild(option);
  });
};

const addCategory = () => {
  const name = newCategoryInput.value.trim();
  if (!name) {
    return;
  }
  if (!categories[name]) {
    categories[name] = [DEFAULT_SUBCATEGORY];
    saveCategories(categories);
    renderCategories();
    categorySelect.value = name;
    updateSubcategoryOptions(name);
  }
  newCategoryInput.value = "";
};

const addSubcategory = () => {
  const categoryName = categoryForSubSelect.value;
  const subName = newSubcategoryInput.value.trim();
  if (!categoryName || !subName) {
    return;
  }
  if (!categories[categoryName]) {
    categories[categoryName] = [DEFAULT_SUBCATEGORY];
  }
  if (!categories[categoryName].includes(subName)) {
    categories[categoryName].push(subName);
    saveCategories(categories);
    renderCategories();
    categorySelect.value = categoryName;
    updateSubcategoryOptions(categoryName);
  }
  newSubcategoryInput.value = "";
};

const render = () => {
  updateSummary();
  renderTable();
  renderCharts();
};

const resetForm = () => {
  form.reset();
  document.getElementById("date").valueAsDate = new Date();
};

const setView = (viewId) => {
  views.forEach((view) => {
    view.classList.toggle("is-active", view.dataset.view === viewId);
  });
  navLinks.forEach((link) => {
    link.classList.toggle("is-active", link.dataset.viewTarget === viewId);
  });
  const activeLabel = [...navLinks].find((link) => link.dataset.viewTarget === viewId);
  if (activeLabel) {
    viewTitle.textContent = activeLabel.textContent;
  }
  localStorage.setItem(VIEW_KEY, viewId);
};

const setLayout = (layout) => {
  document.body.classList.remove("layout-comfort", "layout-balanced", "layout-compact");
  document.body.classList.add(`layout-${layout}`);
  layoutButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.layout === layout);
  });
  localStorage.setItem(LAYOUT_KEY, layout);
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const date = document.getElementById("date").value;
  const type = document.getElementById("type").value;
  const category = categorySelect.value;
  const subcategory = subcategorySelect.value || DEFAULT_SUBCATEGORY;
  const amount = Number.parseFloat(document.getElementById("amount").value);
  const note = document.getElementById("note").value.trim();

  if (!date || !category || Number.isNaN(amount)) {
    return;
  }

  transactions.push({ date, type, category, subcategory, amount, note });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
  render();
  resetForm();
});

categorySelect.addEventListener("change", (event) => {
  updateSubcategoryOptions(event.target.value);
});

addCategoryButton.addEventListener("click", addCategory);
addSubcategoryButton.addEventListener("click", addSubcategory);

newCategoryInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    addCategory();
  }
});

newSubcategoryInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    addSubcategory();
  }
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => setView(link.dataset.viewTarget));
});

layoutButtons.forEach((button) => {
  button.addEventListener("click", () => setLayout(button.dataset.layout));
});

tableBody.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLButtonElement)) {
    return;
  }

  const index = Number.parseInt(target.dataset.index, 10);
  if (Number.isNaN(index)) {
    return;
  }

  transactions.splice(index, 1);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
  render();
});

exportButton.addEventListener("click", () => {
  if (transactions.length === 0) {
    alert("Добавьте операции перед экспортом.");
    return;
  }

  const header = ["Дата", "Тип", "Категория", "Подкатегория", "Сумма", "Комментарий"];
  const rows = transactions.map((item) => [
    item.date,
    formatType(item.type),
    item.category,
    item.subcategory,
    item.amount.toFixed(2),
    item.note || "",
  ]);

  const csvContent = [header, ...rows]
    .map((row) =>
      row
        .map((value) => `"${String(value).replace(/"/g, '""')}"`)
        .join(",")
    )
    .join("\n");

  const blob = new Blob(["\uFEFF", csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `budget-${new Date().toISOString().slice(0, 10)}.csv`;
  link.click();
  URL.revokeObjectURL(url);
});

clearButton.addEventListener("click", () => {
  if (!confirm("Удалить все операции?")) {
    return;
  }
  transactions = [];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
  render();
});

renderCategories();
resetForm();
render();
setView(localStorage.getItem(VIEW_KEY) || "dashboard");
setLayout(localStorage.getItem(LAYOUT_KEY) || "comfort");
