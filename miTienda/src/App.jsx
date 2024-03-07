import NavBar from "./components/NavBar/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/item/:id"element={<ItemDetailContainer />}/>
        <Route path="/Productos" element={<ItemListContainer/>}/>
        <Route path="Productos/:category" element={<ItemListContainer/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}
export default App;
