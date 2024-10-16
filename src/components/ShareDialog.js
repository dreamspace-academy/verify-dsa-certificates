import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Snackbar,
  InputAdornment,
  IconButton,
  Tooltip,
  CircularProgress,
  Card,
  Stack,
} from '@mui/material';
import { QRCodeSVG } from 'qrcode.react';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export default function ShareDialog({ open, onClose, certificateUrl }) {
  const [copied, setCopied] = useState(false);
  const [downloading, setDownloading] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(certificateUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleDownload = () => {
    setDownloading(true);
    const svg = document.getElementById('QRCode');
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      const pngFile = canvas.toDataURL('image/png');
      const downloadLink = document.createElement('a');
      downloadLink.download = 'QRCode.png'; // Add file extension
      downloadLink.href = pngFile;
      downloadLink.click();
      setDownloading(false); // Reset downloading state
    };

    img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
  };

  return (
    <>
      <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
        <DialogTitle>Share Certificate</DialogTitle>
        <DialogContent sx={{ textAlign: 'center' }}>
          <Card sx={{ p: 3 }}>
            <Stack
              spacing={2}
              sx={{
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <QRCodeSVG id="QRCode" value={certificateUrl} size={256} />
              <Button
                variant="contained"
                color="primary"
                onClick={handleDownload}
                disabled={downloading} // Disable button while downloading
              >
                {downloading ? (
                  <CircularProgress size={24} />
                ) : (
                  'Download QR Code'
                )}
              </Button>
            </Stack>
          </Card>
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
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Close</Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={copied}
        autoHideDuration={2000}
        message="URL copied to clipboard"
      />
    </>
  );
}
