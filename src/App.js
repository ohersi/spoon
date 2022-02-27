import "./App.css";
import { TopNav, BottomNav } from "./components";
import { Home, Login, SignUp, Profile, Feed } from "./pages";
import { Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <>
      <TopNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/feed" element={<Feed />} />
        
      </Routes>
      <BottomNav />
    </>
  );
};

export default App;
