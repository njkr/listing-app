import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage.js";
import "./styles/App.css";
import ListingPage from "./pages/ListingPage.js";
import DetailsPage from "./pages/DetailsPage.js";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ListingPage />} />
            <Route path="/university/:id/:name" element={<DetailsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
