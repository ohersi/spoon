import './App.css';
import Nav from './components/Nav';
import Nav2 from './components/Nav2';
import Login from './pages/Login';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import { Routes, Route } from 'react-router-dom';

import React from 'react';

const App = () => {
	return (
		<div>
			<Nav2 />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<SignUp />} />
			</Routes>
			<Nav />
		</div>
	);
};

export default App;
