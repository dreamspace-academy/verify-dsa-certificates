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
import { useNavigate, useParams } from 'react-router-dom';
import HomeAppBar from '../components/HomeAppBar';
import useGoogleSheetData from '../hooks/useGoogleSheetData';
import { csvUrl } from '../utils/fileUrl';
import Loading from '../components/Loading';

export default function ProgrammePage() {
  const { id } = useParams();
  const { sheetData, loading } = useGoogleSheetData(csvUrl);

  const [certificateId, setCertificateId] = useState('');
  const [verificationResult, setVerificationResult] = useState(null);
  const navigate = useNavigate();

  const handleVerify = async () => {
    const certificateUrl = `/certificate/${id}/${certificateId}`;
    navigate(certificateUrl);
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
                >
                  Verify Certificate
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
