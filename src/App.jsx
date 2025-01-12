import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { GlobalContext } from "./Context/Context"; // Import Context
import Login from "./Login";
import Home from "./Home";
import ProductDetails from "./ProductDetails"; // Import ProductDetails

function App() {
  const { state } = useContext(GlobalContext); // Use context state

  return (
    <Router>
      {state.isLogin ? (
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
