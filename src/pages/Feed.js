import React from 'react';
import { mockUsers } from './../context/mockdata/MockUserData';
const Feed = () => {
	return (
		<div className="feed">
			{mockUsers.map((user) => {
				return (
					<div className="card">
						<img src={user.profile_image} alt="robot" />
						<div className='user-info'>
							<p>
								Name: {user.first_name} Gender:{user.gender} 
                                {user.ethnicity}{' '}
								{user.country} {user.cuisine}
							</p>
						</div>
                            <button className='invite'>Invite</button>
					</div>
				);
			})}
		</div>
	);
};

export default Feed;
