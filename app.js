const form = document.getElementById("transactionForm");
const tableBody = document.getElementById("transactionTable");
const totalIncomeEl = document.getElementById("totalIncome");
const totalExpenseEl = document.getElementById("totalExpense");
const balanceEl = document.getElementById("balance");
const expensePercentEl = document.getElementById("expensePercent");
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
const categoryScopeButtons = document.querySelectorAll("[data-category-scope]");
const categoryPanels = document.querySelectorAll("[data-category-panel]");
const expenseCategoryChart = document.getElementById("expenseCategoryChart");
const incomeSubcategoryChart = document.getElementById("incomeSubcategoryChart");
const expenseSubcategoryChart = document.getElementById("expenseSubcategoryChart");
const toggleSubcategoryButton = document.getElementById("toggleSubcategoryChart");
const toggleExpenseCategoryButton = document.getElementById("toggleExpenseCategoryChart");
const expensePie = document.getElementById("expensePie");
const expenseSubcategoryPie = document.getElementById("expenseSubcategoryPie");
const incomePie = document.getElementById("incomePie");
const reportLineChart = document.getElementById("reportLineChart");
const categoryManager = document.getElementById("categoryManager");
const rootDropzone = document.querySelector("[data-dropzone-root]");
const filterTabs = document.querySelectorAll("[data-filter]");
const navLinks = document.querySelectorAll("[data-view-target]");
const views = document.querySelectorAll("[data-view]");
const viewTitle = document.getElementById("viewTitle");
const layoutButtons = document.querySelectorAll("[data-layout]");
const reportStartInput = document.getElementById("reportStart");
const reportEndInput = document.getElementById("reportEnd");
const applyReportRangeButton = document.getElementById("applyReportRange");
const reportRangeButtons = document.querySelectorAll("[data-report-range]");
const reportGranularityButtons = document.querySelectorAll("[data-report-granularity]");
const reportIncomeEl = document.getElementById("reportIncome");
const reportExpenseEl = document.getElementById("reportExpense");
const reportBalanceEl = document.getElementById("reportBalance");
const reportTransactionsCountEl = document.getElementById("reportTransactionsCount");
const reportExpenseCategories = document.getElementById("reportExpenseCategories");
const reportExpenseSubcategories = document.getElementById("reportExpenseSubcategories");
const reportIncomeSubcategories = document.getElementById("reportIncomeSubcategories");
const capitalTabs = document.querySelectorAll("[data-capital-tab]");
const capitalPanels = document.querySelectorAll("[data-capital-tab-panel]");
const capitalAssetsTotal = document.getElementById("capitalAssetsTotal");
const capitalDebtsTotal = document.getElementById("capitalDebtsTotal");
const capitalNetWorth = document.getElementById("capitalNetWorth");
const capitalLedger = document.getElementById("capitalLedger");
const capitalLedgerTotal = document.getElementById("capitalLedgerTotal");
const capitalLedgerNote = document.getElementById("capitalLedgerNote");
const capitalOverviewBody = document.getElementById("capitalOverviewBody");
const capitalOverviewTotal = document.getElementById("capitalOverviewTotal");
const capitalOverviewNote = document.getElementById("capitalOverviewNote");
const capitalOverviewCurrency = document.getElementById("capitalOverviewCurrency");
const capitalOverviewReal = document.getElementById("capitalOverviewReal");
const capitalOverviewDebts = document.getElementById("capitalOverviewDebts");
const capitalOverviewDelta = document.getElementById("capitalOverviewDelta");
const capitalOverviewAssets = document.getElementById("capitalOverviewAssets");
const capitalOverviewGoals = document.getElementById("capitalOverviewGoals");
const capitalOverviewSnapshots = document.getElementById("capitalOverviewSnapshots");
const capitalOverviewDebtsList = document.getElementById("capitalOverviewDebtsList");
const capitalStructureButtons = document.querySelectorAll("[data-capital-structure]");
const capitalOverviewFilters = document.querySelectorAll("[data-capital-filter]");
const capitalAssetTypePie = document.getElementById("capitalAssetTypePie");
const capitalAssetTypeChart = document.getElementById("capitalAssetTypeChart");
const capitalExportButton = document.getElementById("capitalExport");
const capitalImportInput = document.getElementById("capitalImport");
const capitalBaseCurrency = document.getElementById("capitalBaseCurrency");
const capitalFxCurrency = document.getElementById("capitalFxCurrency");
const capitalFxRefresh = document.getElementById("capitalFxRefresh");
const capitalFxRateValue = document.getElementById("capitalFxRateValue");
const capitalFxUpdated = document.getElementById("capitalFxUpdated");
const capitalFxChart = document.getElementById("capitalFxChart");
const capitalFxNote = document.getElementById("capitalFxNote");
const capitalAssetForm = document.getElementById("capitalAssetForm");
const capitalAssetToggle = document.getElementById("capitalAssetToggle");
const capitalAssetToggleButtons = document.querySelectorAll("[data-capital-asset-toggle]");
const capitalAssetDrawer = document.getElementById("capitalAssetDrawer");
const capitalAssetOverlay = document.getElementById("capitalAssetOverlay");
const capitalAssetName = document.getElementById("capitalAssetName");
const capitalAssetType = document.getElementById("capitalAssetType");
const capitalAssetCurrency = document.getElementById("capitalAssetCurrency");
const capitalAssetAmount = document.getElementById("capitalAssetAmount");
const capitalAssetInvested = document.getElementById("capitalAssetInvested");
const capitalAssetSubcategory = document.getElementById("capitalAssetSubcategory");
const capitalAssetMaturityDate = document.getElementById("capitalAssetMaturityDate");
const capitalAssetLiquidity = document.getElementById("capitalAssetLiquidity");
const capitalAssetExpectedProfit = document.getElementById("capitalAssetExpectedProfit");
const capitalAssetNote = document.getElementById("capitalAssetNote");
const capitalAssetClose = document.getElementById("capitalAssetClose");
const capitalAssetDelete = document.getElementById("capitalAssetDelete");
const capitalAssetsTable = document.getElementById("capitalAssetsTable");
const capitalAssetViewButtons = document.querySelectorAll("[data-capital-asset-view]");
const capitalAssetPanels = document.querySelectorAll("[data-capital-asset-panel]");
const capitalCategoryForm = document.getElementById("capitalCategoryForm");
const capitalCategoryName = document.getElementById("capitalCategoryName");
const capitalSubcategoryName = document.getElementById("capitalSubcategoryName");
const capitalCategoryManager = document.getElementById("capitalCategoryManager");
const capitalWeightedApr = document.getElementById("capitalWeightedApr");
const capitalHighestApr = document.getElementById("capitalHighestApr");
const capitalInterestMonthly = document.getElementById("capitalInterestMonthly");
const capitalDebtForm = document.getElementById("capitalDebtForm");
const capitalDebtName = document.getElementById("capitalDebtName");
const capitalDebtType = document.getElementById("capitalDebtType");
const capitalDebtCurrency = document.getElementById("capitalDebtCurrency");
const capitalDebtPrincipal = document.getElementById("capitalDebtPrincipal");
const capitalDebtApr = document.getElementById("capitalDebtApr");
const capitalDebtPayment = document.getElementById("capitalDebtPayment");
const capitalDebtDueDay = document.getElementById("capitalDebtDueDay");
const capitalDebtNote = document.getElementById("capitalDebtNote");
const capitalDebtsTable = document.getElementById("capitalDebtsTable");
const capitalExtraPayment = document.getElementById("capitalExtraPayment");
const capitalPayoffTable = document.getElementById("capitalPayoffTable");
const capitalGoalForm = document.getElementById("capitalGoalForm");
const capitalGoalName = document.getElementById("capitalGoalName");
const capitalGoalKind = document.getElementById("capitalGoalKind");
const capitalGoalTarget = document.getElementById("capitalGoalTarget");
const capitalGoalDate = document.getElementById("capitalGoalDate");
const capitalGoalBaseline = document.getElementById("capitalGoalBaseline");
const capitalGoalNote = document.getElementById("capitalGoalNote");
const capitalGoalsTable = document.getElementById("capitalGoalsTable");
const capitalSnapshotNow = document.getElementById("capitalSnapshotNow");
const capitalSnapshotsChart = document.getElementById("capitalSnapshotsChart");
const capitalSnapshotsTable = document.getElementById("capitalSnapshotsTable");

const STORAGE_KEY = "budget.transactions.v2";
const CATEGORY_KEY = "budget.categories.v3";
const VIEW_KEY = "budget.view.active";
const LAYOUT_KEY = "budget.layout";
const CHART_LIMIT = 6;
const CAPITAL_KEY_V2 = "budget.capital.v2";
const CAPITAL_KEY_V1 = "budget.capital.v1";
const CAPITAL_MIGRATED_KEY = "budget.capital.migrated";

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

const DB_NAME = "budgetAppDb";
const DB_VERSION = 1;
const DB_STORE = "kv";

const dbOpen = () => new Promise((resolve, reject) => {
  const request = indexedDB.open(DB_NAME, DB_VERSION);
  request.onupgradeneeded = () => {
    const db = request.result;
    if (!db.objectStoreNames.contains(DB_STORE)) {
      db.createObjectStore(DB_STORE);
    }
  };
  request.onsuccess = () => resolve(request.result);
  request.onerror = () => reject(request.error);
});

const dbGet = async (key) => {
  const db = await dbOpen();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(DB_STORE, "readonly");
    const store = tx.objectStore(DB_STORE);
    const request = store.get(key);
    request.onsuccess = () => resolve(request.result ?? null);
    request.onerror = () => reject(request.error);
  });
};

const dbSet = async (key, value) => {
  const db = await dbOpen();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(DB_STORE, "readwrite");
    const store = tx.objectStore(DB_STORE);
    const request = store.put(value, key);
    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
};

