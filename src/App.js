import './App.css';
import BottomNav from './components/BottomNav';
import TopNav from './components/TopNav';
import Login from './pages/Login';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import { Routes, Route } from 'react-router-dom';


import React from 'react';

const App = () => {
	return (
		<div>
			<TopNav />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<SignUp />} />
			</Routes>
			<BottomNav />
		</div>
	);
};

export default App;
