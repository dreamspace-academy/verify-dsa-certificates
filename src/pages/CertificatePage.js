import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Container,
  Box,
  Card,
} from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import CertificateSVG from '../components/CertificateSVG';
import { useParams } from 'react-router-dom';
import ShareDialog from '../components/ShareDialog';

export default function CertificateViewer({ certificates }) {
  const { id } = useParams();

  const [open, setOpen] = useState(false);
  const certificateUrl = `https://example.com/certificate/${id}`;

  const handleShare = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (!certificates || certificates.length === 0) {
    return (
      <Typography>Loading certificates or no certificates found.</Typography>
    );
  }

  const certificate = certificates.find((cert) => cert.id === id);

  if (!certificate) {
    return <Typography>Certificate not found</Typography>;
  }

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Verify DSS Certification
          </Typography>
          <IconButton color="inherit" onClick={handleShare}>
            <ShareIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 3 }}>
        <Card
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mt: 2,
            mb: 3,
          }}
        >
          <CertificateSVG
            id={certificate.id}
            name={certificate.name}
            course={certificate.course}
            issuedOn={certificate.IssuedOn}
          />
        </Card>
      </Container>

      <ShareDialog
        open={open}
        onClose={handleClose}
        certificateUrl={certificateUrl}
      />
    </Box>
  );
}
