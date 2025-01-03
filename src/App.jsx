import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from './Signup';
import Login from './Login';
import Dashboard from './Dashboard'; // Import Dashboard
import Home from "./Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} /> {/* Dashboard Route */}
      </Routes>
    </Router>
  );
}

export default App;