const loadTransactions = async () => {
  try {
    const raw = await dbGet(STORAGE_KEY);
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

const loadCategories = async () => {
  try {
    const raw = await dbGet(CATEGORY_KEY);
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

const loadCapitalV2 = async () => {
  try {
    const raw = await dbGet(CAPITAL_KEY_V2);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch (error) {
    console.error("Не удалось загрузить капитал", error);
  }
  return null;
};

const saveCapitalV2 = (nextState) => {
  dbSet(CAPITAL_KEY_V2, JSON.stringify(nextState));
};

const loadCapitalV1 = async () => {
  try {
    const raw = await dbGet(CAPITAL_KEY_V1);
    return raw ? JSON.parse(raw) : null;
  } catch (error) {
    console.error("Не удалось загрузить капитал (v1)", error);
    return null;
  }
};

const migrateCapitalState = async () => {
  const existing = await loadCapitalV2();
  if (existing) {
    return existing;
  }

  const migratedFlag = await dbGet(CAPITAL_MIGRATED_KEY);
  const legacy = await loadCapitalV1();
  const baseState = {
    assets: [],
    debts: [],
    goals: [],
    snapshots: [],
    settings: {
      baseCurrency: "RUB",
      fxRates: {},
    },
  };

  if (!legacy || migratedFlag) {
    saveCapitalV2(baseState);
    dbSet(CAPITAL_MIGRATED_KEY, "true");
    return baseState;
  }

  const now = new Date().toISOString();
  const mappedAssets = (legacy.assets || []).map((item) => ({
    id: (crypto.randomUUID?.() || `asset-${Date.now()}-${Math.random()}`),
    name: item.name,
    type: "bank",
    currency: "RUB",
    amount: item.amount,
    invested: item.amount,
    section: item.type === "deposit" ? "Вклады" : "В наличии",
    liquidity: "high",
    liquidityDays: null,
    expectedProfit: item.type === "deposit" ? 0 : null,
    maturityDate: item.type === "deposit" ? (item.unlockDate || "") : "",
    institution: "",
    note: item.note || "",
    updatedAt: now,
  }));
  const mappedDebts = (legacy.debts || []).map((item) => ({
    id: (crypto.randomUUID?.() || `debt-${Date.now()}-${Math.random()}`),
    name: item.name,
    type: "loan",
    currency: "RUB",
    principal: item.amount,
    apr: null,
    paymentMin: null,
    dueDay: null,
    note: item.note || "",
    updatedAt: now,
  }));
  const mappedGoals = (legacy.goals || []).map((item) => ({
    id: (crypto.randomUUID?.() || `goal-${Date.now()}-${Math.random()}`),
    name: `Цель ${item.year}`,
    kind: "netWorth",
    targetAmount: item.target,
    targetDate: `${item.year}-12`,
    baselineAmount: item.actual ?? null,
    note: "",
  }));
  const mappedSnapshots = (legacy.history || []).map((item, index, list) => {
    const prev = list[index - 1];
    const delta = prev ? item.total - prev.total : 0;
    return {
      month: item.month,
      assetsTotal: item.total,
      debtsTotal: 0,
      netWorth: item.total,
      delta,
      note: "",
    };
  });

  const migrated = {
    ...baseState,
    assets: mappedAssets,
    debts: mappedDebts,
    goals: mappedGoals,
    snapshots: mappedSnapshots,
  };
  saveCapitalV2(migrated);
  dbSet(CAPITAL_MIGRATED_KEY, "true");
  return migrated;
};

const saveCategories = (nextCategories) => {
  dbSet(CATEGORY_KEY, JSON.stringify(nextCategories));
};

let transactions = [];
let categories = [];
let historyStack = [];
let showAllSubcategories = false;
let showAllExpenseCategories = false;
let categoryFilter = "all";
let reportGranularity = "daily";
let reportRange = { start: "", end: "" };
let capitalState = null;
let capitalOverviewFilter = "all";
let capitalEditingAssetId = null;

const capitalIsUnconvertible = (asset) =>
  asset.currency !== capitalState?.settings?.baseCurrency
  && !capitalState?.settings?.fxRates?.[asset.currency];

const normalizeCapitalState = () => {
  if (!capitalState) {
    return;
  }
  capitalState.settings = capitalState.settings || { baseCurrency: "RUB", fxRates: {} };
  capitalState.settings.baseCurrency = capitalState.settings.baseCurrency || "RUB";
  capitalState.settings.fxRates = capitalState.settings.fxRates || {};
  if (!capitalState.assetCategories) {
    capitalState.assetCategories = [];
  }
  if (!Array.isArray(capitalState.assetCategories)) {
    capitalState.assetCategories = Object.entries(capitalState.assetCategories).map(([name, subs]) => ({
      name,
      subs: Array.isArray(subs) ? subs : [],
    }));
  }
  capitalState.assets = (capitalState.assets || []).map((asset) => {
    const isDeposit = asset.type === "deposit";
    const maturityDate = asset.maturityDate || (isDeposit ? asset.unlockDate : "") || "";
    const liquidity = maturityDate ? "locked" : (asset.liquidity || "high");
    const categoryFallback = asset.section || (isDeposit ? "Вклады" : "В наличии");
    return {
      section: asset.section || (isDeposit ? "Вклады" : "В наличии"),
      category: asset.category || categoryFallback,
      subcategory: asset.subcategory || "",
      invested: asset.invested ?? asset.amount ?? 0,
      liquidity,
      liquidityDays: asset.liquidityDays ?? null,
      expectedProfit: isDeposit ? (asset.expectedProfit ?? null) : null,
      maturityDate,
      unconvertible: asset.unconvertible ?? false,
      ...asset,
    };
  });
  capitalState.assets = capitalState.assets.map((asset) => ({
    ...asset,
    unconvertible: capitalIsUnconvertible(asset),
  }));
  if (!capitalState.assetCategories.length) {
    const categoryMap = new Map();
    capitalState.assets.forEach((asset) => {
      const name = asset.category || asset.section || "В наличии";
      if (!categoryMap.has(name)) {
        categoryMap.set(name, new Set());
      }
      if (asset.subcategory) {
        categoryMap.get(name).add(asset.subcategory);
      }
    });
    capitalState.assetCategories = [...categoryMap.entries()].map(([name, subs]) => ({
      name,
      subs: [...subs],
    }));
  }
  capitalState.debts = capitalState.debts || [];
  capitalState.goals = capitalState.goals || [];
  capitalState.snapshots = capitalState.snapshots || [];
};

normalizeCapitalState();

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
  dbSet(STORAGE_KEY, JSON.stringify(transactions));
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
  const percent = totals.income > 0 ? (totals.expense / totals.income) * 100 : 0;
  expensePercentEl.textContent = `${percent.toFixed(1)}% от доходов`;
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

const buildTotals = (filterType, source = transactions) => {
  return source
    .filter((item) => (filterType ? item.type === filterType : true))
    .reduce(
      (acc, item) => {
        acc[item.category] = (acc[item.category] || 0) + item.amount;
        return acc;
      },
      {}
    );
};

const buildSubTotals = (type, source = transactions) => {
  return source
    .filter((item) => item.type === type && item.subcategory)
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
  const formatter = options.formatter || currencyFormatter;

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
    amount.textContent = formatter.format(value);

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

const renderLineChart = (target, data) => {
  target.innerHTML = "";

  if (data.length === 0) {
    target.innerHTML = "<text x='50%' y='50%' text-anchor='middle' fill='#94a3b8'>Нет данных</text>";
    return;
  }

  const width = 720;
  const height = 260;
  const paddingX = 56;
  const paddingY = 28;
  const chartWidth = width - paddingX * 2;
  const chartHeight = height - paddingY * 2;

  const maxValue = Math.max(
    ...data.map((item) => Math.max(item.income, item.expense, 0)),
    1
  );

  const scaleX = (index) =>
    paddingX + (chartWidth * index) / Math.max(data.length - 1, 1);
  const scaleY = (value) => paddingY + chartHeight - (value / maxValue) * chartHeight;

  const background = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  background.setAttribute("x", paddingX - 8);
  background.setAttribute("y", paddingY - 8);
  background.setAttribute("width", chartWidth + 16);
  background.setAttribute("height", chartHeight + 16);
  background.setAttribute("fill", "#f8fafc");
  background.setAttribute("rx", "16");

  const drawLine = (values, color) => {
    const points = values
      .map((value, index) => `${scaleX(index)},${scaleY(value)}`)
      .join(" ");
    const line = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
    line.setAttribute("points", points);
    line.setAttribute("fill", "none");
    line.setAttribute("stroke", color);
    line.setAttribute("stroke-width", "3.5");
    line.setAttribute("stroke-linecap", "round");
    return line;
  };

  const drawArea = (values, color) => {
    const points = values.map((value, index) => ({
      x: scaleX(index),
      y: scaleY(value),
    }));
    const baseY = paddingY + chartHeight;
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    const d = [
      `M ${points[0].x} ${baseY}`,
      `L ${points[0].x} ${points[0].y}`,
      ...points.slice(1).map((pt) => `L ${pt.x} ${pt.y}`),
      `L ${points[points.length - 1].x} ${baseY}`,
      "Z",
    ].join(" ");
    path.setAttribute("d", d);
    path.setAttribute("fill", color);
    path.setAttribute("opacity", "0.12");
    return path;
  };

  const drawPoints = (values, color) => {
    const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
    values.forEach((value, index) => {
      const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      circle.setAttribute("cx", scaleX(index));
      circle.setAttribute("cy", scaleY(value));
      circle.setAttribute("r", "4");
      circle.setAttribute("fill", "#fff");
      circle.setAttribute("stroke", color);
      circle.setAttribute("stroke-width", "2");
      group.appendChild(circle);
    });
    return group;
  };

  const grid = document.createElementNS("http://www.w3.org/2000/svg", "g");
  for (let i = 0; i <= 4; i += 1) {
    const y = paddingY + (chartHeight * i) / 4;
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", paddingX);
    line.setAttribute("x2", width - paddingX);
    line.setAttribute("y1", y);
    line.setAttribute("y2", y);
    line.setAttribute("stroke", "#e2e8f0");
    line.setAttribute("stroke-dasharray", "4 4");
    grid.appendChild(line);
  }

  const yAxis = document.createElementNS("http://www.w3.org/2000/svg", "g");
  [maxValue, maxValue / 2, 0].forEach((value, index) => {
    const y = paddingY + (chartHeight * index) / 2;
    const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
    label.setAttribute("x", paddingX - 12);
    label.setAttribute("y", y + 4);
    label.setAttribute("text-anchor", "end");
    label.setAttribute("fill", "#94a3b8");
    label.setAttribute("font-size", "10");
    label.textContent = currencyFormatter.format(value).replace(",00", "");
    yAxis.appendChild(label);
  });

  const axis = document.createElementNS("http://www.w3.org/2000/svg", "g");
  const labelStep = Math.max(1, Math.floor(data.length / 6));
  data.forEach((item, index) => {
    if (index % labelStep !== 0 && index !== data.length - 1) {
      return;
    }
    const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
    label.setAttribute("x", scaleX(index));
    label.setAttribute("y", height - 8);
    label.setAttribute("text-anchor", "middle");
    label.setAttribute("fill", "#94a3b8");
    label.setAttribute("font-size", "10");
    label.textContent = item.label;
    axis.appendChild(label);
  });

  const incomeArea = drawArea(data.map((item) => item.income), "#16a34a");
  const expenseArea = drawArea(data.map((item) => item.expense), "#ea580c");
  const incomeLine = drawLine(data.map((item) => item.income), "#16a34a");
  const expenseLine = drawLine(data.map((item) => item.expense), "#ea580c");
  const incomePoints = drawPoints(data.map((item) => item.income), "#16a34a");
  const expensePoints = drawPoints(data.map((item) => item.expense), "#ea580c");

  target.appendChild(background);
  target.appendChild(grid);
  target.appendChild(yAxis);
  target.appendChild(axis);
  target.appendChild(incomeArea);
  target.appendChild(expenseArea);
  target.appendChild(incomeLine);
  target.appendChild(expenseLine);
  target.appendChild(incomePoints);
  target.appendChild(expensePoints);
};

const buildSeries = (formatter, source = transactions) => {
  const dataMap = {};
  source.forEach((item) => {
    const key = formatter(item.date);
    if (!dataMap[key]) {
      dataMap[key] = { income: 0, expense: 0 };
    }
    dataMap[key][item.type] += item.amount;
  });

  return Object.keys(dataMap)
    .sort()
    .map((label) => ({ label, ...dataMap[label] }));
};

const syncToggleButton = (button, isExpanded, canExpand) => {
  if (!button) {
    return;
  }
  if (!canExpand) {
    button.classList.add("is-hidden");
    button.disabled = true;
  } else {
    button.classList.remove("is-hidden");
    button.disabled = false;
  }
  button.textContent = isExpanded ? "Скрыть" : "Показать все";
};

const renderCharts = () => {
  const incomeSubcategoryTotals = buildSubTotals("income");
  const expenseCategoryTotals = buildTotals("expense");
  const expenseSubcategoryTotals = buildSubTotals("expense");
  const canExpandExpenseCategories =
    Object.keys(expenseCategoryTotals).length > CHART_LIMIT;
  const canExpandExpenseSubcategories =
    Object.keys(expenseSubcategoryTotals).length > CHART_LIMIT;

  if (!canExpandExpenseCategories) {
    showAllExpenseCategories = false;
  }
  if (!canExpandExpenseSubcategories) {
    showAllSubcategories = false;
  }

  renderChart(
    incomeSubcategoryChart,
    incomeSubcategoryTotals,
    "Добавьте доходы с подкатегориями, чтобы увидеть диаграмму.",
    { limit: CHART_LIMIT }
  );
  renderChart(
    expenseCategoryChart,
    expenseCategoryTotals,
    "Добавьте расходы, чтобы увидеть диаграмму.",
    { limit: showAllExpenseCategories ? null : CHART_LIMIT }
  );
  renderChart(
    expenseSubcategoryChart,
    expenseSubcategoryTotals,
    "Добавьте расходы с подкатегориями, чтобы увидеть детализацию.",
    { limit: showAllSubcategories ? null : CHART_LIMIT }
  );
  renderPie(
    expensePie,
    expenseCategoryTotals,
    "Добавьте расходы, чтобы увидеть диаграмму."
  );
  renderPie(
    expenseSubcategoryPie,
    expenseSubcategoryTotals,
    "Добавьте расходы с подкатегориями, чтобы увидеть диаграмму."
  );
  renderPie(
    incomePie,
    incomeSubcategoryTotals,
    "Добавьте доходы с подкатегориями, чтобы увидеть диаграмму."
  );

  syncToggleButton(toggleExpenseCategoryButton, showAllExpenseCategories, canExpandExpenseCategories);
  syncToggleButton(toggleSubcategoryButton, showAllSubcategories, canExpandExpenseSubcategories);
};

const getCategoryNames = (type) =>
  Object.keys(categories).filter((name) => (type ? categories[name].type === type : true));

const renderCategoryOptions = () => {
  const activeType = document.getElementById("type").value;
  const options = getCategoryNames(activeType).sort();

  categorySelect.innerHTML = "";

  options.forEach((name) => {
    const option = document.createElement("option");
    option.value = name;
    option.textContent = name;
    categorySelect.appendChild(option);
  });

  if (!categorySelect.value && options.length > 0) {
    categorySelect.value = options[0];
  }
  updateSubcategoryOptions(categorySelect.value);
};

const renderCategoryListOptions = () => {
  const activeType = categoryTypeSelect.value;
  const names = getCategoryNames(activeType).sort();
  categoryList.innerHTML = "";
  names.forEach((name) => {
    const listOption = document.createElement("option");
    listOption.value = name;
    categoryList.appendChild(listOption);
  });
};

const renderCategories = () => {
  renderCategoryOptions();
  renderCategoryListOptions();
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

const getDateBounds = (items) => {
  if (!items.length) {
    return { start: "", end: "" };
  }
  const dates = items.map((item) => item.date).sort();
  return { start: dates[0], end: dates[dates.length - 1] };
};

const clampReportRange = (start, end) => {
  if (!start || !end) {
    return { start, end };
  }
  return start > end ? { start: end, end: start } : { start, end };
};

const setReportRange = (start, end) => {
  const clamped = clampReportRange(start, end);
  reportRange = clamped;
  reportStartInput.value = clamped.start || "";
  reportEndInput.value = clamped.end || "";
};

const filterTransactionsByRange = (items) => {
  const { start, end } = reportRange;
  if (!start && !end) {
    return items;
  }
  return items.filter((item) => {
    if (start && item.date < start) {
      return false;
    }
    if (end && item.date > end) {
      return false;
    }
    return true;
  });
};

const renderReports = () => {
  const filtered = filterTransactionsByRange(transactions);
  const totals = filtered.reduce(
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

  reportIncomeEl.textContent = currencyFormatter.format(totals.income);
  reportExpenseEl.textContent = currencyFormatter.format(totals.expense);
  reportBalanceEl.textContent = currencyFormatter.format(totals.income - totals.expense);
  reportTransactionsCountEl.textContent = filtered.length;

  const expenseCategoryTotals = buildTotals("expense", filtered);
  const expenseSubcategoryTotals = buildSubTotals("expense", filtered);
  const incomeSubcategoryTotals = buildSubTotals("income", filtered);

  renderChart(
    reportExpenseCategories,
    expenseCategoryTotals,
    "Нет расходов за выбранный период.",
    { limit: 8 }
  );
  renderChart(
    reportExpenseSubcategories,
    expenseSubcategoryTotals,
    "Нет расходов с подкатегориями за выбранный период.",
    { limit: 8 }
  );
  renderChart(
    reportIncomeSubcategories,
    incomeSubcategoryTotals,
    "Нет доходов с подкатегориями за выбранный период.",
    { limit: 8 }
  );

  const seriesFormatter = reportGranularity === "monthly"
    ? (date) => date.slice(0, 7)
    : (date) => date;
  renderLineChart(reportLineChart, buildSeries(seriesFormatter, filtered));
};

const capitalFormatMoney = (value) => {
  const formatter = new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: capitalState.settings.baseCurrency,
    minimumFractionDigits: 2,
  });
  return formatter.format(value);
};

const capitalFormatShort = (value) =>
  capitalFormatMoney(value).replace(",00", "");

const capitalNowIso = () => new Date().toISOString();

const capitalGenerateId = (prefix) =>
  (crypto.randomUUID?.() || `${prefix}-${Date.now()}-${Math.random()}`);

const capitalMonthKey = () => new Date().toISOString().slice(0, 7);

const capitalToBase = (value, currency) => {
  if (currency === capitalState.settings.baseCurrency) {
    return value;
  }
  const rate = capitalState.settings.fxRates[currency];
  if (!rate) {
    return null;
  }
  return value * rate;
};

const capitalFxEndpoint = "https://api.exchangerate.host";

const capitalFetchRate = async (base, currency) => {
  const url = `${capitalFxEndpoint}/latest?base=${encodeURIComponent(base)}&symbols=${encodeURIComponent(currency)}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("FX fetch failed");
  }
  const data = await response.json();
  const rate = data?.rates?.[currency];
  if (!rate) {
    throw new Error("No rate");
  }
  return rate;
};

const capitalFetchSeries = async (base, currency) => {
  const end = new Date();
  const start = new Date();
  start.setDate(end.getDate() - 29);
  const startDate = start.toISOString().slice(0, 10);
  const endDate = end.toISOString().slice(0, 10);
  const url = `${capitalFxEndpoint}/timeseries?base=${encodeURIComponent(base)}&symbols=${encodeURIComponent(currency)}&start_date=${startDate}&end_date=${endDate}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("FX series fetch failed");
  }
  const data = await response.json();
  const entries = Object.entries(data?.rates || {}).sort(([a], [b]) => a.localeCompare(b));
  return entries.map(([date, rates]) => ({ date, value: rates[currency] })).filter((item) => item.value);
};

const renderFxChart = (series) => {
  if (!capitalFxChart) {
    return;
  }
  capitalFxChart.innerHTML = "";
  if (!series.length) {
    return;
  }
  const values = series.map((item) => item.value);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const width = 360;
  const height = 120;
  const pad = 12;
  const scaleX = (index) => pad + (index / (series.length - 1 || 1)) * (width - pad * 2);
  const scaleY = (value) => {
    if (max === min) {
      return height / 2;
    }
    const ratio = (value - min) / (max - min);
    return height - pad - ratio * (height - pad * 2);
  };
  const path = series
    .map((item, index) => `${index === 0 ? "M" : "L"}${scaleX(index)},${scaleY(item.value)}`)
    .join(" ");
  const line = document.createElementNS("http://www.w3.org/2000/svg", "path");
  line.setAttribute("d", path);
  line.setAttribute("fill", "none");
  line.setAttribute("stroke", "#2563eb");
  line.setAttribute("stroke-width", "2");
  const area = document.createElementNS("http://www.w3.org/2000/svg", "path");
  area.setAttribute("d", `${path} L${scaleX(series.length - 1)},${height - pad} L${scaleX(0)},${height - pad} Z`);
  area.setAttribute("fill", "rgba(37, 99, 235, 0.12)");
  capitalFxChart.appendChild(area);
  capitalFxChart.appendChild(line);
};

const refreshFxRate = async () => {
  if (!capitalBaseCurrency || !capitalFxCurrency) {
    return;
  }
  const base = capitalBaseCurrency.value.trim().toUpperCase() || "RUB";
  const currency = capitalFxCurrency.value.trim().toUpperCase();
  if (!currency || currency === base) {
    capitalFxRateValue.textContent = "—";
    capitalFxUpdated.textContent = "";
    capitalFxNote.textContent = "";
    renderFxChart([]);
    return;
  }
  capitalFxNote.textContent = "Загружаем курс...";
  try {
    const rate = await capitalFetchRate(base, currency);
    capitalState.settings.baseCurrency = base;
    capitalState.settings.fxRates[currency] = rate;
    saveCapitalV2(capitalState);
    capitalFxRateValue.textContent = rate.toFixed(4);
    capitalFxUpdated.textContent = `на ${new Date().toLocaleDateString("ru-RU")}`;
    capitalFxNote.textContent = "";
    const series = await capitalFetchSeries(base, currency);
    renderFxChart(series);
    renderCapitalView();
  } catch (error) {
    capitalFxNote.textContent = "Не удалось обновить курс. Проверьте соединение.";
  }
};

const ensureFxRateForCurrency = async (currency) => {
  const base = capitalState.settings.baseCurrency;
  const normalized = currency.trim().toUpperCase();
  if (!normalized || normalized === base) {
    return;
  }
  if (capitalState.settings.fxRates[normalized]) {
    return;
  }
  try {
    const rate = await capitalFetchRate(base, normalized);
    capitalState.settings.fxRates[normalized] = rate;
    saveCapitalV2(capitalState);
  } catch (error) {
    // silent: rate can be missing
  }
};

const capitalTotals = () => {
  const missingRates = [];
  const assetsTotal = capitalState.assets.reduce((sum, item) => {
    const converted = capitalToBase(item.amount, item.currency);
    if (converted == null && capitalIsUnconvertible(item)) {
      missingRates.push(item.currency);
      return sum;
    }
    return sum + (converted ?? item.amount);
  }, 0);
  const debtsTotal = capitalState.debts.reduce((sum, item) => {
    const converted = capitalToBase(item.principal, item.currency);
    if (converted == null && item.currency !== capitalState.settings.baseCurrency) {
      missingRates.push(item.currency);
      return sum;
    }
    return sum + (converted ?? item.principal);
  }, 0);
  return { assetsTotal, debtsTotal, netWorth: assetsTotal - debtsTotal, missingRates };
};

const capitalTypeLabel = (type) => ({
  cash: "Наличные",
  bank: "Банк",
  deposit: "Вклад",
  investment: "Инвестиции",
  real_estate: "Недвижимость",
  other: "Другое",
}[type] || type);

const capitalLiquidityLabel = (value) => ({
  high: "Можно вывести сразу",
  medium: "Нужно 1–3 дня",
  low: "Сложно/долго вывести",
  locked: "Заблокировано до даты",
}[value] || value);

const capitalDebtTypeLabel = (value) => ({
  credit_card: "Кредитная карта",
  loan: "Кредит",
  mortgage: "Ипотека",
  personal: "Личный долг",
  other: "Другое",
}[value] || value);

const capitalEnsureSnapshot = () => {
  const month = capitalMonthKey();
  const existing = capitalState.snapshots.find((item) => item.month === month);
  if (existing) {
    return;
  }
  const totals = capitalTotals();
  const last = capitalState.snapshots
    .slice()
    .sort((a, b) => a.month.localeCompare(b.month))
    .pop();
  const delta = last ? totals.netWorth - last.netWorth : 0;
  capitalState.snapshots.push({
    month,
    assetsTotal: totals.assetsTotal,
    debtsTotal: totals.debtsTotal,
    netWorth: totals.netWorth,
    delta,
    note: "",
  });
  saveCapitalV2(capitalState);
};

const renderCapitalSummary = () => {
  const totals = capitalTotals();
  if (capitalAssetsTotal) {
    capitalAssetsTotal.textContent = capitalFormatMoney(totals.assetsTotal);
  }
  if (capitalDebtsTotal) {
    capitalDebtsTotal.textContent = capitalFormatMoney(totals.debtsTotal);
  }
  if (capitalNetWorth) {
    capitalNetWorth.textContent = capitalFormatMoney(totals.netWorth);
  }
  return totals;
};

const renderCapitalLedger = () => {
  if (!capitalLedger) {
    return;
  }
  const totals = capitalTotals();
  capitalLedger.innerHTML = "";
  capitalLedgerTotal.textContent = capitalFormatMoney(totals.assetsTotal);
  capitalLedgerNote.textContent = totals.missingRates.length
    ? `Не учтены суммы без курса: ${[...new Set(totals.missingRates)].join(", ")}.`
    : "";

  const filteredAssets = capitalState.assets.filter((asset) => {
    if (capitalOverviewFilter === "all") {
      return true;
    }
    return asset.liquidity === capitalOverviewFilter;
  });

  if (!filteredAssets.length) {
    capitalLedger.innerHTML = "<p class='hint'>Добавьте активы, чтобы увидеть список.</p>";
    return;
  }

  const header = document.createElement("div");
  header.className = "capital-ledger-row capital-ledger-head";
  header.innerHTML = `
    <div>Актив</div>
    <div class="capital-ledger-amount">Сумма (${capitalState.settings.baseCurrency})</div>
    <div class="capital-ledger-profit">Потенциальная доходность</div>
    <div class="capital-ledger-note">Комментарий</div>
  `;
  capitalLedger.appendChild(header);

  const grouped = new Map();
  filteredAssets.forEach((asset) => {
    const category = asset.category || asset.section || "В наличии";
    if (!grouped.has(category)) {
      grouped.set(category, new Map());
    }
    const subcategory = asset.subcategory || "Без подкатегории";
    if (!grouped.get(category).has(subcategory)) {
      grouped.get(category).set(subcategory, []);
    }
    grouped.get(category).get(subcategory).push(asset);
  });

  grouped.forEach((subcategories, categoryName) => {
    const categoryHeader = document.createElement("div");
    categoryHeader.className = "capital-ledger-section";
    categoryHeader.textContent = categoryName;
    capitalLedger.appendChild(categoryHeader);

    subcategories.forEach((assets, subcategoryName) => {
      const subHeader = document.createElement("div");
      subHeader.className = "capital-ledger-note";
      subHeader.textContent = subcategoryName;
      capitalLedger.appendChild(subHeader);

      assets.forEach((asset) => {
        const converted = capitalToBase(asset.amount, asset.currency);
        const hasRate = converted != null || !capitalIsUnconvertible(asset);
        const amountLabel = hasRate
          ? capitalFormatMoney(converted ?? asset.amount)
          : `нет курса для ${asset.currency}`;

        let profitLabel = "—";
        let profitSubtext = "";
        if (asset.expectedProfit != null && asset.expectedProfit !== "") {
          const profitConverted = capitalToBase(asset.expectedProfit, asset.currency);
          if (profitConverted == null && capitalIsUnconvertible(asset)) {
            profitLabel = `нет курса для ${asset.currency}`;
          } else {
            profitLabel = capitalFormatMoney(profitConverted ?? asset.expectedProfit);
            if (asset.currency !== capitalState.settings.baseCurrency) {
              profitSubtext = `оригинал: ${asset.expectedProfit.toFixed(2)} ${asset.currency}`;
            }
          }
        }

        const row = document.createElement("div");
        row.className = `capital-ledger-row${hasRate ? "" : " is-warning"}`;
        row.innerHTML = `
          <div>
            <div>${asset.name}</div>
            <div class="capital-ledger-meta">
              <span>${asset.category || asset.section || "В наличии"}</span>
              <span>${asset.subcategory || "Без подкатегории"}</span>
              <span>${capitalLiquidityLabel(asset.liquidity)}</span>
            </div>
          </div>
          <div class="capital-ledger-amount">
            ${amountLabel}
            ${asset.currency !== capitalState.settings.baseCurrency && hasRate
              ? `<span>оригинал: ${asset.amount.toFixed(2)} ${asset.currency}</span>`
              : ""}
          </div>
          <div class="capital-ledger-profit">
            ${profitLabel}
            ${asset.maturityDate ? `<span>ожидаемо к ${asset.maturityDate}</span>` : ""}
            ${profitSubtext ? `<span>${profitSubtext}</span>` : ""}
          </div>
          <div class="capital-ledger-note">${asset.note || "—"}</div>
        `;
        capitalLedger.appendChild(row);
      });
    });
  });
};

const renderCapitalStructureCharts = () => {
  if (!capitalAssetTypeChart || !capitalAssetTypePie) {
    return;
  }
  const formatter = new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: capitalState.settings.baseCurrency,
    minimumFractionDigits: 2,
  });
  const assetTotals = capitalState.assets.reduce((acc, item) => {
    const converted = capitalToBase(item.amount, item.currency);
    if (converted == null && capitalIsUnconvertible(item)) {
      return acc;
    }
    acc[item.type] = (acc[item.type] || 0) + (converted ?? item.amount);
    return acc;
  }, {});
  renderChart(
    capitalAssetTypeChart,
    assetTotals,
    "Добавьте активы, чтобы увидеть структуру.",
    { limit: 6, formatter }
  );
  renderPie(
    capitalAssetTypePie,
    assetTotals,
    "Добавьте активы, чтобы увидеть структуру."
  );
};

const renderCapitalOverview = () => {
  if (!capitalOverviewBody) {
    return;
  }
  const baseCurrency = capitalState.settings.baseCurrency;
  const formatter = new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: baseCurrency,
    minimumFractionDigits: 2,
  });
  capitalOverviewCurrency.textContent = baseCurrency;
  capitalOverviewBody.innerHTML = "";
  capitalOverviewTotal.textContent = formatter.format(0);
  capitalOverviewNote.textContent = "";

  if (!capitalState.assets.length) {
    capitalOverviewBody.innerHTML = "<p class='hint'>Добавьте активы, чтобы увидеть обзор капитала.</p>";
    return;
  }

  const sections = new Map();
  capitalState.assets.forEach((asset) => {
    const section = asset.section || (asset.type === "deposit" ? "Вклады" : "В наличии");
    if (!sections.has(section)) {
      sections.set(section, []);
    }
    sections.get(section).push(asset);
  });

  const sectionOrder = ["В наличии", "Вклады"];
  const orderedSections = [
    ...sectionOrder.filter((section) => sections.has(section)),
    ...[...sections.keys()].filter((section) => !sectionOrder.includes(section)),
  ];

  let grandTotal = 0;
  const missingRates = new Set();

  orderedSections.forEach((section) => {
    const header = document.createElement("div");
    header.className = "capital-overview-section";
    header.textContent = section;
    capitalOverviewBody.appendChild(header);

    let sectionTotal = 0;
    sections.get(section).forEach((asset) => {
      const row = document.createElement("div");
      row.className = "capital-overview-row";

      const nameCell = document.createElement("div");
      nameCell.className = "capital-overview-cell";
      nameCell.textContent = asset.name;

      const amountCell = document.createElement("div");
      amountCell.className = "capital-overview-cell is-amount";

      const amountValue = document.createElement("div");
      amountValue.className = "capital-overview-amount";

      const converted = capitalToBase(asset.amount, asset.currency);
      const hasRate = converted != null || !capitalIsUnconvertible(asset);
      if (hasRate) {
        const amount = converted ?? asset.amount;
        amountValue.textContent = formatter.format(amount);
        sectionTotal += amount;
        grandTotal += amount;
        if (asset.currency !== baseCurrency) {
          const original = document.createElement("div");
          original.className = "capital-overview-subtext";
          original.textContent = `оригинал: ${asset.amount.toFixed(2)} ${asset.currency}`;
          amountCell.appendChild(original);
        }
      } else {
        row.classList.add("is-warning");
        amountValue.textContent = `нет курса для ${asset.currency}`;
        missingRates.add(asset.currency);
      }

      amountCell.prepend(amountValue);

      const noteCell = document.createElement("div");
      noteCell.className = "capital-overview-cell";
      noteCell.textContent = asset.note ? asset.note : "—";

      row.append(nameCell, amountCell, noteCell);
      capitalOverviewBody.appendChild(row);
    });

    const subtotal = document.createElement("div");
    subtotal.className = "capital-overview-row capital-overview-subtotal";
    subtotal.innerHTML = `
      <div class="capital-overview-cell">Итого ${section}</div>
      <div class="capital-overview-cell is-amount">${formatter.format(sectionTotal)}</div>
      <div class="capital-overview-cell"> </div>
    `;
    capitalOverviewBody.appendChild(subtotal);
  });

  capitalOverviewTotal.textContent = formatter.format(grandTotal);
  if (missingRates.size) {
    capitalOverviewNote.textContent = `Не учтены суммы без курса: ${[...missingRates].join(", ")}.`;
  }
};

const renderCapitalOverviewDashboard = () => {
  if (!capitalOverviewTotal || !capitalOverviewAssets || !capitalOverviewGoals) {
    return;
  }
  const totals = capitalTotals();
  const formatter = new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: capitalState.settings.baseCurrency,
    minimumFractionDigits: 2,
  });
  capitalOverviewTotal.textContent = formatter.format(totals.assetsTotal);
  if (capitalOverviewReal) {
    capitalOverviewReal.textContent = formatter.format(totals.netWorth);
  }
  if (capitalOverviewDebts) {
    capitalOverviewDebts.textContent = formatter.format(totals.debtsTotal);
  }

  if (capitalOverviewDelta) {
    const sorted = capitalState.snapshots.slice().sort((a, b) => a.month.localeCompare(b.month));
    const last = sorted[sorted.length - 1];
    const prev = sorted[sorted.length - 2];
    if (last && prev && prev.netWorth) {
      const deltaPercent = ((last.netWorth - prev.netWorth) / prev.netWorth) * 100;
      const sign = deltaPercent >= 0 ? "+" : "";
      capitalOverviewDelta.textContent = `${sign}${deltaPercent.toFixed(1)}% за месяц`;
      capitalOverviewDelta.style.color = deltaPercent >= 0 ? "#16a34a" : "#dc2626";
    } else {
      capitalOverviewDelta.textContent = "—";
    }
  }

  capitalOverviewAssets.innerHTML = "";
  const assetRows = capitalState.assets.slice().sort((a, b) => b.amount - a.amount);
  if (!assetRows.length) {
    capitalOverviewAssets.innerHTML = "<p class='hint'>Добавьте активы.</p>";
  } else {
    assetRows.forEach((asset) => {
      const converted = capitalToBase(asset.amount, asset.currency);
      const amountLabel = converted == null && capitalIsUnconvertible(asset)
        ? `нет курса для ${asset.currency}`
        : formatter.format(converted ?? asset.amount);
      const row = document.createElement("div");
      row.className = "capital-overview-row";
      row.innerHTML = `
        <div>
          <strong>${asset.name}</strong>
          <span>${asset.category || asset.section || "В наличии"}</span>
        </div>
        <div>${amountLabel}</div>
      `;
      capitalOverviewAssets.appendChild(row);
    });
  }

  capitalOverviewGoals.innerHTML = "";
  if (!capitalState.goals.length) {
    capitalOverviewGoals.innerHTML = "<p class='hint'>Добавьте финансовые цели.</p>";
  } else {
    capitalState.goals.forEach((goal) => {
      const current = goalProgress(goal);
      const percent = goal.targetAmount ? Math.min(100, (current / goal.targetAmount) * 100) : 0;
      const goalRow = document.createElement("div");
      goalRow.className = "capital-goal";
      goalRow.innerHTML = `
        <div class="capital-overview-row">
          <div>
            <strong>${goal.name}</strong>
            <span>${goal.targetDate}</span>
          </div>
          <div>${percent.toFixed(0)}%</div>
        </div>
        <div class="capital-goal-bar"><span style="width:${percent}%"></span></div>
        <div class="capital-overview-row">
          <span>Цель</span>
          <strong>${formatter.format(goal.targetAmount)}</strong>
        </div>
        <div class="capital-overview-row">
          <span>Факт</span>
          <strong>${formatter.format(current)}</strong>
        </div>
      `;
      capitalOverviewGoals.appendChild(goalRow);
    });
  }

  if (capitalOverviewSnapshots) {
    capitalOverviewSnapshots.innerHTML = "";
    const snapshots = capitalState.snapshots.slice().sort((a, b) => b.month.localeCompare(a.month)).slice(0, 4);
    if (!snapshots.length) {
      capitalOverviewSnapshots.innerHTML = "<p class='hint'>Нет снимков капитала.</p>";
    } else {
      snapshots.forEach((item) => {
        const row = document.createElement("div");
        row.className = "capital-overview-row";
        const deltaLabel = item.delta ? `${item.delta > 0 ? "+" : ""}${formatter.format(item.delta)}` : "—";
        row.innerHTML = `
          <div>
            <strong>${item.month}</strong>
            <span>${deltaLabel}</span>
          </div>
          <div>${formatter.format(item.netWorth)}</div>
        `;
        capitalOverviewSnapshots.appendChild(row);
      });
    }
  }

  if (capitalOverviewDebtsList) {
    capitalOverviewDebtsList.innerHTML = "";
    if (!capitalState.debts.length) {
      capitalOverviewDebtsList.innerHTML = "<p class='hint'>Долгов нет.</p>";
    } else {
      capitalState.debts.forEach((debt) => {
        const converted = capitalToBase(debt.principal, debt.currency);
        const amountLabel = converted == null && debt.currency !== capitalState.settings.baseCurrency
          ? `нет курса для ${debt.currency}`
          : formatter.format(converted ?? debt.principal);
        const row = document.createElement("div");
        row.className = "capital-overview-row";
        row.innerHTML = `
          <div>
            <strong>${debt.name}</strong>
            <span>${capitalDebtTypeLabel(debt.type)}</span>
          </div>
          <div>${amountLabel}</div>
        `;
        capitalOverviewDebtsList.appendChild(row);
      });
    }
  }
};

