import "./App.css";
import { TopNav, BottomNav } from "./components";
import { Home, Login, SignUp } from "./pages";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <TopNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <BottomNav />
    </>
  );
};

export default App;
