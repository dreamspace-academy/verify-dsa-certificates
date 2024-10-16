import { Box, Button, Typography } from '@mui/material';
import React from 'react';

function Info({ certificate, selectedProg }) {
  // Construct the certificate URL to be shared
  const certificateUrl = `https://verify.dreamspace.academy/certificate/${selectedProg.id}/${certificate.id}`;

  // Create a custom LinkedIn share message
  const linkedInMessage = `I am excited to share that I have completed the ${selectedProg.initiative}! Check out my certificate: ${certificateUrl}`;

  // Function to handle LinkedIn button click
  const handleLinkedIn = () => {
    const linkedInShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      certificateUrl
    )}&text=${encodeURIComponent(linkedInMessage)}`;
    window.open(linkedInShareUrl, '_blank');
  };

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
        <Button variant="contained" fullWidth onClick={handleLinkedIn}>
          Share on LinkedIn
        </Button>
      </Box>
    </>
  );
}

export default Info;
