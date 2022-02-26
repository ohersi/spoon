import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
// Context
import UserContext from "./context/UserContext";
// Components
import Nav from "./components/Nav"
import Nav2 from "./components/Nav2";
import Main from "./components/Main";
// Pages
import Login from "./pages/Login";
// MockUsers
import mockUsers from './mockdata/MockUserData';
// CSS
import "./App.css";
// Mui
import { sizing } from '@mui/system'

const App = () => {

  const [user, setUser] = useState('')

  console.log(mockUsers)
  console.log(user)
  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <Nav2 />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='login' element={<Login />} />
        </Routes>
        <Nav />
      </UserContext.Provider>
    </>

  );
}

export default App;

