const form = document.getElementById("transactionForm");
const tableBody = document.getElementById("transactionTable");
const totalIncomeEl = document.getElementById("totalIncome");
const totalExpenseEl = document.getElementById("totalExpense");
const balanceEl = document.getElementById("balance");
const exportButton = document.getElementById("exportCsv");
const clearButton = document.getElementById("clearAll");
const undoButton = document.getElementById("undoAction");
const categorySelect = document.getElementById("category");
const subcategorySelect = document.getElementById("subcategory");
const categoryTypeSelect = document.getElementById("categoryType");
const categoryList = document.getElementById("categoryList");
const addCategoryButton = document.getElementById("addCategory");
const newCategoryInput = document.getElementById("newCategory");
const newSubcategoryInput = document.getElementById("newSubcategory");
const expenseCategoryChart = document.getElementById("expenseCategoryChart");
const incomeCategoryChart = document.getElementById("incomeCategoryChart");
const expenseSubcategoryChart = document.getElementById("expenseSubcategoryChart");
const toggleSubcategoryButton = document.getElementById("toggleSubcategoryChart");
const expensePie = document.getElementById("expensePie");
const incomePie = document.getElementById("incomePie");
const dailyLineChart = document.getElementById("dailyLineChart");
const categoryManager = document.getElementById("categoryManager");
const rootDropzone = document.querySelector("[data-dropzone-root]");
const filterTabs = document.querySelectorAll("[data-filter]");
const navLinks = document.querySelectorAll("[data-view-target]");
const views = document.querySelectorAll("[data-view]");
const viewTitle = document.getElementById("viewTitle");
const layoutButtons = document.querySelectorAll("[data-layout]");

const STORAGE_KEY = "budget.transactions.v2";
const CATEGORY_KEY = "budget.categories.v3";
const VIEW_KEY = "budget.view.active";
const LAYOUT_KEY = "budget.layout";

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

const normalizeCategories = (raw) => {
  if (!raw) {
    return null;
  }

  if (Object.values(raw).every((value) => Array.isArray(value))) {
    const converted = {};
    Object.entries(raw).forEach(([name, subs]) => {
      converted[name] = {
        type: name === "Доход" ? "income" : "expense",
        subs: subs,
      };
    });
    return converted;
  }

  return raw;
};

const loadCategories = () => {
  try {
    const raw = localStorage.getItem(CATEGORY_KEY);
    if (raw) {
      return normalizeCategories(JSON.parse(raw));
    }
  } catch (error) {
    console.error("Не удалось загрузить категории", error);
  }
  return {
    Еда: { type: "expense", subs: ["Еда домой", "Еда вне дома"] },
    Транспорт: { type: "expense", subs: ["Метро", "Такси"] },
    Доход: { type: "income", subs: ["Зарплата", "Фриланс"] },
  };
};

const saveCategories = (nextCategories) => {
  localStorage.setItem(CATEGORY_KEY, JSON.stringify(nextCategories));
};

let transactions = loadTransactions();
let categories = loadCategories();
let historyStack = [];
let showAllSubcategories = false;
let categoryFilter = "all";

const pushHistory = () => {
  historyStack.push({
    transactions: JSON.parse(JSON.stringify(transactions)),
    categories: JSON.parse(JSON.stringify(categories)),
  });
  if (historyStack.length > 20) {
    historyStack.shift();
  }
  updateUndoState();
};

const undoLastAction = () => {
  const previous = historyStack.pop();
  if (!previous) {
    return;
  }
  transactions = previous.transactions;
  categories = previous.categories;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
  saveCategories(categories);
  renderCategories();
  render();
  updateUndoState();
};

const updateUndoState = () => {
  undoButton.disabled = historyStack.length === 0;
};

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
        <td>${item.subcategory || "—"}</td>
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

