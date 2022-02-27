import React from 'react';
import { mockUsers } from './../context/mockdata/MockUserData';
// MUI
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Feed = ({ clickedCuisine }) => {

	console.log('cuisine clicked:', clickedCuisine);

	return (
		<div className="feed">
			{mockUsers.map((user) => {
				return (
					clickedCuisine == user.ethnicity ?
						<Card sx={{ maxWidth: 345, mt: 5 }}>
							<CardMedia
								component="img"
								height="140"
								image={user.profile_image}
								alt="profile picture"
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="div">
									{user.first_name}
								</Typography>
								<Typography variant="body2" color="text.secondary">
									Gender:{user.gender}
								</Typography>
								<Typography variant="body2" color="text.secondary">
								Ethnicity:{user.ethnicity}{' '}
								</Typography>
								<Typography variant="body2" color="text.secondary">								
									Country: {user.country} 
								</Typography>
								<Typography variant="body2" color="text.secondary">				
									Favorite Food:{user.cuisine}
								</Typography>
							</CardContent>
							<CardActions>
								<Button size="small">Invite</Button>
							</CardActions>
						</Card>
						:
						null
				);
			})}
		</div>
	);
};

export default Feed;
