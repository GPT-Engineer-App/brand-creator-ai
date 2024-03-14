import BrandIdentity from "./pages/BrandIdentity.jsx";
import Index from "./pages/Index.jsx";
import VisualSelection from "./pages/VisualSelection.jsx";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/visual-selection" element={<VisualSelection />} />
        <Route path="/select-visuals" element={<VisualSelection />} />
        <Route path="/brand-identity" element={<BrandIdentity />} />
      </Routes>
    </Router>
  );
}
export default App;
