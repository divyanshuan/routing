import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import NewPage from "./NewPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/faimily/:id" element={<NewPage />} />
        {/* <Route path="/faimily/1" element={<NewPage />} />
        <Route path="/faimily/2" element={<NewPage />} />
        <Route path="/faimily/3" element={<NewPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
