import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../../utils/redux/reducers/modalSlice";
import { useAppSelector, useAppDispatch } from "../../hooks/ReduxHooks";
import { RootState } from "../../utils/redux/store";
import "./Modal.css";

function Modal() {
  const isOpen = useAppSelector((state: RootState) => state.modal.isOpen);
  const dispatch = useAppDispatch();
  const toggle = () => {
    dispatch(toggleModal());
  };
  return (
    <>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <div id="form">
              <h2>Nova Transação</h2>
              <form action="">
                <div className="input-group">
                  <label className="sr-only" htmlFor="description">
                    Descrição
                  </label>
                  <input
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
                    type="number"
                    step="0.01"
                    id="amount"
                    name="amount"
                    placeholder="0,00"
                  />
                  <small className="help">
                    Use o sinal - (negativo) para despesas e , (vírgula) para
                    casas decimais
                  </small>
                </div>

                <div className="input-group">
                  <label className="sr-only" htmlFor="date">
                    Data
                  </label>
                  <input type="date" id="date" name="date" />
                </div>

                <div className="input-group actions">
                  <a onClick={toggle} href="#" className="button cancel">
                    Cancelar
                  </a>
                  <button>Salvar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
