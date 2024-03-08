import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import  Checkout  from "./components/Checkout/Checkout";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:category" element={<ItemListContainer />} />
        <Route path="/category/:id" element={<ItemDetailContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/Checkout" element= {<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
