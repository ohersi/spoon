import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { countries } from '../context/mockdata/MockUserData';

const Profile = ({ setClickedCuisine }) => {
	const [cuisineorg, setCuisineOrg] = useState(countries);
	const [cuisinetry, setCuisineTry] = useState(countries);
	const navigate = useNavigate()
	console.log(cuisineorg);

	const handleSelected = (id) => {
		console.log(id);
		const output = cuisineorg.map((cuisine) => {
			if (cuisine.id === id) {
				return { ...cuisine, selected: !cuisine.selected };
			}
			return cuisine;
		});

		console.log('this is handled', output);
		setCuisineOrg(output);
	};

	return (
		<div className="profile_main">
			<h3>Select Your Countries Origin Cuisine</h3>
			<div className="origin-cuisine">
				{cuisineorg.map((cuisine) => {
					return (
						<div
							className={cuisine.selected ? 'selected food-btn' : 'food-btn'}
							onClick={() => handleSelected(cuisine.id)}
							key={cuisine.id}
						>
							{cuisine.cuisineName}
						</div>
					);
				})}
			</div>
			<h3>Select Cuisines You Are Interested In Discovering</h3>
			<div className="cuisines-to-try">
				{cuisineorg.map((cuisine) => {
					return (
						<div className="food-btn" key={cuisine.id} onClick={()=> setClickedCuisine(cuisine.ethnicity)}>
							{cuisine.cuisineName}
						</div>
					);
				})}
			</div>
            <button type='submit' onClick={()=>navigate('/feed')}> Submit </button>
		</div>
	);
};

export default Profile;
