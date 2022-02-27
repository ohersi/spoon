import React from 'react';
import { useState } from 'react';
import { countries } from '../context/mockdata/MockUserData';

const Profile = () => {
	const [cuisineorg, setCuisineOrg] = useState(countries);
	const [cuisinetry, setCuisineTry] = useState(countries);
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
			<h3>Select Cuisines You Are Interested In Dicovering</h3>
			<div className="cuisines-to-try">
				{cuisineorg.map((cuisine) => {
					return (
						<div className="food-btn" key={cuisine.id}>
							{cuisine.cuisineName}
						</div>
					);
				})}
			</div>
            <button type='submit'> Submit </button>
		</div>
	);
};

export default Profile;
