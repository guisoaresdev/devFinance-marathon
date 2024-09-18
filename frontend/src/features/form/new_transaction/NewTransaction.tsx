import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../../../utils/redux/reducers/modalSlice";
import { useAppSelector, useAppDispatch } from "../../../hooks/ReduxHooks";
import { RootState } from "../../../utils/redux/store";
import { Transaction } from "../../../interfaces/transaction.ts";
import "./NewTransaction.css";

function NewTransaction({
  onNewTransaction,
}: {
  onNewTransaction: (transaction: Transaction) => void;
}) {
  const [inputs, setInputs] = useState<Transaction>({
    description: "",
    amount: 0,
    date: new Date(),
  });
  const isOpen = useAppSelector((state: RootState) => state.modal.isOpen);
  const dispatch = useAppDispatch();
  const toggle = () => {
    dispatch(toggleModal());
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Impede o reload da página
    const transaction: Transaction = {
      description: inputs.description,
      amount: parseFloat(inputs.amount.toString()),
      date: inputs.date,
    };
    const serializedBody = JSON.stringify(transaction);
    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: serializedBody,
    };

    try {
      const response = await fetch(
        "http://localhost:8080/api/transactions",
        fetchOptions,
      );

      if (!response.ok) {
        throw new Error("Erro ao salvar transação");
      }
      // Aqui você pode adicionar alguma ação após o sucesso, como limpar o formulário
      console.log("Transação salva com sucesso");
      const savedTransaction = await response.json();
      onNewTransaction(savedTransaction.result); // Chama a função passada via props para atualizar o estado

      console.log("Transação salva com sucesso");
      toggle(); // Fecha o modal
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div id="form">
        <h2>Nova Transação</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label className="sr-only" htmlFor="description">
              Descrição
            </label>
            <input
              onChange={handleChange}
              type="text"
              id="description"
              name="description"
              placeholder="Descrição"
            />
          </div>

          <div className="input-group">
            <label className="sr-only" htmlFor="amount">
              Valor
            </label>
            <input
              onChange={handleChange}
              type="number"
              step="0.01"
              id="amount"
              name="amount"
              placeholder="0,00"
            />
            <small className="help">
              Use o sinal - (negativo) para despesas e , (vírgula) para casas
              decimais
            </small>
          </div>

          <div className="input-group">
            <label className="sr-only" htmlFor="date">
              Data
            </label>
            <input type="date" id="date" name="date" onChange={handleChange} />
          </div>

          <div className="input-group actions">
            <a onClick={toggle} href="#" className="button cancel">
              Cancelar
            </a>
            <button type="submit">Salvar</button>
          </div>
        </form>
      </div>
    </>
  );
}
export default NewTransaction;
