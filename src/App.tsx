import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import OnlineStoreService from "./pages/OnlineStoreService";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ar-tienda" element={<OnlineStoreService />} />
    </Routes>
  );
}

export default App;
