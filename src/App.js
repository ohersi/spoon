import './App.css';
import BottomNav from './components/BottomNav';
import TopNav from './components/TopNav';
import Login from './pages/Login';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import UserContext from './context/UserContext'

const App = () => {

	// const [first_name, setFirstName] = useState('')
	// const [last_name, setLastName] = useState('')
	// const [country, setCountry] = useState('')
	// const [cuisine, setCuisine] = useState('')
	//console.log("inside App:", user);
	return (
		<>
			<UserContext.Provider >
				<TopNav />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<SignUp 
					// setFirstName={setFirstName} 
					// setLastName={setLastName}
					// setCountry={setCountry}
					// setCuisine={setCuisine}
					// first_name={first_name}
					// last_name={last_name}
					// country={country}
					// cuisine={cuisine}
					/>
					} 
					/>
				</Routes>
				<BottomNav />
			</UserContext.Provider>

		</>
	);
};

export default App;
