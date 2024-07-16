import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          EventPlanner360
        </Typography>
        <Button component={RouterLink} to="/" color="inherit">
          Home
        </Button>
        <Button component={RouterLink} to="/events" color="inherit">
          Events
        </Button>
        <Button component={RouterLink} to="/budget" color="inherit">
          Budget Tracking
        </Button>
        <Button component={RouterLink} to="/schedule" color="inherit">
          Event Schedule
        </Button>
        <Button component={RouterLink} to="/guest-list" color="inherit">
          Guest List
        </Button>
        <Button component={RouterLink} to="/vendor-coordination" color="inherit">
          Vendor Coordination
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
