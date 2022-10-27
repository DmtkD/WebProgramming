import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Catalog from "./page/Catalog/Catalog";
import Header from "./components/Header/Header"
import Home from "./page/Home/Home";
import Item from "./page/Item/Item";

function App() {
  const catalogItem = [1, 2, 3, 4, 5,]
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/catalog" element={<Catalog />}/>
        {catalogItem.map((index) => {return <Route key={index} path={`/catalog/${index}`} element={<Item/>}/>})}
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
