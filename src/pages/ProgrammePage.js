import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  TextField,
  Typography,
  Snackbar,
  Alert,
} from '@mui/material';
import { VerifiedUser } from '@mui/icons-material';
import { useParams } from 'react-router-dom';
import HomeAppBar from '../components/HomeAppBar';
import useGoogleSheetData from '../hooks/useGoogleSheetData';
import { csvUrl } from '../utils/fileUrl';
import Loading from '../components/Loading';

// Simulated API call to verify the certificate
const verifyCertificate = async ({ id }) => {
  // Simulating an API call
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return id === '12345'; // For demo purposes, only '12345' is a valid ID
};

export default function ProgrammePage() {
  const { id } = useParams();
  const { sheetData, loading } = useGoogleSheetData(csvUrl);

  const [certificateId, setCertificateId] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationResult, setVerificationResult] = useState(null);

  const handleVerify = async () => {
    setIsVerifying(true);
    const result = await verifyCertificate(certificateId);
    setVerificationResult(result);
    setIsVerifying(false);

    if (result) {
      // In a real application, you would navigate to the certificate details page here
      console.log(
        'Certificate verified successfully. Navigating to details page...'
      );
    }
  };

  // If loading, show loading component
  if (loading) {
    return <Loading />;
  }

  // Find the selected program based on the id
  const program = sheetData.find((item) => item.id === id);

  // If no program is found, show an error message
  if (!program) {
    return (
      <Container maxWidth="md">
        <Typography variant="h5" color="error" mt={4}>
          Program not found!
        </Typography>
      </Container>
    );
  }

  return (
    <>
      <HomeAppBar />

      <Container maxWidth="md">
        <Box my={4}>
          <Card>
            <CardContent>
              <Box display="flex" alignItems="center" mb={2}>
                <Box
                  component="img"
                  src={program.avatar}
                  alt={`${program.initiative} Logo`}
                  sx={{ width: 50, height: 50, borderRadius: '50%', mr: 2 }}
                />
                <Typography variant="h4" component="h1">
                  {program.initiative}
                </Typography>
              </Box>
              <Typography variant="h5" component="h2" gutterBottom>
                {program.programmeName}
              </Typography>
              <Typography variant="body1" paragraph>
                {program.programmeDescription}
              </Typography>
              <Box my={4}>
                <Typography variant="h6" gutterBottom>
                  Verify Your Certificate
                </Typography>
                <TextField
                  fullWidth
                  label="Enter Certificate ID"
                  variant="outlined"
                  value={certificateId}
                  onChange={(e) => setCertificateId(e.target.value)}
                  sx={{ mb: 2 }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<VerifiedUser />}
                  onClick={handleVerify}
                  disabled={isVerifying || !certificateId}
                >
                  {isVerifying ? 'Verifying...' : 'Verify Certificate'}
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Box>
        <Snackbar
          open={verificationResult !== null}
          autoHideDuration={6000}
          onClose={() => setVerificationResult(null)}
        >
          <Alert
            onClose={() => setVerificationResult(null)}
            severity={verificationResult ? 'success' : 'error'}
            sx={{ width: '100%' }}
          >
            {verificationResult
              ? 'Certificate verified successfully! Redirecting to certificate details...'
              : 'Invalid certificate ID. Please try again.'}
          </Alert>
        </Snackbar>
      </Container>
    </>
  );
}