const capitalizeAssetCategories = () =>
  capitalState.assetCategories
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name, "ru"));

const capitalEnsureCategory = (name, subcategory = "") => {
  const trimmed = name.trim();
  if (!trimmed) {
    return;
  }
  const existing = capitalState.assetCategories.find((category) => category.name === trimmed);
  if (!existing) {
    capitalState.assetCategories.push({
      name: trimmed,
      subs: subcategory ? [subcategory.trim()] : [],
    });
    return;
  }
  const sub = subcategory.trim();
  if (sub && !existing.subs.includes(sub)) {
    existing.subs.push(sub);
  }
};

const renderCapitalSubcategoryOptions = (selectedValue = "") => {
  if (!capitalAssetSubcategory) {
    return;
  }
  const uniqueSubs = new Set();
  capitalState.assetCategories.forEach((category) => {
    category.subs.forEach((sub) => uniqueSubs.add(sub));
  });
  capitalAssetSubcategory.innerHTML = "";
  const placeholder = document.createElement("option");
  placeholder.value = "";
  placeholder.textContent = "Выберите подкатегорию";
  capitalAssetSubcategory.appendChild(placeholder);
  [...uniqueSubs].sort((a, b) => a.localeCompare(b, "ru")).forEach((sub) => {
    const option = document.createElement("option");
    option.value = sub;
    option.textContent = sub;
    capitalAssetSubcategory.appendChild(option);
  });
  if (selectedValue && !uniqueSubs.has(selectedValue)) {
    const custom = document.createElement("option");
    custom.value = selectedValue;
    custom.textContent = selectedValue;
    capitalAssetSubcategory.appendChild(custom);
  }
  capitalAssetSubcategory.value = selectedValue;
};

