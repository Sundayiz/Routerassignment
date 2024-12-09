import { Routes, Route, Link } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <li>
        {""}
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
