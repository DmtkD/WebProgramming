import { BrowserRouter, Route, Routes } from "react-router-dom";
import Catalog from "./page/Catalog/Catalog";
import Home from "./page/Home/Home"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/catalog" element={<Catalog />}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
