import "./App.css";
import Home from "./pages/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Connect from "./pages/Connect";
import PageUnderConstruction from "./pages/PageUnderConstruction";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/constructing" element={<PageUnderConstruction />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
