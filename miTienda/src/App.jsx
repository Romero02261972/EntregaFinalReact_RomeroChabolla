import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import  Checkout  from "./components/Checkout/Checkout";
import CartWidget from "./components/CartWidget/CartWidget";
import Count from './components/ItemCount/ItemCount';

function App() {
  const [product, setProduct] = useState(null); 

  const handleBuyerData = (buyerData) => {
  };

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:category" element={<ItemListContainer />} />
        <Route path="/category/:id" element={<ItemDetailContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route
          path="/cart/:productId"
          element={<Count product={product} stock={product ? product.stock : 0} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


