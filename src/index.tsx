import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import App from "./app/App";
import MovieLayout from "./components/MovieLayout";
import { setupStore } from "./store/store";
import { itemsNavigate } from "./utils/navigateItems";

const store = setupStore();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <MovieLayout items={itemsNavigate}>
          <App />
        </MovieLayout>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);
