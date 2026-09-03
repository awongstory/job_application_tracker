import { Routes, Route } from "react-router-dom";
import AddNew from "./components/AddNew";
import Dashboard from "./components/Dashboard.tsx";
import Home from "./components/Home";
import { Navbar } from "./components/Navbar.tsx";
import { Footer } from "./components/Footer.tsx";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-entry" element={<AddNew />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}
