import { Box, Button, Typography } from '@mui/material';
import React from 'react';

function Info({ certificate, selectedProg }) {
  return (
    <>
      <Box display="flex" alignItems="center" mb={2}>
        <Box
          component="img"
          src={selectedProg.avatar} // Program logo
          alt={`${selectedProg.initiative} Logo`}
          sx={{ width: 50, height: 50, borderRadius: '50%', mr: 2 }}
        />
        <Typography variant="h5" component="h1">
          {selectedProg.initiative}
        </Typography>
      </Box>

      <Typography variant="body2">
        {selectedProg.programmeDescription}
      </Typography>
      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
        General information
      </Typography>
      <Typography variant="body2">
        <strong>Recipient:</strong> {certificate.name}
      </Typography>

      <Typography variant="body2" mt={2}>
        <strong>Issued On:</strong> {certificate.issuedOn}
      </Typography>
      <Box mt={2}>
        <Button variant="contained" fullWidth>
          Add to LinkedIn Profile
        </Button>
      </Box>
      <Box mt={2}>
        <Button variant="outlined" fullWidth>
          Share on Facebook
        </Button>
      </Box>
      <Box mt={2}>
        <Button variant="outlined" fullWidth>
          Share on Twitter
        </Button>
      </Box>
    </>
  );
}

export default Info;
