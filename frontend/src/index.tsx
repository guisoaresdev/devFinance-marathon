import React from "react";
import ReactDOM from "react-dom/client";
import Expenses from "./features/expenses/Expenses";
import Modal from "./components/modal/Modal";
import store from "./utils/redux/store";
import { Provider } from "react-redux";
import reportWebVitals from "./utils/reportWebVitals";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Expenses />
    </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
