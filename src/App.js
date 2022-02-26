import "./App.css";
import Nav from "./components/Nav"
import Nav2 from "./components/Nav2";
import Login from "./pages/Login";
import Main from "./components/Main";
import { Routes, Route } from "react-router-dom";
import { sizing } from '@mui/system'

const App = () => {
  return (
    <div className="App">
       <Nav2 />
      <Main />
      <Login />
      <Nav />
    </div>
  );
}

export default App;

