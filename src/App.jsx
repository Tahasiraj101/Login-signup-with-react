import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { GlobalContext } from "./Context/Context"; // Import Context
import Login from "./Login";
import Home from "./Home";
import ProductDetails from "./ProductDetails";
import ContextProvider from "./Context/Context"; 

function App() {
  const { state } = useContext(GlobalContext); 

  return (
<<<<<<< HEAD
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} /> {/* Dashboard Route */}
      </Routes>
    </Router>
=======
    <ContextProvider>  
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
    </ContextProvider>
>>>>>>> 8df64d9 (login-api)
  );
}

export default App;
