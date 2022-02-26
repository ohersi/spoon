import "./App.css";
import Nav from "./components/Nav";
import Login from "./pages/Login";
import Main from "./components/Main";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
      <Login />
    </div>
  );
}

export default App;
