import "./App.css";
import Home from "./pages/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Connect from "./pages/Connect";
import PageUnderConstruction from "./pages/PageUnderConstruction";
import Dashboard from "./pages/Dashboard";
import AboutMint from "./pages/AboutMint";
import Mint from "./pages/Mint";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/constructing" element={<PageUnderConstruction />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/aboutmint" element={<AboutMint />} />
        <Route path="/mint" element={<Mint />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
