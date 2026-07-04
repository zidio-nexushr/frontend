
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
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

      {/* 4. Forgot password page */}
        <Route path="/forgot-password" element={<ForgotPassword/>} />


      {/* Reset Password */}
      <Route path="/reset-password" element={<ResetPassword/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;