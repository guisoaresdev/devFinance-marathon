import React from 'react';
import './Expenses.css';

function Expenses() {
  return (
  <>
    <header>
      <img src="./assets/logo.svg" alt="Logo Dev Finance" />
    </header>

    <main className="container">
      <section id="balance">
        <h2 className="sr-only">Balanço</h2>

        <div className="card">
          <h3>
            <span> Entradas </span>
            <img src="./assets/income.svg" alt="Image de entradas" />
          </h3>
          <p id="incomeDisplay">R$ 0,00</p>
        </div>

        <div className="card">
          <h3>
            <span> Saídas </span>
            <img src="./assets/expense.svg" alt="Image de saídas" />
          </h3>
          <p id="expenseDisplay">R$ 0,00</p>
        </div>

        <div className="card total">
          <h3>
            <span> Total </span>
            <img src="./assets/total.svg" alt="Image de total" />
          </h3>
          <p id="totalDisplay">R$ 0,00</p>
        </div>
      </section>

      <section id="transaction">
        <h2 className="sr-only">Transações</h2>

        <a href="#" onClick={Modal.toggle} className="button new"
          >+ Nova Transação</a
        >

        <table id="data-table">
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Valor</th>
              <th>Data</th>
              <th></th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </section>
    </main>

    <div className="modal-overlay">
      <div className="modal">
        <div id="form">
          <h2>Nova Transação</h2>
          <form action="" onSubmit={Form.submit(event)}>
            <div className="input-group">
              <label className="sr-only" for="description">Descrição</label>
              <input
                type="text"
                id="description"
                name="description"
                placeholder="Descrição"
              />
            </div>

            <div className="input-group">
              <label className="sr-only" for="amount">Valor</label>
              <input
                type="number"
                step="0.01"
                id="amount"
                name="amount"
                placeholder="0,00"
              />
              <small className="help"
                >Use o sinal - (negativo) para despesas e , (vírgula) para casas
                decimais</small
              >
            </div>

            <div className="input-group">
              <label className="sr-only" for="date">Data</label>
              <input type="date" id="date" name="date" />
            </div>

            <div className="input-group actions">
              <a onClick={Modal.toggle} href="#" className="button cancel"
                >Cancelar</a
              >
              <button>Salvar</button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <footer><p>dev.finance$</p></footer>
  </>
  );
}

export default Expenses;
