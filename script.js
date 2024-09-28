const USA = { price: 4.87, symbol: "US$" };
const EUR = { price: 5.32, symbol: "€" };
const GBP = { price: 6.08, symbol: "£" };

const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const footer = document.querySelector("main footer");
const footerSpan = document.querySelector("#description");
const footerH1 = document.querySelector("#result");

amount.addEventListener("input", () => {
  const hasCharacterRegex = /\D+/;

  amount.value = amount.value.replace(hasCharacterRegex, "");
});

form.onsubmit = (event) => {
  event.preventDefault();

  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USA.price, USA.symbol);
      break;
    case "EUR":
      convertCurrency(amount.value, EUR.price, EUR.symbol);
      break;
    case "GBP":
      convertCurrency(amount.value, GBP.price, GBP.symbol);
      break;
  }
};

function convertCurrency(amount, price, symbol) {
  try {
    footerSpan.textContent = `${symbol} 1 = ${formatCurrencyToBRL(price)}`;

    let total = Number(amount) * price;
    total = formatCurrencyToBRL(total).replace("R$", "");

    footerH1.textContent = `${total} Reais`;

    footer.classList.add("show-result");
  } catch (error) {
    footer.classList.remove("show-result");

    alert("Não foi possível converter, tente novamente.");
    console.log(error);
  }
}

function formatCurrencyToBRL(value) {
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