const buildSubTotals = () => {
  return transactions
    .filter((item) => item.type === "expense" && item.subcategory)
    .reduce(
      (acc, item) => {
        const key = `${item.category} · ${item.subcategory}`;
        acc[key] = (acc[key] || 0) + item.amount;
        return acc;
      },
      {}
    );
};

const renderChart = (container, totals, emptyText, options = {}) => {
  container.innerHTML = "";
  const entries = Object.entries(totals).sort((a, b) => b[1] - a[1]);

  if (entries.length === 0) {
    const empty = document.createElement("p");
    empty.className = "hint";
    empty.textContent = emptyText;
    container.appendChild(empty);
    return;
  }

  const visibleEntries = options.limit ? entries.slice(0, options.limit) : entries;
  const maxValue = visibleEntries[0][1];
  visibleEntries.forEach(([label, value], index) => {
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

  if (options.limit && entries.length > options.limit) {
    const note = document.createElement("p");
    note.className = "hint";
    note.textContent = `Показано ${options.limit} из ${entries.length}.`;
    container.appendChild(note);
  }
};

const buildPie = (totals) => {
  const entries = Object.entries(totals).sort((a, b) => b[1] - a[1]);
  const total = entries.reduce((sum, [, value]) => sum + value, 0);
  if (total === 0) {
    return { entries: [], total };
  }
  return { entries, total };
};

const renderPie = (container, totals, emptyText) => {
  container.innerHTML = "";
  const { entries, total } = buildPie(totals);

  if (entries.length === 0) {
    const empty = document.createElement("p");
    empty.className = "hint";
    empty.textContent = emptyText;
    container.appendChild(empty);
    return;
  }

  const chart = document.createElement("div");
  chart.className = "pie-chart";

  const visual = document.createElement("div");
  visual.className = "pie-visual";

  const ring = document.createElement("div");
  ring.className = "pie-ring";

  let cumulative = 0;
  const segments = entries
    .map(([, value], index) => {
      const start = cumulative;
      const portion = (value / total) * 100;
      cumulative += portion;
      return `${palette[index % palette.length]} ${start}% ${cumulative}%`;
    })
    .join(", ");

  ring.style.background = `conic-gradient(${segments})`;

  const totalLabel = document.createElement("div");
  totalLabel.className = "pie-total";
  totalLabel.innerHTML = `<span>Итого</span><strong>${currencyFormatter.format(total)}</strong>`;

  visual.appendChild(ring);
  visual.appendChild(totalLabel);

  const legend = document.createElement("div");
  legend.className = "pie-legend";

  entries.forEach(([label, value], index) => {
    const item = document.createElement("div");
    item.className = "pie-legend-item";

    const swatch = document.createElement("span");
    swatch.className = "pie-swatch";
    swatch.style.background = palette[index % palette.length];

    const text = document.createElement("div");
    text.innerHTML = `<strong>${label}</strong><span>${currencyFormatter.format(value)}</span>`;

    item.appendChild(swatch);
    item.appendChild(text);
    legend.appendChild(item);
  });

  chart.appendChild(visual);
  chart.appendChild(legend);
  container.appendChild(chart);
};

const renderLineChart = () => {
  dailyLineChart.innerHTML = "";
  const dataMap = {};
  transactions.forEach((item) => {
    const key = item.date;
    if (!dataMap[key]) {
      dataMap[key] = { income: 0, expense: 0 };
    }
    dataMap[key][item.type] += item.amount;
  });

  const dates = Object.keys(dataMap).sort();
  if (dates.length === 0) {
    dailyLineChart.innerHTML = "<text x='50%' y='50%' text-anchor='middle' fill='#94a3b8'>Нет данных</text>";
    return;
  }

  const series = dates.map((date) => dataMap[date]);
  const maxValue = Math.max(
    ...series.map((item) => Math.max(item.income, item.expense, 0))
  );

  const width = 700;
  const height = 200;
  const padding = 32;
  const chartWidth = width - padding * 2;
  const chartHeight = height - padding * 2;

  const scaleX = (index) =>
    padding + (chartWidth * index) / Math.max(dates.length - 1, 1);
  const scaleY = (value) => padding + chartHeight - (value / maxValue) * chartHeight;

  const drawLine = (values, color) => {
    const points = values
      .map((value, index) => `${scaleX(index)},${scaleY(value)}`)
      .join(" ");
    const line = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
    line.setAttribute("points", points);
    line.setAttribute("fill", "none");
    line.setAttribute("stroke", color);
    line.setAttribute("stroke-width", "3");
    line.setAttribute("stroke-linecap", "round");
    return line;
  };

  const grid = document.createElementNS("http://www.w3.org/2000/svg", "g");
  for (let i = 0; i <= 4; i += 1) {
    const y = padding + (chartHeight * i) / 4;
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", padding);
    line.setAttribute("x2", width - padding);
    line.setAttribute("y1", y);
    line.setAttribute("y2", y);
    line.setAttribute("stroke", "#e2e8f0");
    line.setAttribute("stroke-dasharray", "4 4");
    grid.appendChild(line);
  }

  const incomeLine = drawLine(series.map((item) => item.income), "#16a34a");
  const expenseLine = drawLine(series.map((item) => item.expense), "#ea580c");

  dailyLineChart.appendChild(grid);
  dailyLineChart.appendChild(incomeLine);
  dailyLineChart.appendChild(expenseLine);
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
    buildSubTotals(),
    "Добавьте расходы с подкатегориями, чтобы увидеть детализацию.",
    { limit: showAllSubcategories ? null : 6 }
  );
  renderPie(
    expensePie,
    buildTotals("expense"),
    "Добавьте расходы, чтобы увидеть диаграмму."
  );
  renderPie(
    incomePie,
    buildTotals("income"),
    "Добавьте доходы, чтобы увидеть диаграмму."
  );
  renderLineChart();
};

const getCategoryNames = (type) =>
  Object.keys(categories).filter((name) => (type ? categories[name].type === type : true));

const renderCategoryOptions = () => {
  const activeType = document.getElementById("type").value;
  const options = getCategoryNames(activeType).sort();

  categorySelect.innerHTML = "";
  categoryList.innerHTML = "";

  options.forEach((name) => {
    const option = document.createElement("option");
    option.value = name;
    option.textContent = name;
    categorySelect.appendChild(option);

    const listOption = document.createElement("option");
    listOption.value = name;
    categoryList.appendChild(listOption);
  });

  if (!categorySelect.value && options.length > 0) {
    categorySelect.value = options[0];
  }
  updateSubcategoryOptions(categorySelect.value);
};

const renderCategories = () => {
  renderCategoryOptions();
  renderCategoryManager();
};

const updateSubcategoryOptions = (categoryName) => {
  subcategorySelect.innerHTML = "";
  if (!categoryName || !categories[categoryName]) {
    subcategorySelect.disabled = true;
    return;
  }
  const subs = categories[categoryName].subs || [];
  if (subs.length === 0) {
    subcategorySelect.disabled = true;
    return;
  }
  subcategorySelect.disabled = false;
  subs.forEach((sub) => {
    const option = document.createElement("option");
    option.value = sub;
    option.textContent = sub;
    subcategorySelect.appendChild(option);
  });
};

const addCategory = () => {
  const name = newCategoryInput.value.trim();
  const subName = newSubcategoryInput.value.trim();
  if (!name) {
    return;
  }

  pushHistory();

  if (categories[name]) {
    if (subName && !categories[name].subs.includes(subName)) {
      categories[name].subs.push(subName);
    }
  } else {
    categories[name] = {
      type: categoryTypeSelect.value,
      subs: subName ? [subName] : [],
    };
  }

  saveCategories(categories);
  renderCategories();
  newCategoryInput.value = "";
  newSubcategoryInput.value = "";
};

const renameCategory = (oldName, newName) => {
  if (!newName || oldName === newName || categories[newName]) {
    return;
  }
  pushHistory();
  const payload = categories[oldName];
  delete categories[oldName];
  categories[newName] = payload;
  transactions = transactions.map((item) =>
    item.category === oldName ? { ...item, category: newName } : item
  );
  localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
  saveCategories(categories);
  renderCategories();
};

const renameSubcategory = (categoryName, oldName, newName) => {
  if (!newName || oldName === newName) {
    return;
  }
  pushHistory();
  categories[categoryName].subs = categories[categoryName].subs.map((item) =>
    item === oldName ? newName : item
  );
  transactions = transactions.map((item) =>
    item.category === categoryName && item.subcategory === oldName
      ? { ...item, subcategory: newName }
      : item
  );
  localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
  saveCategories(categories);
  renderCategories();
};

const moveSubcategory = (fromCategory, subName, toCategory) => {
  if (fromCategory === toCategory) {
    return;
  }
  pushHistory();
  categories[fromCategory].subs = categories[fromCategory].subs.filter(
    (item) => item !== subName
  );
  if (!categories[toCategory].subs.includes(subName)) {
    categories[toCategory].subs.push(subName);
  }
  transactions = transactions.map((item) =>
    item.category === fromCategory && item.subcategory === subName
      ? { ...item, category: toCategory }
      : item
  );
  localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
  saveCategories(categories);
  renderCategories();
};

const moveCategoryToCategory = (fromCategory, toCategory) => {
  if (fromCategory === toCategory) {
    return;
  }
  pushHistory();
  const fromSubs = categories[fromCategory].subs || [];
  const toSubs = categories[toCategory].subs || [];
  const merged = [...new Set([...toSubs, fromCategory, ...fromSubs])];
  categories[toCategory].subs = merged;
  delete categories[fromCategory];

  transactions = transactions.map((item) => {
    if (item.category !== fromCategory) {
      return item;
    }
    const nextSubcategory = item.subcategory || fromCategory;
    return { ...item, category: toCategory, subcategory: nextSubcategory };
  });

  localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
  saveCategories(categories);
  renderCategories();
};

const promoteSubcategoryToCategory = (fromCategory, subName) => {
  if (categories[subName]) {
    return;
  }
  pushHistory();
  categories[fromCategory].subs = categories[fromCategory].subs.filter(
    (item) => item !== subName
  );
  categories[subName] = { type: categories[fromCategory].type, subs: [] };

  transactions = transactions.map((item) =>
    item.category === fromCategory && item.subcategory === subName
      ? { ...item, category: subName, subcategory: "" }
      : item
  );

  localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
  saveCategories(categories);
  renderCategories();
};

const deleteSubcategory = (categoryName, subName) => {
  pushHistory();
  categories[categoryName].subs = categories[categoryName].subs.filter(
    (item) => item !== subName
  );
  transactions = transactions.map((item) =>
    item.category === categoryName && item.subcategory === subName
      ? { ...item, subcategory: "" }
      : item
  );
  localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
  saveCategories(categories);
  renderCategories();
};

const deleteCategory = (categoryName) => {
  const remaining = Object.keys(categories).filter((name) => name !== categoryName);
  if (remaining.length === 0) {
    alert("Нужна хотя бы одна категория.");
    return;
  }
  pushHistory();
  delete categories[categoryName];
  const fallback = remaining[0];
  transactions = transactions.map((item) =>
    item.category === categoryName ? { ...item, category: fallback, subcategory: "" } : item
  );
  localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
  saveCategories(categories);
  renderCategories();
};

const renderCategoryManager = () => {
  categoryManager.innerHTML = "";
  const sorted = Object.entries(categories)
    .filter(([name]) =>
      categoryFilter === "all" ? true : categories[name].type === categoryFilter
    )
    .sort(([a], [b]) => a.localeCompare(b));

  sorted.forEach(([categoryName, payload]) => {
    const subs = payload.subs || [];
    const card = document.createElement("div");
    card.className = "category-card";
    card.dataset.category = categoryName;
    card.draggable = true;

    const header = document.createElement("div");
    header.className = "category-card-header";

    const title = document.createElement("div");
    title.innerHTML = `<strong>${categoryName}</strong><span>${subs.length} подкатегорий</span>`;

    const badge = document.createElement("span");
    badge.className = `type-badge ${payload.type}`;
    badge.textContent = payload.type === "income" ? "Доход" : "Расход";

    const actions = document.createElement("div");
    actions.className = "category-actions";

    const renameBtn = document.createElement("button");
    renameBtn.className = "chip";
    renameBtn.textContent = "Переименовать";
    renameBtn.addEventListener("click", () => {
      const nextName = prompt("Новое имя категории", categoryName);
      if (nextName) {
        renameCategory(categoryName, nextName.trim());
      }
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "chip danger";
    deleteBtn.textContent = "Удалить";
    deleteBtn.addEventListener("click", () => {
      if (confirm(`Удалить категорию «${categoryName}»?`)) {
        deleteCategory(categoryName);
      }
    });

    actions.appendChild(renameBtn);
    actions.appendChild(deleteBtn);
    header.appendChild(title);
    header.appendChild(badge);
    header.appendChild(actions);

    const list = document.createElement("div");
    list.className = "subcategory-list";
    list.dataset.dropzone = categoryName;

    if (subs.length === 0) {
      const empty = document.createElement("p");
      empty.className = "hint";
      empty.textContent = "Нет подкатегорий";
      list.appendChild(empty);
    }

    subs.forEach((sub) => {
      const row = document.createElement("div");
      row.className = "subcategory-row";
      row.draggable = true;
      row.dataset.category = categoryName;
      row.dataset.subcategory = sub;

      const name = document.createElement("span");
      name.textContent = sub;

      const tools = document.createElement("div");
      tools.className = "subcategory-tools";

      const editBtn = document.createElement("button");
      editBtn.className = "chip";
      editBtn.textContent = "Редактировать";
      editBtn.addEventListener("click", () => {
        const nextName = prompt("Новое имя подкатегории", sub);
        if (nextName) {
          renameSubcategory(categoryName, sub, nextName.trim());
        }
      });

      const deleteBtn = document.createElement("button");
      deleteBtn.className = "chip danger";
      deleteBtn.textContent = "Удалить";
      deleteBtn.addEventListener("click", () => {
        if (confirm(`Удалить подкатегорию «${sub}»?`)) {
          deleteSubcategory(categoryName, sub);
        }
      });

      tools.appendChild(editBtn);
      tools.appendChild(deleteBtn);

      row.appendChild(name);
      row.appendChild(tools);
      list.appendChild(row);
    });

    card.appendChild(header);
    card.appendChild(list);
    categoryManager.appendChild(card);
  });
};

const handleDragStart = (event) => {
  const subRow = event.target.closest(".subcategory-row");
  const card = event.target.closest(".category-card");
  if (subRow) {
    event.dataTransfer.setData(
      "text/plain",
      JSON.stringify({
        type: "subcategory",
        category: subRow.dataset.category,
        subcategory: subRow.dataset.subcategory,
      })
    );
    event.dataTransfer.effectAllowed = "move";
    subRow.classList.add("is-dragging");
    return;
  }

  if (card) {
    event.dataTransfer.setData(
      "text/plain",
      JSON.stringify({
        type: "category",
        category: card.dataset.category,
      })
    );
    event.dataTransfer.effectAllowed = "move";
    card.classList.add("is-dragging");
  }
};

const handleDragEnd = (event) => {
  const row = event.target.closest(".subcategory-row");
  const card = event.target.closest(".category-card");
  if (row) {
    row.classList.remove("is-dragging");
  }
  if (card) {
    card.classList.remove("is-dragging");
  }
  document
    .querySelectorAll(".subcategory-list.is-drop-target, .category-dropzone.is-drop-target")
    .forEach((list) => list.classList.remove("is-drop-target"));
};

const handleDragOver = (event) => {
  const list = event.target.closest(".subcategory-list, .category-dropzone");
  if (!list) {
    return;
  }
  event.preventDefault();
  list.classList.add("is-drop-target");
  event.dataTransfer.dropEffect = "move";
};

const handleDragLeave = (event) => {
  const list = event.target.closest(".subcategory-list, .category-dropzone");
  if (list) {
    list.classList.remove("is-drop-target");
  }
};

const handleDrop = (event) => {
  const list = event.target.closest(".subcategory-list");
  const dropzone = event.target.closest(".category-dropzone");
  event.preventDefault();

  if (list) {
    list.classList.remove("is-drop-target");
  }
  if (dropzone) {
    dropzone.classList.remove("is-drop-target");
  }

  const payload = event.dataTransfer.getData("text/plain");
  if (!payload) {
    return;
  }

  const data = JSON.parse(payload);
  const targetCategory = list ? list.dataset.dropzone : null;

  if (list && targetCategory) {
    if (data.type === "subcategory") {
      moveSubcategory(data.category, data.subcategory, targetCategory);
    }
    if (data.type === "category") {
      moveCategoryToCategory(data.category, targetCategory);
    }
    return;
  }

  if (dropzone && data.type === "subcategory") {
    promoteSubcategoryToCategory(data.category, data.subcategory);
  }
};

const render = () => {
  updateSummary();
  renderTable();
  renderCharts();
};

const resetForm = () => {
  document.getElementById("amount").value = "";
  document.getElementById("note").value = "";
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
  const subcategory = subcategorySelect.value || "";
  const amount = Number.parseFloat(document.getElementById("amount").value);
  const note = document.getElementById("note").value.trim();

  if (!date || !category || Number.isNaN(amount)) {
    return;
  }

  pushHistory();
  transactions.push({ date, type, category, subcategory, amount, note });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
  render();
  resetForm();
});

document.getElementById("type").addEventListener("change", () => {
  renderCategoryOptions();
});

categorySelect.addEventListener("change", (event) => {
  updateSubcategoryOptions(event.target.value);
});

addCategoryButton.addEventListener("click", addCategory);

newCategoryInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    addCategory();
  }
});

newSubcategoryInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    addCategory();
  }
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => setView(link.dataset.viewTarget));
});

layoutButtons.forEach((button) => {
  button.addEventListener("click", () => setLayout(button.dataset.layout));
});

filterTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    filterTabs.forEach((item) => item.classList.remove("is-active"));
    tab.classList.add("is-active");
    categoryFilter = tab.dataset.filter;
    renderCategoryManager();
  });
});

categoryManager.addEventListener("dragstart", handleDragStart);
categoryManager.addEventListener("dragend", handleDragEnd);
categoryManager.addEventListener("dragover", handleDragOver);
categoryManager.addEventListener("dragleave", handleDragLeave);
categoryManager.addEventListener("drop", handleDrop);
rootDropzone.addEventListener("dragover", handleDragOver);
rootDropzone.addEventListener("dragleave", handleDragLeave);
rootDropzone.addEventListener("drop", handleDrop);
rootDropzone.addEventListener("dragend", handleDragEnd);

undoButton.addEventListener("click", undoLastAction);

tableBody.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLButtonElement)) {
    return;
  }

  const index = Number.parseInt(target.dataset.index, 10);
  if (Number.isNaN(index)) {
    return;
  }

  pushHistory();
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
  pushHistory();
  transactions = [];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
  render();
});

toggleSubcategoryButton.addEventListener("click", () => {
  showAllSubcategories = !showAllSubcategories;
  toggleSubcategoryButton.textContent = showAllSubcategories ? "Скрыть" : "Показать все";
  renderCharts();
});

renderCategories();
resetForm();
render();
updateUndoState();
setView(localStorage.getItem(VIEW_KEY) || "dashboard");
setLayout(localStorage.getItem(LAYOUT_KEY) || "comfort");
