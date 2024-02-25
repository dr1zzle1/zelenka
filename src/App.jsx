import { Route, Routes } from "react-router-dom";
import "./App.scss";
import MainPage from "./pages/MainPage";
import Login from "./pages/Authorization/Login";
import Register from "./pages/Authorization/Register";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/*" element={<NotFoundPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
