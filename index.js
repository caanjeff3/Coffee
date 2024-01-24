let coffee = 0;
let funds = 0;
let BrewerCost = 5;
let BaristaCost = 5;
let brewers = 0;
let baristas = 0;
let CoffeeMult = 1;
let SellMult = 1;
let Upgrade1Cost = 100;
let Upgrade2Cost = 100;
let RandomConsoleStuff = ["Why are you in here?","Cheating isnt very nice","Haii"];
//TODO Document func and like yk make it look not doodoo

document.getElementById("MakeCoffee").onclick = () => {
  coffee = coffee + CoffeeMult;
};

document.getElementById("SellCoffee").onclick = () => {
  if (coffee >= 0 + SellMult) {
    funds = funds + SellMult;
    coffee = coffee - SellMult;
  }
};

document.getElementById("BuyBrewer").onclick = () => {
  if (funds - BrewerCost >= 0) {
    funds = funds - BrewerCost;
    brewers++;
    BrewerCost = BrewerCost * 1.15;
  }
};

document.getElementById("HireBarista").onclick = () => {
  if (funds - BaristaCost >= 0) {
    funds = funds - BaristaCost;
    baristas++;
    BaristaCost = BaristaCost * 1.15;
  }
};

document.getElementById("UpgradeFilter").onclick = () => {
  if (funds - Upgrade1Cost >= 0) {
    funds = funds - Upgrade1Cost;
    CoffeeMult++;
    Upgrade1Cost = Upgrade1Cost * 1.325;
  }
};


document.getElementById("UpgradeMarketing").onclick = () => {
  if (funds - Upgrade2Cost >= 0) {
    funds = funds - Upgrade2Cost;
    SellMult++;
    Upgrade2Cost = Upgrade2Cost * 1.325;
  }
};


setInterval(() => {
  if (brewers > baristas) {
    document.getElementById("CoffeeLabel").innerText =
      "Coffee's: " +
      coffee.toLocaleString(1) +
      " (+" +
      (brewers - baristas) +
      " /s)";
  } else if (baristas > brewers) {
    document.getElementById("CoffeeLabel").innerText =
      "Coffee's: " +
      coffee.toLocaleString(1) +
      " (" +
      (brewers - baristas) +
      " /s)";
  } else {
    document.getElementById("CoffeeLabel").innerText =
      "Coffee's: " +
      coffee.toLocaleString(1) +
      " (+" +
      (brewers - baristas) +
      " /s)";
  }

  if (baristas) {
    document.getElementById("Funds").innerText =
      "Funds: $" + funds.toLocaleString(1) + " (+" + baristas + " /s)";
  } else {
    document.getElementById("Funds").innerText =
      "Funds: $" + funds.toLocaleString(2);
  }

  document.getElementById("AmntBrewers").innerText =
    "You own " + brewers + " Brewers";
  document.getElementById("AmntBaristas").innerText =
    "You have " + baristas + " baristas";

  document.getElementById("BrewerCost").innerText =
    "Cost: " + BrewerCost.toLocaleString(1) + "$";
  document.getElementById("BaristaCost").innerText =
    "Cost: " + BaristaCost.toLocaleString(1) + "$";
  document.getElementById("UpgradeFilterLabel").innerText =
    "Cost: " + Upgrade1Cost.toLocaleString(1) + "$";
    document.getElementById("UpgradeMarketingLabel").innerText =
    "Cost: " + Upgrade2Cost.toLocaleString(1) + "$";
}, 50);
//yeah idk
//every 1s apply automations
setInterval(() => {
  coffee = coffee + brewers;
  if (coffee >= 0 + baristas) {
    coffee = coffee - baristas;
    funds = funds + baristas;
  }
}, 1000);

setInterval(() => {

}, 5000)
