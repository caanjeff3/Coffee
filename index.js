let RandomConsoleStuff = ["Ballmaster32", ":3", "Haii"];

const Game = {
  coffee: 0,
  funds: 0,
  BrewerCost: 5,
  BaristaCost: 5,
  brewers: 0,
  baristas: 0,
  CoffeeMult: 1,
  SellMult: 1,
  Upgrade1Cost: 100,
  Upgrade2Cost: 100,
  TotalFundsGen: 0,
};

function debugObjectValues(obj) {
  for (const key in obj) {
    console.log(`${key}: ${obj[key]}`);
  }
}

document.addEventListener("keydown", (event) => {
  if (event.key == "z") {
    debugObjectValues(Game);
  }
});

// Function to handle button clicks
function handleClick(id, callback) {
  document.getElementById(id).onclick = callback;
}

// Function to handle purchasing items
function purchaseItem(cost, costMultiplier) {
  if (Game.funds - cost >= 0) {
    Game.funds -= cost;
    cost *= costMultiplier;
  }
}

// Event handlers for button clicks
handleClick("MakeCoffee", () => {
  Game.coffee += Game.CoffeeMult;
});

handleClick("SellCoffee", () => {
  if (Game.coffee >= 0 + Game.SellMult) {
    Game.TotalFundsGen += Game.SellMult;

    Game.funds += Game.SellMult;
    Game.coffee -= Game.SellMult;
  }
});

handleClick("BuyBrewer", () => {
  purchaseItem(Game.BrewerCost, 1.15);
  Game.brewers++;
});

handleClick("HireBarista", () => {
  purchaseItem(Game.BaristaCost, 1.15);
  Game.baristas++;
});

handleClick("UpgradeFilter", () => {
  if (Game.funds - Game.Upgrade1Cost >= 0) {
    Game.funds -= Game.Upgrade1Cost;
    Game.CoffeeMult++;
    Game.Upgrade1Cost *= 1.325;
  }
});

handleClick("UpgradeMarketing", () => {
  if (Game.funds - Game.Upgrade2Cost >= 0) {
    Game.funds -= Game.Upgrade2Cost;
    Game.SellMult++;
    Game.Upgrade2Cost *= 1.325;
  }
});

// Function to update Coffee label
function updateCoffeeLabel() {
  const coffeeDifference = Game.brewers - Game.baristas;
  const coffeePerSecond =
    coffeeDifference > 0 ? "+" + coffeeDifference : coffeeDifference;
  const coffeeText =
    "Coffee's: " +
    Game.coffee.toLocaleString(1) +
    " (" +
    coffeePerSecond +
    " /s)";
  document.getElementById("CoffeeLabel").innerText = coffeeText;
}

// Function to update Funds label
function updateFundsLabel() {
  const fundsText = Game.baristas
    ? "Funds: $" + Game.funds.toLocaleString(1) + " (+" + Game.baristas + " /s)"
    : "Funds: $" + Game.funds.toLocaleString(2);
  document.getElementById("Funds").innerText = fundsText;
}

// Function to update various labels
function updateLabels() {
  // Update amount of Brewers and Baristas
  document.getElementById("AmntBrewers").innerText =
    "You own " + Game.brewers + " Brewers";
  document.getElementById("AmntBaristas").innerText =
    "You have " + Game.baristas + " baristas";

  // Update Brewer and Barista cost texts
  document.getElementById("BrewerCost").innerText =
    "Cost: " + Game.BrewerCost.toLocaleString(1) + "$";
  document.getElementById("BaristaCost").innerText =
    "Cost: " + Game.BaristaCost.toLocaleString(1) + "$";

  // Update Upgrade labels
  document.getElementById("UpgradeFilterLabel").innerText =
    "Cost: " + Game.Upgrade1Cost + "$";
  document.getElementById("UpgradeMarketingLabel").innerText =
    "Cost: " + Game.Upgrade2Cost + "$";
}

// Interval function to update labels
setInterval(() => {
  updateCoffeeLabel();
  updateFundsLabel();
  updateLabels();
}, 50);

// Function to update coffee and funds every second
setInterval(() => {
  Game.coffee += Game.brewers;
  if (Game.coffee >= 0 + Game.baristas) {
    Game.coffee -= Game.baristas;
    Game.funds += Game.baristas;
  }
}, 1000);

// Function to log random console stuff on page load
window.addEventListener("load", () => {
  const randomIndex = Math.floor(Math.random() * RandomConsoleStuff.length);
  console.log(RandomConsoleStuff[randomIndex]);
});
