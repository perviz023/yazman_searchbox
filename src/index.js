import React from "react";
import ReactDOM from "react-dom/client";
import * as ReactDOMClient from 'react-dom/client';
import "./index.css";
import App from "./App";
import makeStore from "./store/createStore";
import { Provider } from "react-redux";

const store = makeStore();



const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);