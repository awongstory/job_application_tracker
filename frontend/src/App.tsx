import { Routes, Route, Navigate } from "react-router-dom";
import AddNew from "./components/AddNew";
import Dashboard from "./components/Dashboard.tsx";
import Home from "./components/Home";
import Navbar from "./components/Navbar.tsx";
import { Footer } from "./components/Footer.tsx";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
      <div className="wrapper">
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/add-entry" element={<AddNew />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        <Footer />
      </div>
  );
}
