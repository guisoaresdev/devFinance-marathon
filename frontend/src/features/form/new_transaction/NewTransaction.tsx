import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../../../utils/redux/reducers/modalSlice";
import { useAppSelector, useAppDispatch } from "../../../hooks/ReduxHooks";
import { RootState } from "../../../utils/redux/store";
import "./NewTransaction.css";

function NewTransaction() {
  const [inputs, setInputs] = useState({
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
  return (
    <>
      <div id="form">
        <h2>Nova Transação</h2>
        <form action="">
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
            <button>Salvar</button>
          </div>
        </form>
      </div>
    </>
  );
}
export default NewTransaction;
