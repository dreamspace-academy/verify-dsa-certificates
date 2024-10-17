import React, { useState } from 'react';
import { Button, CircularProgress, Card, Stack } from '@mui/material';
import { QRCodeSVG } from 'qrcode.react';

export default function ShareQRCode({ certificateUrl }) {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    const svg = document.getElementById('certificate-svg');
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
      downloadLink.download = 'certificate.png'; // Add file extension
      downloadLink.href = pngFile;
      downloadLink.click();
      setDownloading(false); // Reset downloading state
    };

    img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
  };

  return (
    <>
      <Card sx={{ p: 3 }}>
        <Stack
          spacing={2}
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <QRCodeSVG id="QRCode" value={certificateUrl} size={150} />
          <Button
            variant="contained"
            color="primary"
            onClick={handleDownload}
            disabled={downloading} // Disable button while downloading
          >
            {downloading ? <CircularProgress size={24} /> : 'Download QR Code'}
          </Button>
        </Stack>
      </Card>
    </>
  );
}
