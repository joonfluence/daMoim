import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Login from "./pages/login";
import About from "./pages/about";
import Dashboard from "./pages/dashboard";
import Home from "./pages/home";
import NoMatch from "./pages/nomatch";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="about" element={<About />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
