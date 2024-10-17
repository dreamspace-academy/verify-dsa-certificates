import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Snackbar,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Info({ certificate, selectedProg }) {
  const [copied, setCopied] = useState(false);

  const certificateUrl = `https://verify.dreamspace.academy/certificate/${selectedProg.id}/${certificate.id}`;

  const linkedInMessage = `I am excited to share that I have completed the ${selectedProg.initiative}! Check out my certificate: ${certificateUrl}`;

  const handleLinkedIn = () => {
    const linkedInShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      certificateUrl
    )}&text=${encodeURIComponent(linkedInMessage)}`;
    window.open(linkedInShareUrl, '_blank');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(certificateUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
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
        <Button
          variant="contained"
          fullWidth
          onClick={handleLinkedIn}
          startIcon={<LinkedInIcon />}
        >
          Share on LinkedIn
        </Button>
        <TextField
          fullWidth
          variant="outlined"
          value={certificateUrl}
          margin="normal"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Tooltip title="Copy URL">
                  <IconButton
                    aria-label="copy link"
                    onClick={handleCopy}
                    edge="end"
                  >
                    <ContentCopyIcon />
                  </IconButton>
                </Tooltip>
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Snackbar
        open={copied}
        autoHideDuration={2000}
        message="URL copied to clipboard"
      />
    </>
  );
}

export default Info;
