import "./App.css";
import { TopNav, BottomNav } from "./components";
import { Home, Login, SignUp, Profile, Feed } from "./pages";
import { Routes, Route } from "react-router-dom";
import { useState } from 'react';


const App = () => {

	const[clickedCuisine, setClickedCuisine] = useState('');
  return (
    <>
      <TopNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile setClickedCuisine={setClickedCuisine}/>} />
        <Route path="/feed" element={<Feed clickedCuisine={clickedCuisine}/>} />
        
      </Routes>
      <BottomNav />
    </>
  );
};

export default App;