const renderCapitalCategories = () => {
  if (!capitalCategoryManager) {
    return;
  }
  capitalCategoryManager.innerHTML = "";

  const sorted = capitalizeAssetCategories();
  sorted.forEach((category) => {
    const card = document.createElement("div");
    card.className = "capital-category-card";
    card.innerHTML = `
      <div class="capital-category-title">
        <span>${category.name}</span>
        <button class="button secondary" data-capital-category-delete="${category.name}">Удалить</button>
      </div>
    `;
    const subs = document.createElement("div");
    subs.className = "capital-category-subs";
    if (!category.subs.length) {
      subs.innerHTML = "<span class='hint'>Подкатегории не добавлены.</span>";
    } else {
      category.subs.forEach((sub) => {
        const pill = document.createElement("span");
        pill.className = "capital-subcategory";
        pill.innerHTML = `
          ${sub}
          <button class="button secondary" data-capital-subcategory-delete="${category.name}" data-subcategory="${sub}">×</button>
        `;
        subs.appendChild(pill);
      });
    }
    card.appendChild(subs);
    capitalCategoryManager.appendChild(card);
  });
  renderCapitalSubcategoryOptions(capitalAssetSubcategory ? capitalAssetSubcategory.value : "");
};

const renderCapitalAssets = () => {
  capitalAssetsTable.innerHTML = "";
  const items = capitalState.assets;
  if (!items.length) {
    const empty = document.createElement("div");
    empty.className = "capital-assets-empty";
    empty.textContent = "Добавьте первый актив.";
    capitalAssetsTable.appendChild(empty);
    return;
  }
  const grouped = new Map();
  items.forEach((item) => {
    const category = capitalTypeLabel(item.type) || item.category || "Без категории";
    if (!grouped.has(category)) {
      grouped.set(category, new Map());
    }
    const subcategory = item.subcategory || "Без подкатегории";
    if (!grouped.get(category).has(subcategory)) {
      grouped.get(category).set(subcategory, []);
    }
    grouped.get(category).get(subcategory).push(item);
  });

  const buildAssetRow = (item) => {
    const row = document.createElement("div");
    row.dataset.assetId = item.id;
    row.classList.add("capital-asset-row", "capital-asset-card");
    const invested = item.invested ?? 0;
    const profit = item.amount - invested;
    const amountInBase = capitalToBase(item.amount, item.currency);
    const amountLabel = amountInBase == null && capitalIsUnconvertible(item)
      ? `нет курса для ${item.currency}`
      : capitalFormatMoney(amountInBase ?? item.amount);
    const expectedProfitLabel = item.expectedProfit != null && item.expectedProfit !== ""
      ? (() => {
        const converted = capitalToBase(item.expectedProfit, item.currency);
        if (converted == null && capitalIsUnconvertible(item)) {
          return `нет курса для ${item.currency}`;
        }
        return capitalFormatMoney(converted ?? item.expectedProfit);
      })()
      : "—";
    const maturityLabel = item.type === "deposit" ? (item.maturityDate || "—") : "";
    row.innerHTML = `
      <div class="capital-asset-main">
        <div class="capital-asset-title">
          <strong>${item.name}</strong>
          <span class="capital-asset-currency">${item.currency}</span>
        </div>
        <div class="capital-asset-meta">
          <span>${capitalTypeLabel(item.type)}</span>
          <span>${capitalLiquidityLabel(item.liquidity)}</span>
          ${maturityLabel ? `<span>до ${maturityLabel}</span>` : ""}
        </div>
        <div class="capital-asset-note">${item.note || "—"}</div>
      </div>
      <div class="capital-asset-numbers">
        <div>
          <span class="capital-asset-label">Сумма</span>
          <strong>${item.amount.toFixed(2)}</strong>
          <div class="hint">${amountLabel}</div>
        </div>
        <div>
          <span class="capital-asset-label">Вложено</span>
          <strong>${invested.toFixed(2)}</strong>
        </div>
        <div>
          <span class="capital-asset-label">Прибыль</span>
          <strong>${profit.toFixed(2)}</strong>
        </div>
        <div>
          <span class="capital-asset-label">Ожид. доходность</span>
          <strong>${item.expectedProfit != null ? item.expectedProfit.toFixed(2) : "—"}</strong>
          <div class="hint">${expectedProfitLabel}</div>
        </div>
      </div>
    `;
    return row;
  };

  grouped.forEach((subcategories, categoryName) => {
    const categoryRow = document.createElement("div");
    categoryRow.className = "capital-asset-group";
    categoryRow.innerHTML = `<div class="capital-asset-group-title">${categoryName}</div>`;
    capitalAssetsTable.appendChild(categoryRow);

    subcategories.forEach((assets, subcategoryName) => {
      const subRow = document.createElement("div");
      subRow.className = "capital-asset-subgroup";
      subRow.textContent = subcategoryName;
      capitalAssetsTable.appendChild(subRow);
      assets.forEach((asset) => {
        capitalAssetsTable.appendChild(buildAssetRow(asset));
      });
    });
  });

};

