
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Resume from "./components/Resume";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Resume />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;