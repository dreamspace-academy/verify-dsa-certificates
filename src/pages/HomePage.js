import React, { useState } from 'react';
import { Typography, Box, TextField, Button, Snackbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import HomeAppBar from '../components/HomeAppBar';
import ChooseProgramme from '../components/home/ChooseProgramme';

const HomePage = () => {
  const [certificateId, setCertificateId] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const navigate = useNavigate();

  const handleVerify = () => {
    if (!certificateId.trim()) {
      // Show Snackbar if certificateId is empty
      setOpenSnackbar(true);
      return;
    }
    // Navigate to the CertificatePage with the entered certificate ID
    navigate(`/certificate/${certificateId}`);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <>
      <HomeAppBar />
      <ChooseProgramme />
      <Box textAlign="center" mt={5}>
        <Typography variant="h3">Verify DSS Certification</Typography>
        <Typography variant="body1">Enter certificate ID to verify:</Typography>
        <Box mt={2}>
          <TextField
            label="Certificate ID"
            variant="outlined"
            value={certificateId}
            onChange={(e) => setCertificateId(e.target.value)}
            margin="normal"
          />
        </Box>
        <Box mt={2}>
          <Button variant="contained" color="primary" onClick={handleVerify}>
            Verify
          </Button>
        </Box>

        <Snackbar
          open={openSnackbar}
          autoHideDuration={3000}
          onClose={handleCloseSnackbar}
          message="Please enter a certificate ID"
        />
      </Box>
    </>
  );
};

export default HomePage;
