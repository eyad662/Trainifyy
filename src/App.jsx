import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Internships from "./pages/Internships";
import ApplyingHistory from "./pages/ApplyingHistory";

function App() {
  return (
    <Router>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/internships" element={<Internships />} />
        <Route path="/history" element={<ApplyingHistory />} />
      </Routes>
    </Router>
  );
}

export default App;