const debtMetrics = () => {
  const debts = capitalState.debts;
  if (!debts.length) {
    return { weightedApr: 0, highestAprLabel: "—", interestMonthly: 0 };
  }
  const totalPrincipal = debts.reduce((sum, item) => sum + item.principal, 0);
  const weighted = debts.reduce((sum, item) => {
    const rate = item.apr ?? 0;
    return sum + item.principal * rate;
  }, 0);
  const weightedApr = totalPrincipal ? weighted / totalPrincipal : 0;
  const highest = debts.reduce((prev, curr) => ((curr.apr ?? 0) > (prev.apr ?? 0) ? curr : prev), debts[0]);
  const interestMonthly = debts.reduce((sum, item) => {
    const rate = item.apr ?? 0;
    return sum + (item.principal * rate) / 100 / 12;
  }, 0);
  return {
    weightedApr,
    highestAprLabel: highest ? `${highest.name} (${highest.apr ?? 0}%)` : "—",
    interestMonthly,
  };
};

const renderCapitalDebts = () => {
  capitalDebtsTable.innerHTML = "";
  if (!capitalState.debts.length) {
    const row = document.createElement("tr");
    row.innerHTML = "<td colspan='9' class='hint'>Добавьте первый долг.</td>";
    capitalDebtsTable.appendChild(row);
  } else {
    capitalState.debts.forEach((item) => {
      const row = document.createElement("tr");
      row.dataset.debtId = item.id;
      row.innerHTML = `
        <td><input type="text" value="${item.name}" data-field="name" /></td>
        <td>
          <select data-field="type">
            ${["credit_card", "loan", "mortgage", "personal", "other"]
              .map((value) => `<option value="${value}" ${value === item.type ? "selected" : ""}>${capitalDebtTypeLabel(value)}</option>`)
              .join("")}
          </select>
        </td>
        <td><input type="text" value="${item.currency}" data-field="currency" maxlength="3" /></td>
        <td><input type="number" value="${item.principal}" data-field="principal" step="0.01" /></td>
        <td><input type="number" value="${item.apr ?? ""}" data-field="apr" step="0.01" /></td>
        <td><input type="number" value="${item.paymentMin ?? ""}" data-field="paymentMin" step="0.01" /></td>
        <td><input type="number" value="${item.dueDay ?? ""}" data-field="dueDay" step="1" min="1" max="31" /></td>
        <td><input type="text" value="${item.note || ""}" data-field="note" /></td>
        <td><button class="button secondary" data-debt-delete="${item.id}">Удалить</button></td>
      `;
      capitalDebtsTable.appendChild(row);
    });
  }

  const metrics = debtMetrics();
  capitalWeightedApr.textContent = `${metrics.weightedApr.toFixed(2)}%`;
  capitalHighestApr.textContent = metrics.highestAprLabel;
  capitalInterestMonthly.textContent = capitalFormatMoney(metrics.interestMonthly);
};

