import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link as RouterLink } from 'react-router-dom';

const ResponsiveAppBar = () => {
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [anchorElUser, setAnchorElUser] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	return (
		<AppBar position="static">
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Typography
						variant="h2"
						noWrap
						component="div"
						sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
					>
						LOGO
					</Typography>

					<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: 'block', md: 'none' },
							}}
						>
							{/* {pages.map((page) => (
								<MenuItem
									key={page} onClick={handleCloseNavMenu}>
									<Typography textAlign="center">{page}</Typography>
								</MenuItem>
							))} */}
							<MenuItem
								component={RouterLink} to='/'
								key='home' onClick={handleCloseNavMenu}>
								<Typography textAlign="center">Home</Typography>
							</MenuItem>
							<MenuItem
								component={RouterLink} to='signup'
								key='signup' onClick={handleCloseNavMenu}>
								<Typography textAlign="center">Sign Up</Typography>
							</MenuItem>
							<MenuItem
								component={RouterLink} to='login'
								key='login' onClick={handleCloseNavMenu}>
								<Typography textAlign="center">Login</Typography>
							</MenuItem>
						</Menu>
					</Box>
					<Typography
						variant="h6"
						noWrap
						component="div"
						sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
					>
						LOGO
					</Typography>
					<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
						<Button
							component={RouterLink} to='/'
							key='home'
							onClick={handleCloseNavMenu}
							sx={{ my: 2, color: 'white', display: 'block' }}
						>
							Home
						</Button>
						<Button
							component={RouterLink} to='signup'
							key='signup'
							onClick={handleCloseNavMenu}
							sx={{ my: 2, color: 'white', display: 'block' }}
						>
							Sign up
						</Button>
						<Button
							component={RouterLink} to='login'
							key='login'
							onClick={handleCloseNavMenu}
							sx={{ my: 2, color: 'white', display: 'block' }}
						>
							Login
						</Button>
					</Box>

					<Box sx={{ flexGrow: 0 }}>
						<Tooltip title="Open settings">
							<IconButton
								onClick={handleOpenUserMenu} sx={{ p: 0 }}>
								<Avatar alt="" src="/static/images/avatar/2.jpg" />
							</IconButton>
						</Tooltip>
						<Menu
							sx={{ mt: '45px' }}
							id="menu-appbar"
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}
						>
							<MenuItem
								key='Profile'
								onClick={handleCloseUserMenu}
								component={RouterLink} to='/profile'>
								<Typography textAlign="center">Profile</Typography>
							</MenuItem>
							<MenuItem key='Account' onClick={handleCloseUserMenu}>
								<Typography textAlign="center">Account</Typography>
							</MenuItem>
							<MenuItem key='Dashboard' onClick={handleCloseUserMenu}>
								<Typography textAlign="center">Dashboard</Typography>
							</MenuItem>
							<MenuItem key='Logout' onClick={handleCloseUserMenu}>
								<Typography textAlign="center">Logout</Typography>
							</MenuItem>
						</Menu>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default ResponsiveAppBar;
