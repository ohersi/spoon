import './App.css';
import BottomNav from './components/BottomNav';
import TopNav from './components/TopNav';
import Login from './pages/Login';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import { Routes, Route } from 'react-router-dom';
import UserContext from './context/UserContext';
import { useState } from 'react';

import React from 'react';

const App = () => {
	const [user, setUser] = useState('');
	console.log(user)
	return (
		<div>
			<UserContext.Provider value={user}>
				<TopNav />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login setUser={setUser} />} />
					<Route path="/signup" element={<SignUp setUser={setUser} />} />
				</Routes>
				<BottomNav />
			</UserContext.Provider>
		</div>
	);
};

export default App;
