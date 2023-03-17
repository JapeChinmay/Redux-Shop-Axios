import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductsList from "./components/ProductsList";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<ProductsList />} />
        <Route path="/product/:productId" exact element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
