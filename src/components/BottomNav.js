import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import GroupsIcon from '@mui/icons-material/Groups';
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Link as RouterLink } from 'react-router-dom';


export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 1 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Matches" icon={<GroupsIcon />} component={RouterLink} to='/feed'/>
        <BottomNavigationAction label="Login" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </Box>
  );
}