const estimatePayoffMonths = (principal, apr, payment) => {
  let balance = principal;
  let months = 0;
  while (balance > 0 && months < 600) {
    const interest = (balance * (apr ?? 0)) / 100 / 12;
    const applied = Math.max(payment - interest, 0);
    if (applied === 0) {
      return null;
    }
    balance = Math.max(balance - applied, 0);
    months += 1;
  }
  return months;
};

const buildPayoffPlan = (strategy) => {
  const extra = Number.parseFloat(capitalExtraPayment.value) || 0;
  const debts = capitalState.debts
    .map((item) => ({ ...item }))
    .sort((a, b) => {
      if (strategy === "avalanche") {
        return (b.apr ?? 0) - (a.apr ?? 0);
      }
      return a.principal - b.principal;
    });
  return debts.map((item, index) => {
    const payment = (item.paymentMin ?? 0) + (index === 0 ? extra : 0);
    const months = estimatePayoffMonths(item.principal, item.apr ?? 0, payment);
    return {
      strategy,
      name: item.name,
      months: months == null ? "∞" : months,
      note: index === 0 && extra > 0 ? "С доп. платежом" : "Мин. платеж",
    };
  });
};

const renderCapitalPayoff = () => {
  const plans = [...buildPayoffPlan("avalanche"), ...buildPayoffPlan("snowball")];
  capitalPayoffTable.innerHTML = "";
  if (!plans.length) {
    capitalPayoffTable.innerHTML = "<tr><td colspan='4' class='hint'>Добавьте долги.</td></tr>";
    return;
  }
  plans.forEach((plan) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${plan.strategy === "avalanche" ? "Лавина" : "Снежный ком"}</td>
      <td>${plan.name}</td>
      <td>${plan.months}</td>
      <td>${plan.note}</td>
    `;
    capitalPayoffTable.appendChild(row);
  });
};

const goalProgress = (goal) => {
  const totals = capitalTotals();
  if (goal.kind === "netWorth") {
    return totals.netWorth;
  }
  if (goal.kind === "assetBucket") {
    const matched = capitalState.assets.filter((item) => item.type === goal.name);
    return matched.reduce((sum, item) => sum + (capitalToBase(item.amount, item.currency) ?? 0), 0);
  }
  if (goal.kind === "debtPayoff") {
    return totals.debtsTotal;
  }
  return 0;
};

const goalMonthlyDelta = (goal) => {
  const now = new Date();
  const target = new Date(`${goal.targetDate}-01`);
  const months = Math.max(1, (target.getFullYear() - now.getFullYear()) * 12 + target.getMonth() - now.getMonth());
  const current = goalProgress(goal);
  return (goal.targetAmount - current) / months;
};

const goalStatus = (goal) => {
  const snapshots = capitalState.snapshots
    .slice()
    .sort((a, b) => a.month.localeCompare(b.month));
  const recent = snapshots.slice(-3);
  if (recent.length < 2) {
    return "нет данных";
  }
  const metric = goal.kind === "debtPayoff"
    ? "debtsTotal"
    : goal.kind === "assetBucket"
      ? "assetsTotal"
      : "netWorth";
  const delta = recent[recent.length - 1][metric] - recent[0][metric];
  const avg = delta / (recent.length - 1);
  const required = goalMonthlyDelta(goal);
  return avg >= required ? "в графике" : "отстает";
};

const renderCapitalGoals = () => {
  capitalGoalsTable.innerHTML = "";
  if (!capitalState.goals.length) {
    capitalGoalsTable.innerHTML = "<tr><td colspan='5' class='hint'>Добавьте первую цель.</td></tr>";
    return;
  }
  capitalState.goals.forEach((goal) => {
    const progress = goalProgress(goal);
    const needed = goalMonthlyDelta(goal);
    const row = document.createElement("tr");
    row.dataset.goalId = goal.id;
    row.innerHTML = `
      <td>${goal.name}</td>
      <td>${capitalFormatShort(progress)} / ${capitalFormatShort(goal.targetAmount)}</td>
      <td>${capitalFormatShort(needed)}</td>
      <td>${goalStatus(goal)}</td>
      <td><button class="button secondary" data-goal-delete="${goal.id}">Удалить</button></td>
    `;
    capitalGoalsTable.appendChild(row);
  });
};

const renderCapitalSnapshots = () => {
  capitalSnapshotsTable.innerHTML = "";
  if (!capitalState.snapshots.length) {
    capitalSnapshotsTable.innerHTML = "<tr><td colspan='7' class='hint'>Создайте первый снимок.</td></tr>";
    return;
  }
  const sorted = capitalState.snapshots
    .slice()
    .sort((a, b) => a.month.localeCompare(b.month));
  sorted.forEach((item) => {
    const row = document.createElement("tr");
    row.dataset.snapshotMonth = item.month;
    row.innerHTML = `
      <td>${item.month}</td>
      <td>${capitalFormatShort(item.assetsTotal)}</td>
      <td>${capitalFormatShort(item.debtsTotal)}</td>
      <td>${capitalFormatShort(item.netWorth)}</td>
      <td>${capitalFormatShort(item.delta)}</td>
      <td><input type="text" value="${item.note || ""}" data-field="note" /></td>
      <td><button class="button secondary" data-snapshot-delete="${item.month}">Удалить</button></td>
    `;
    capitalSnapshotsTable.appendChild(row);
  });
};

const renderCapitalHistoryChart = () => {
  capitalSnapshotsChart.innerHTML = "";
  const sorted = capitalState.snapshots
    .slice()
    .sort((a, b) => a.month.localeCompare(b.month));
  if (!sorted.length) {
    capitalSnapshotsChart.innerHTML = "<text x='50%' y='50%' text-anchor='middle' fill='#94a3b8'>Нет данных</text>";
    return;
  }

  const width = 720;
  const height = 260;
  const paddingX = 56;
  const paddingY = 28;
  const chartWidth = width - paddingX * 2;
  const chartHeight = height - paddingY * 2;
  const maxValue = Math.max(...sorted.map((item) => Math.max(item.assetsTotal, item.netWorth, item.debtsTotal)), 1);
  const scaleX = (index) =>
    paddingX + (chartWidth * index) / Math.max(sorted.length - 1, 1);
  const scaleY = (value) => paddingY + chartHeight - (value / maxValue) * chartHeight;

  const drawLine = (values, color) => {
    const points = values.map((value, index) => `${scaleX(index)},${scaleY(value)}`).join(" ");
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
    const y = paddingY + (chartHeight * i) / 4;
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", paddingX);
    line.setAttribute("x2", width - paddingX);
    line.setAttribute("y1", y);
    line.setAttribute("y2", y);
    line.setAttribute("stroke", "#e2e8f0");
    line.setAttribute("stroke-dasharray", "4 4");
    grid.appendChild(line);
  }

  const axis = document.createElementNS("http://www.w3.org/2000/svg", "g");
  const labelStep = Math.max(1, Math.floor(sorted.length / 6));
  sorted.forEach((item, index) => {
    if (index % labelStep !== 0 && index !== sorted.length - 1) {
      return;
    }
    const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
    label.setAttribute("x", scaleX(index));
    label.setAttribute("y", height - 8);
    label.setAttribute("text-anchor", "middle");
    label.setAttribute("fill", "#94a3b8");
    label.setAttribute("font-size", "10");
    label.textContent = item.month;
    axis.appendChild(label);
  });

  const assetsLine = drawLine(sorted.map((item) => item.assetsTotal), "#16a34a");
  const debtsLine = drawLine(sorted.map((item) => item.debtsTotal), "#ea580c");
  const netLine = drawLine(sorted.map((item) => item.netWorth), "#2563eb");

  capitalSnapshotsChart.appendChild(grid);
  capitalSnapshotsChart.appendChild(axis);
  capitalSnapshotsChart.appendChild(assetsLine);
  capitalSnapshotsChart.appendChild(debtsLine);
  capitalSnapshotsChart.appendChild(netLine);
};

const renderCapitalView = () => {
  capitalEnsureSnapshot();
  renderCapitalSummary();
  renderCapitalOverviewDashboard();
  renderCapitalAssets();
  renderCapitalDebts();
  renderCapitalPayoff();
  renderCapitalGoals();
  renderCapitalSnapshots();
  renderCapitalHistoryChart();
  if (capitalBaseCurrency) {
    capitalBaseCurrency.value = capitalState.settings.baseCurrency;
  }
  if (capitalFxCurrency) {
    if (!capitalFxCurrency.value) {
      const existing = Object.keys(capitalState.settings.fxRates || {})[0];
      capitalFxCurrency.value = existing || "USD";
    }
    const rate = capitalState.settings.fxRates[capitalFxCurrency.value.trim().toUpperCase()];
    capitalFxRateValue.textContent = rate ? rate.toFixed(4) : "—";
  }
  renderCapitalCategories();
};

const capitalSetTab = (tabId) => {
  capitalTabs.forEach((tab) => {
    tab.classList.toggle("is-active", tab.dataset.capitalTab === tabId);
  });
  capitalPanels.forEach((panel) => {
    panel.classList.toggle("is-active", panel.dataset.capitalTabPanel === tabId);
  });
};

const capitalSetAssetDrawer = (isOpen) => {
  if (!capitalAssetDrawer) {
    return;
  }
  capitalAssetDrawer.classList.toggle("is-open", isOpen);
  if (capitalAssetToggle) {
    capitalAssetToggle.setAttribute("aria-expanded", String(isOpen));
    capitalAssetToggle.textContent = isOpen ? "Скрыть форму" : "Добавить новый актив";
  }
  capitalAssetToggleButtons.forEach((button) => {
    button.setAttribute("aria-expanded", String(isOpen));
    button.textContent = isOpen ? "Скрыть форму" : "Открыть форму";
  });
};

const capitalSetAssetModal = (isOpen) => {
  if (!capitalAssetDrawer) {
    return;
  }
  capitalAssetDrawer.classList.toggle("is-modal", isOpen);
  if (capitalAssetOverlay) {
    capitalAssetOverlay.classList.toggle("is-active", isOpen);
  }
  document.body.classList.toggle("modal-open", isOpen);
};

const capitalIsAssetModalOpen = () =>
  capitalAssetDrawer ? capitalAssetDrawer.classList.contains("is-modal") : false;

const capitalUpdateAsset = (id, field, value) => {
  const asset = capitalState.assets.find((item) => item.id === id);
  if (!asset) {
    return;
  }
  let refreshCategories = false;
  if (field === "currency") {
    asset[field] = value.trim().toUpperCase();
    ensureFxRateForCurrency(asset[field]);
  } else if (field === "amount" || field === "invested") {
    asset[field] = Number.parseFloat(value) || 0;
  } else if (field === "expectedProfit") {
    asset[field] = value === "" ? null : (Number.parseFloat(value) || 0);
  } else if (field === "maturityDate") {
    asset[field] = value;
    asset.liquidity = value ? "locked" : asset.liquidity;
  } else if (field === "section") {
    asset[field] = value.trim();
  } else if (field === "category") {
    asset[field] = value.trim();
    capitalEnsureCategory(asset[field]);
    refreshCategories = true;
  } else if (field === "subcategory") {
    asset[field] = value.trim();
    capitalEnsureCategory(asset.category || asset.section || "В наличии", asset[field]);
    refreshCategories = true;
  } else {
    asset[field] = value;
  }
  asset.unconvertible = capitalIsUnconvertible(asset);
  asset.updatedAt = capitalNowIso();
  saveCapitalV2(capitalState);
  if (refreshCategories) {
    renderCapitalCategories();
  }
  renderCapitalSummary();
  renderCapitalLedger();
  renderCapitalStructureCharts();
  renderCapitalOverview();
};

const capitalUpdateDebt = (id, field, value) => {
  const debt = capitalState.debts.find((item) => item.id === id);
  if (!debt) {
    return;
  }
  const numericFields = ["principal", "apr", "paymentMin", "dueDay"];
  if (field === "currency") {
    debt[field] = value.trim().toUpperCase();
  } else {
    debt[field] = numericFields.includes(field) ? (value === "" ? null : Number.parseFloat(value)) : value;
  }
  debt.updatedAt = capitalNowIso();
  saveCapitalV2(capitalState);
  renderCapitalSummary();
  renderCapitalLedger();
  renderCapitalStructureCharts();
  renderCapitalOverview();
  renderCapitalDebts();
  renderCapitalPayoff();
};

const capitalUpdateSnapshotNote = (month, note) => {
  const snapshot = capitalState.snapshots.find((item) => item.month === month);
  if (!snapshot) {
    return;
  }
  snapshot.note = note;
  saveCapitalV2(capitalState);
};

const capitalResetAssetForm = () => {
  capitalAssetForm.reset();
  capitalAssetCurrency.value = capitalState.settings.baseCurrency;
  capitalAssetMaturityDate.value = "";
  capitalAssetSubcategory.value = "";
  capitalAssetExpectedProfit.value = "";
  capitalEditingAssetId = null;
  const submitButton = capitalAssetForm.querySelector('button[type="submit"]');
  if (submitButton) {
    submitButton.textContent = "Добавить актив";
  }
  if (capitalAssetDelete) {
    capitalAssetDelete.classList.remove("is-visible");
  }
};

const capitalFillAssetForm = (asset) => {
  capitalSetAssetDrawer(true);
  capitalSetAssetModal(true);
  capitalAssetName.value = asset.name || "";
  capitalAssetType.value = asset.type || "cash";
  capitalAssetCurrency.value = asset.currency || capitalState.settings.baseCurrency;
  capitalAssetAmount.value = asset.amount ?? 0;
  capitalAssetInvested.value = asset.invested ?? asset.amount ?? 0;
  renderCapitalSubcategoryOptions(asset.subcategory || "");
  capitalAssetMaturityDate.value = asset.maturityDate || "";
  capitalAssetLiquidity.value = asset.liquidity || "high";
  capitalAssetExpectedProfit.value = asset.expectedProfit ?? "";
  capitalAssetNote.value = asset.note || "";
  capitalEditingAssetId = asset.id;
  const submitButton = capitalAssetForm.querySelector('button[type="submit"]');
  if (submitButton) {
    submitButton.textContent = "Сохранить изменения";
  }
  if (capitalAssetDelete) {
    capitalAssetDelete.classList.add("is-visible");
  }
};

const capitalAddAsset = () => {
  const name = capitalAssetName.value.trim();
  const amountInput = capitalAssetAmount.value;
  const investedInput = capitalAssetInvested.value;
  const invested = Number.parseFloat(investedInput);
  if (!name || Number.isNaN(invested)) {
    return;
  }
  const subcategoryValue = capitalAssetSubcategory.value.trim();
  const isDeposit = capitalAssetType.value === "deposit";
  const amountParsed = Number.parseFloat(amountInput);
  const amount = Number.isNaN(amountParsed) ? invested : amountParsed;
  const resolvedCategory = capitalTypeLabel(capitalAssetType.value);
  if (resolvedCategory) {
    capitalEnsureCategory(resolvedCategory, subcategoryValue);
  }
  const payload = {
    name,
    type: capitalAssetType.value,
    currency: capitalAssetCurrency.value.trim().toUpperCase() || capitalState.settings.baseCurrency,
    amount,
    invested,
    section: isDeposit ? "Вклады" : "В наличии",
    category: resolvedCategory,
    subcategory: subcategoryValue,
    liquidity: capitalAssetLiquidity.value,
    expectedProfit: isDeposit && capitalAssetExpectedProfit.value
      ? Number.parseFloat(capitalAssetExpectedProfit.value)
      : null,
    maturityDate: isDeposit ? capitalAssetMaturityDate.value : "",
    note: capitalAssetNote.value.trim(),
  };
  if (capitalEditingAssetId) {
    const existing = capitalState.assets.find((item) => item.id === capitalEditingAssetId);
    if (!existing) {
      capitalResetAssetForm();
      return;
    }
    Object.assign(existing, payload, { updatedAt: capitalNowIso() });
    existing.unconvertible = capitalIsUnconvertible(existing);
    ensureFxRateForCurrency(existing.currency);
  } else {
    capitalState.assets.push({
      id: capitalGenerateId("asset"),
      ...payload,
      updatedAt: capitalNowIso(),
    });
    ensureFxRateForCurrency(capitalState.assets[capitalState.assets.length - 1].currency);
    capitalState.assets[capitalState.assets.length - 1].unconvertible = capitalIsUnconvertible(
      capitalState.assets[capitalState.assets.length - 1]
    );
  }
  saveCapitalV2(capitalState);
  capitalResetAssetForm();
  if (capitalIsAssetModalOpen()) {
    capitalSetAssetModal(false);
    capitalSetAssetDrawer(false);
  }
  renderCapitalView();
};

const capitalAddDebt = () => {
  const name = capitalDebtName.value.trim();
  const principal = Number.parseFloat(capitalDebtPrincipal.value);
  if (!name || Number.isNaN(principal)) {
    return;
  }
  capitalState.debts.push({
    id: capitalGenerateId("debt"),
    name,
    type: capitalDebtType.value,
    currency: capitalDebtCurrency.value.trim().toUpperCase() || capitalState.settings.baseCurrency,
    principal,
    apr: capitalDebtApr.value ? Number.parseFloat(capitalDebtApr.value) : null,
    paymentMin: capitalDebtPayment.value ? Number.parseFloat(capitalDebtPayment.value) : null,
    dueDay: capitalDebtDueDay.value ? Number.parseInt(capitalDebtDueDay.value, 10) : null,
    note: capitalDebtNote.value.trim(),
    updatedAt: capitalNowIso(),
  });
  saveCapitalV2(capitalState);
  capitalDebtForm.reset();
  capitalDebtCurrency.value = capitalState.settings.baseCurrency;
  renderCapitalView();
};

const capitalAddGoal = () => {
  const name = capitalGoalName.value.trim();
  const targetAmount = Number.parseFloat(capitalGoalTarget.value);
  const targetDate = capitalGoalDate.value;
  if (!name || Number.isNaN(targetAmount) || !targetDate) {
    return;
  }
  capitalState.goals.push({
    id: capitalGenerateId("goal"),
    name,
    kind: capitalGoalKind.value,
    targetAmount,
    targetDate,
    baselineAmount: capitalGoalBaseline.value ? Number.parseFloat(capitalGoalBaseline.value) : null,
    note: capitalGoalNote.value.trim(),
  });
  saveCapitalV2(capitalState);
  capitalGoalForm.reset();
  renderCapitalView();
};

const capitalCreateSnapshotNow = () => {
  const month = capitalMonthKey();
  const totals = capitalTotals();
  const last = capitalState.snapshots
    .slice()
    .sort((a, b) => a.month.localeCompare(b.month))
    .filter((item) => item.month !== month)
    .pop();
  const delta = last ? totals.netWorth - last.netWorth : 0;
  const existing = capitalState.snapshots.find((item) => item.month === month);
  if (existing) {
    existing.assetsTotal = totals.assetsTotal;
    existing.debtsTotal = totals.debtsTotal;
    existing.netWorth = totals.netWorth;
    existing.delta = delta;
  } else {
    capitalState.snapshots.push({
      month,
      assetsTotal: totals.assetsTotal,
      debtsTotal: totals.debtsTotal,
      netWorth: totals.netWorth,
      delta,
      note: "",
    });
  }
  saveCapitalV2(capitalState);
  renderCapitalView();
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
  dbSet(STORAGE_KEY, JSON.stringify(transactions));
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
  dbSet(STORAGE_KEY, JSON.stringify(transactions));
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
  dbSet(STORAGE_KEY, JSON.stringify(transactions));
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

  dbSet(STORAGE_KEY, JSON.stringify(transactions));
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

  dbSet(STORAGE_KEY, JSON.stringify(transactions));
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
  dbSet(STORAGE_KEY, JSON.stringify(transactions));
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
  dbSet(STORAGE_KEY, JSON.stringify(transactions));
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
  renderReports();
};

const initializeReportRange = () => {
  const bounds = getDateBounds(transactions);
  if (bounds.end) {
    const endDate = new Date(bounds.end);
    const startDate = new Date(endDate);
    startDate.setDate(endDate.getDate() - 29);
    setReportRange(startDate.toISOString().slice(0, 10), bounds.end);
  } else {
    const today = new Date().toISOString().slice(0, 10);
    setReportRange(today, today);
  }
};

const resetForm = () => {
  document.getElementById("amount").value = "";
  document.getElementById("note").value = "";
  const dateInput = document.getElementById("date");
  if (!dateInput.value) {
    dateInput.valueAsDate = new Date();
  }
};

const setView = (viewId) => {
  const page = document.body.dataset.page || "main";
  if (viewId === "capital" && page === "main") {
    window.location.href = "capital.html";
    return;
  }
  if (viewId !== "capital" && page === "capital") {
    window.location.href = `index.html?view=${viewId}`;
    return;
  }
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
  dbSet(VIEW_KEY, viewId);
  if (viewId === "capital") {
    renderCapitalView();
  }
};

const setLayout = (layout) => {
  document.body.classList.remove("layout-comfort", "layout-balanced", "layout-compact");
  document.body.classList.add(`layout-${layout}`);
  layoutButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.layout === layout);
  });
  dbSet(LAYOUT_KEY, layout);
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
  dbSet(STORAGE_KEY, JSON.stringify(transactions));
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

categoryTypeSelect.addEventListener("change", () => {
  renderCategoryListOptions();
});

newCategoryInput.addEventListener("input", () => {
  const name = newCategoryInput.value.trim();
  if (categories[name]) {
    categoryTypeSelect.value = categories[name].type;
    renderCategoryListOptions();
  }
});

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
  link.addEventListener("click", (event) => {
    event.preventDefault();
    setView(link.dataset.viewTarget);
  });
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

categoryScopeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    categoryScopeButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    const scope = button.dataset.categoryScope;
    categoryPanels.forEach((panel) => {
      panel.classList.toggle("is-active", panel.dataset.categoryPanel === scope);
    });
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
  dbSet(STORAGE_KEY, JSON.stringify(transactions));
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
  dbSet(STORAGE_KEY, JSON.stringify(transactions));
  render();
});

toggleSubcategoryButton.addEventListener("click", () => {
  showAllSubcategories = !showAllSubcategories;
  renderCharts();
});

toggleExpenseCategoryButton.addEventListener("click", () => {
  showAllExpenseCategories = !showAllExpenseCategories;
  renderCharts();
});

reportRangeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    reportRangeButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    const range = button.dataset.reportRange;
    if (range === "all") {
      const bounds = getDateBounds(transactions);
      setReportRange(bounds.start, bounds.end);
    } else {
      const days = Number.parseInt(range, 10);
      const bounds = getDateBounds(transactions);
      const end = bounds.end || new Date().toISOString().slice(0, 10);
      const endDate = new Date(end);
      const startDate = new Date(endDate);
      startDate.setDate(endDate.getDate() - (days - 1));
      setReportRange(startDate.toISOString().slice(0, 10), end);
    }
    renderReports();
  });
});

reportGranularityButtons.forEach((button) => {
  button.addEventListener("click", () => {
    reportGranularityButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    reportGranularity = button.dataset.reportGranularity;
    renderReports();
  });
});

applyReportRangeButton.addEventListener("click", () => {
  reportRangeButtons.forEach((item) => item.classList.remove("is-active"));
  setReportRange(reportStartInput.value, reportEndInput.value);
  renderReports();
});

capitalTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    capitalSetTab(tab.dataset.capitalTab);
  });
});

  if (capitalAssetDrawer) {
    capitalSetAssetDrawer(false);
  }
  if (capitalAssetSubcategory) {
    renderCapitalSubcategoryOptions(capitalAssetSubcategory.value);
  }

if (capitalAssetToggle) {
  capitalAssetToggle.addEventListener("click", () => {
    const shouldOpen = !capitalAssetDrawer.classList.contains("is-open");
    if (shouldOpen) {
      capitalResetAssetForm();
      capitalSetAssetDrawer(true);
      capitalSetAssetModal(true);
      capitalAssetDrawer.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      capitalSetAssetModal(false);
      capitalSetAssetDrawer(false);
    }
  });
}

if (capitalAssetToggleButtons.length) {
  capitalAssetToggleButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const shouldOpen = !capitalAssetDrawer.classList.contains("is-open");
      if (shouldOpen) {
        capitalResetAssetForm();
        capitalSetAssetDrawer(true);
        capitalSetAssetModal(true);
        capitalAssetDrawer.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        capitalSetAssetModal(false);
        capitalSetAssetDrawer(false);
      }
    });
  });
}

if (capitalAssetClose) {
  capitalAssetClose.addEventListener("click", () => {
    capitalSetAssetModal(false);
    capitalSetAssetDrawer(false);
    capitalResetAssetForm();
  });
}

if (capitalAssetOverlay) {
  capitalAssetOverlay.addEventListener("click", () => {
    capitalSetAssetModal(false);
    capitalSetAssetDrawer(false);
    capitalResetAssetForm();
  });
}

if (capitalAssetDelete) {
  capitalAssetDelete.addEventListener("click", () => {
    if (!capitalEditingAssetId || !confirm("Удалить актив?")) {
      return;
    }
    capitalState.assets = capitalState.assets.filter((item) => item.id !== capitalEditingAssetId);
    saveCapitalV2(capitalState);
    capitalSetAssetModal(false);
    capitalSetAssetDrawer(false);
    capitalResetAssetForm();
    renderCapitalView();
  });
}

capitalAssetForm.addEventListener("submit", (event) => {
  event.preventDefault();
  capitalAddAsset();
});

if (capitalBaseCurrency) {
  capitalBaseCurrency.addEventListener("change", () => {
    capitalState.settings.baseCurrency = capitalBaseCurrency.value;
    saveCapitalV2(capitalState);
    renderCapitalView();
    refreshFxRate();
  });
}

if (capitalFxRefresh) {
  capitalFxRefresh.addEventListener("click", () => {
    refreshFxRate();
  });
}

if (capitalFxCurrency) {
  capitalFxCurrency.addEventListener("blur", () => {
    refreshFxRate();
  });
}

if (capitalAssetCurrency && capitalFxCurrency) {
  capitalAssetCurrency.addEventListener("change", () => {
    const currency = capitalAssetCurrency.value.trim().toUpperCase();
    if (currency) {
      capitalFxCurrency.value = currency;
      refreshFxRate();
    }
  });
}

capitalStructureButtons.forEach((button) => {
  button.addEventListener("click", () => {
    capitalStructureButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    const mode = button.dataset.capitalStructure;
    capitalAssetTypeChart.classList.toggle("is-hidden", mode !== "bars");
    capitalAssetTypePie.classList.toggle("is-hidden", mode !== "pie");
  });
});

if (capitalAssetViewButtons.length) {
  capitalAssetViewButtons.forEach((button) => {
    button.addEventListener("click", () => {
      capitalAssetViewButtons.forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
      capitalAssetPanels.forEach((panel) => {
        panel.classList.toggle("is-active", panel.dataset.capitalAssetPanel === button.dataset.capitalAssetView);
      });
    });
  });
}

if (capitalCategoryForm) {
  capitalCategoryForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const category = capitalCategoryName.value.trim();
    const subcategory = capitalSubcategoryName.value.trim();
    if (!category) {
      return;
    }
    capitalEnsureCategory(category, subcategory);
    saveCapitalV2(capitalState);
    renderCapitalCategories();
    capitalCategoryForm.reset();
  });
}

if (capitalCategoryManager) {
  capitalCategoryManager.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLButtonElement)) {
      return;
    }
    const categoryName = target.dataset.capitalCategoryDelete;
    const subcategoryName = target.dataset.subcategory;
    if (categoryName && !subcategoryName) {
      capitalState.assetCategories = capitalState.assetCategories.filter((category) => category.name !== categoryName);
      saveCapitalV2(capitalState);
      renderCapitalCategories();
      return;
    }
    if (categoryName && subcategoryName) {
      const category = capitalState.assetCategories.find((item) => item.name === categoryName);
      if (!category) {
        return;
      }
      category.subs = category.subs.filter((sub) => sub !== subcategoryName);
      saveCapitalV2(capitalState);
      renderCapitalCategories();
    }
  });
}

capitalOverviewFilters.forEach((button) => {
  button.addEventListener("click", () => {
    capitalOverviewFilters.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    capitalOverviewFilter = button.dataset.capitalFilter;
    renderCapitalLedger();
  });
});

capitalAssetType.addEventListener("change", () => {
  const isDeposit = capitalAssetType.value === "deposit";
  capitalAssetExpectedProfit.disabled = !isDeposit;
  capitalAssetMaturityDate.disabled = !isDeposit;
  if (!isDeposit) {
    capitalAssetExpectedProfit.value = "";
    capitalAssetMaturityDate.value = "";
  }
});

capitalAssetsTable.addEventListener("click", (event) => {
  const row = event.target.closest("[data-asset-id]");
  if (!row || !row.dataset.assetId) {
    return;
  }
  const asset = capitalState.assets.find((item) => item.id === row.dataset.assetId);
  if (!asset) {
    return;
  }
  capitalFillAssetForm(asset);
});

capitalDebtForm.addEventListener("submit", (event) => {
  event.preventDefault();
  capitalAddDebt();
});

capitalDebtsTable.addEventListener("input", (event) => {
  const target = event.target;
  const row = target.closest("tr");
  if (!row || !row.dataset.debtId) {
    return;
  }
  const field = target.dataset.field;
  if (!field) {
    return;
  }
  capitalUpdateDebt(row.dataset.debtId, field, target.value);
});

capitalDebtsTable.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLButtonElement)) {
    return;
  }
  const id = target.dataset.debtDelete;
  if (!id || !confirm("Удалить долг?")) {
    return;
  }
  capitalState.debts = capitalState.debts.filter((item) => item.id !== id);
  saveCapitalV2(capitalState);
  renderCapitalView();
});

capitalExtraPayment.addEventListener("input", () => {
  renderCapitalPayoff();
});

capitalGoalForm.addEventListener("submit", (event) => {
  event.preventDefault();
  capitalAddGoal();
});

capitalGoalsTable.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLButtonElement)) {
    return;
  }
  const id = target.dataset.goalDelete;
  if (!id || !confirm("Удалить цель?")) {
    return;
  }
  capitalState.goals = capitalState.goals.filter((item) => item.id !== id);
  saveCapitalV2(capitalState);
  renderCapitalView();
});

capitalSnapshotNow.addEventListener("click", () => {
  capitalCreateSnapshotNow();
});

capitalSnapshotsTable.addEventListener("input", (event) => {
  const target = event.target;
  const row = target.closest("tr");
  if (!row || !row.dataset.snapshotMonth) {
    return;
  }
  if (target.dataset.field !== "note") {
    return;
  }
  capitalUpdateSnapshotNote(row.dataset.snapshotMonth, target.value);
});

capitalSnapshotsTable.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLButtonElement)) {
    return;
  }
  const month = target.dataset.snapshotDelete;
  if (!month || !confirm("Удалить снимок?")) {
    return;
  }
  capitalState.snapshots = capitalState.snapshots.filter((item) => item.month !== month);
  saveCapitalV2(capitalState);
  renderCapitalView();
});

capitalExportButton.addEventListener("click", () => {
  const payload = JSON.stringify(capitalState, null, 2);
  const blob = new Blob([payload], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "capital.json";
  link.click();
  URL.revokeObjectURL(url);
});

capitalImportInput.addEventListener("change", async (event) => {
  const file = event.target.files?.[0];
  if (!file) {
    return;
  }
  try {
    const text = await file.text();
    const data = JSON.parse(text);
    capitalState = {
      assets: data.assets || [],
      debts: data.debts || [],
      goals: data.goals || [],
      snapshots: data.snapshots || [],
      settings: data.settings || { baseCurrency: "RUB", fxRates: {} },
    };
    normalizeCapitalState();
    saveCapitalV2(capitalState);
    renderCapitalView();
  } catch (error) {
    alert("Не удалось импортировать файл.");
  } finally {
    capitalImportInput.value = "";
  }
});

const initializeApp = async () => {
  transactions = await loadTransactions();
  categories = await loadCategories();
  capitalState = await migrateCapitalState();
  normalizeCapitalState();

  renderCategories();
  resetForm();
  initializeReportRange();
  render();
  capitalSetTab("overview");
  renderCapitalView();
  updateUndoState();

  const savedView = await dbGet(VIEW_KEY);
  const savedLayout = await dbGet(LAYOUT_KEY);
  const page = document.body.dataset.page || "main";
  const urlView = page === "main" ? new URLSearchParams(window.location.search).get("view") : null;
  const targetView = page === "capital"
    ? "capital"
    : (urlView || savedView || "dashboard");
  setView(targetView);
  setLayout(savedLayout || "comfort");
};

initializeApp();
