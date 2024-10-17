import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

function HomeAppBar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            component="img"
            src="/logo-dsa.png"
            alt="Logo"
            sx={{ display: 'flex', height: 50, mr: 1 }}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default HomeAppBar;
