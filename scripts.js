const Modal = {
  toggle() {
    // Ativa e desativa o modal
    // Quando active estiver presente, ele remove. Caso não esteja, ele adiciona.
    document.querySelector(".modal-overlay").classList.contains("active")
      ? document.querySelector(".modal-overlay").classList.remove("active")
      : document.querySelector(".modal-overlay").classList.add("active");
  },
};

const transactions = [
  {
    id: 1,
    description: "Luz",
    amount: -50000,
    date: "25/01/2022",
  },
  {
    id: 2,
    description: "Website",
    amount: 500000,
    date: "22/01/2022",
  },
  {
    id: 3,
    description: "Internet",
    amount: -2000,
    date: "27/01/2022",
  },
];

const Transaction = {
  incomes() { },
  expenses() { },
  total() { },
};

const DOM = {
  transactionsContainer: document.querySelector('#data-table tbody'),

  addTransaction(transaction, index) {
    console.log("Hi, im here " + transaction)
    const tr = document.createElement('tr')
    tr.innerHTML = DOM.innerHTMLTransaction(transaction)

    DOM.transactionsContainer.appendChild(tr)
    console.log(tr.innerHTML)
  },

  innerHTMLTransaction(transaction) {
    const CSSclass = transaction.amount > 0 ? "income" : "expense";
    const amount = Utils.formatCurrency(transaction.amount);
    const html = `
            <td class="description">${transaction.description}</td>
            <td class=${CSSclass}>${transaction.amount}</td>
            <td class="date">${transaction.date}</td>
            <td>
                <img src="./assets/minus.svg" alt="Remover transação">
            </td>
        `
    return html
  }
}

const Utils = {
  formatCurrency(value) {
    const signal = Number(value) < 0 ? "-" : "";
    value = String(value).replace(/\D/g, "");
    value = Number(value) / 100;

    value = value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    })

    return signal + " " + value; 

  }
}

transactions.forEach(function (transaction) {
  DOM.addTransaction(transaction)
})

