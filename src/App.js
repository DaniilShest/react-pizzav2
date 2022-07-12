import React from "react";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import {
  Routes,
  Route,
} from "react-router-dom";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="container">
          <Header />
          <div className="line"></div>
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
          <div className="line-footer"></div>
        </div>
        <Footer />
      </div>
    </div >
  );
}

export default App;
