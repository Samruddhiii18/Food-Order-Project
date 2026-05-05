import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
      <Toaster
        position="bottom-center"
        toastOptions={{ duration: 5000 }}
      />
    </React.StrictMode>
  </Provider>
);
