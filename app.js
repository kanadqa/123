const form = document.getElementById("transactionForm");
const tableBody = document.getElementById("transactionTable");
const recentTableBody = document.getElementById("recentTable");
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
const categoryTypeSelect = document.getElementById("categoryType");
const expenseCategoryList = document.getElementById("expenseCategoryList");
const incomeCategoryList = document.getElementById("incomeCategoryList");
const expenseCategoryChart = document.getElementById("expenseCategoryChart");
const incomeCategoryChart = document.getElementById("incomeCategoryChart");
const expenseSubcategoryChart = document.getElementById("expenseSubcategoryChart");
const themeSelect = document.getElementById("themeSelect");
const densitySelect = document.getElementById("densitySelect");
const viewButtons = document.querySelectorAll(".nav-item");
const views = document.querySelectorAll(".view");

const STORAGE_KEY = "budget.transactions.v3";
const CATEGORY_KEY = "budget.categories.v2";
const UI_KEY = "budget.ui.v1";

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
    expense: {
      Еда: ["Еда домой", "Еда вне дома"],
      Транспорт: ["Метро", "Такси"],
    },
    income: {
      Доход: ["Зарплата", "Фриланс"],
    },
  };
};

const saveCategories = (categories) => {
  localStorage.setItem(CATEGORY_KEY, JSON.stringify(categories));
};

const loadUiSettings = () => {
  try {
    const raw = localStorage.getItem(UI_KEY);
    return raw ? JSON.parse(raw) : { theme: "light", density: "comfortable" };
  } catch (error) {
    console.error("Не удалось загрузить настройки интерфейса", error);
    return { theme: "light", density: "comfortable" };
  }
};

const saveUiSettings = (settings) => {
  localStorage.setItem(UI_KEY, JSON.stringify(settings));
};

let transactions = loadTransactions();
let categories = loadCategories();
let uiSettings = loadUiSettings();

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

const renderRecent = () => {
  recentTableBody.innerHTML = "";
  const recent = transactions.slice().sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 5);

  if (recent.length === 0) {
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    cell.colSpan = 5;
    cell.textContent = "Пока нет операций.";
    cell.classList.add("hint");
    row.appendChild(cell);
    recentTableBody.appendChild(row);
    return;
  }

  recent.forEach((item) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.date}</td>
      <td><span class="tag ${item.type}">${formatType(item.type)}</span></td>
      <td>${item.category}</td>
      <td>${item.subcategory}</td>
      <td>${currencyFormatter.format(item.amount)}</td>
    `;
    recentTableBody.appendChild(row);
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

const renderCategories = () => {
  const categoryNames = Object.keys(categories.expense).sort();
  const incomeNames = Object.keys(categories.income).sort();

  categorySelect.innerHTML = "";
  categoryForSubSelect.innerHTML = "";

  const currentType = document.getElementById("type").value;
  const listForSelect = currentType === "income" ? incomeNames : categoryNames;

  listForSelect.forEach((name) => {
    const option = document.createElement("option");
    option.value = name;
    option.textContent = name;
    categorySelect.appendChild(option);
  });

  const managedList = categoryTypeSelect.value === "income" ? incomeNames : categoryNames;
  managedList.forEach((name) => {
    const option = document.createElement("option");
    option.value = name;
    option.textContent = name;
    categoryForSubSelect.appendChild(option);
  });

  updateSubcategoryOptions(categorySelect.value || listForSelect[0]);
  renderCategoryLists();
};

const renderCategoryLists = () => {
  expenseCategoryList.innerHTML = "";
  incomeCategoryList.innerHTML = "";

  Object.entries(categories.expense).forEach(([name, subs]) => {
    const item = document.createElement("li");
    item.textContent = `${name}${subs.length ? ": " + subs.join(", ") : ""}`;
    expenseCategoryList.appendChild(item);
  });

  Object.entries(categories.income).forEach(([name, subs]) => {
    const item = document.createElement("li");
    item.textContent = `${name}${subs.length ? ": " + subs.join(", ") : ""}`;
    incomeCategoryList.appendChild(item);
  });
};

const updateSubcategoryOptions = (categoryName) => {
  subcategorySelect.innerHTML = "";
  const currentType = document.getElementById("type").value;
  const categoryMap = categories[currentType] || {};
  const subs = categoryMap[categoryName] || [];
  subs.forEach((sub) => {
    const option = document.createElement("option");
    option.value = sub;
    option.textContent = sub;
    subcategorySelect.appendChild(option);
  });
};

const addCategory = () => {
  const name = newCategoryInput.value.trim();
  const type = categoryTypeSelect.value;
  if (!name) {
    return;
  }
  if (!categories[type][name]) {
    categories[type][name] = [];
    saveCategories(categories);
    renderCategories();
  }
  newCategoryInput.value = "";
};

const addSubcategory = () => {
  const categoryName = categoryForSubSelect.value;
  const subName = newSubcategoryInput.value.trim();
  const type = categoryTypeSelect.value;
  if (!categoryName || !subName) {
    return;
  }
  if (!categories[type][categoryName]) {
    categories[type][categoryName] = [];
  }
  if (!categories[type][categoryName].includes(subName)) {
    categories[type][categoryName].push(subName);
    saveCategories(categories);
    renderCategories();
    if (document.getElementById("type").value === type) {
      categorySelect.value = categoryName;
      updateSubcategoryOptions(categoryName);
    }
  }
  newSubcategoryInput.value = "";
};

const render = () => {
  updateSummary();
  renderTable();
  renderRecent();
  renderCharts();
};

const resetForm = () => {
  form.reset();
  document.getElementById("date").valueAsDate = new Date();
  updateCategoryOptionsForType();
};

const updateCategoryOptionsForType = () => {
  renderCategories();
  const selectedCategory = categorySelect.value;
  updateSubcategoryOptions(selectedCategory);
};

const applyUiSettings = () => {
  document.body.dataset.theme = uiSettings.theme;
  document.body.dataset.density = uiSettings.density;
  themeSelect.value = uiSettings.theme;
  densitySelect.value = uiSettings.density;
};

const switchView = (target) => {
  views.forEach((view) => {
    view.hidden = view.dataset.view !== target;
  });
  viewButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.target === target);
  });
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const date = document.getElementById("date").value;
  const type = document.getElementById("type").value;
  const category = categorySelect.value;
  const subcategory = subcategorySelect.value;
  const amount = Number.parseFloat(document.getElementById("amount").value);
  const note = document.getElementById("note").value.trim();

  if (!date || !category || !subcategory || Number.isNaN(amount)) {
    return;
  }

  transactions.push({ date, type, category, subcategory, amount, note });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
  render();
  resetForm();
});

document.getElementById("type").addEventListener("change", () => {
  updateCategoryOptionsForType();
});

categoryTypeSelect.addEventListener("change", () => {
  renderCategories();
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

themeSelect.addEventListener("change", (event) => {
  uiSettings.theme = event.target.value;
  saveUiSettings(uiSettings);
  applyUiSettings();
});

densitySelect.addEventListener("change", (event) => {
  uiSettings.density = event.target.value;
  saveUiSettings(uiSettings);
  applyUiSettings();
});

viewButtons.forEach((button) => {
  button.addEventListener("click", () => {
    switchView(button.dataset.target);
  });
});

applyUiSettings();
renderCategories();
resetForm();
render();
