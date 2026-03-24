import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CodePage from "qmate-fun/src/pages/CodePage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/code/1" element={<CodePage />} />
      </Routes>
    </Router>
  );
}
