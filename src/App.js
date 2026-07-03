
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      {/* 1. Welcome page */}  
        <Route path="/" element={<Welcome />} />

      {/* 2. Register page */}
        <Route path="/Register" element={<Register />} />

      {/* 3. Login page */}
        <Route path="/login" element={<Login />} />

      {/* 4. Resetpassword page */}
        <Route path="/Resetpassword" element={<ResetPassword />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;