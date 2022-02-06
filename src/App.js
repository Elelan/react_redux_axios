import Header from "./containers/Header";
import "./styles.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./containers/ProductList";
import ProductDetail from "./containers/ProductDetails";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<ProductList />} />
          <Route path="/product/:productId" exact element={<ProductDetail />} />
          <Route
            path="*"
            element={
              <>
                <h1>404 not found</h1>
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}
