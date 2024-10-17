import React, { useEffect, useRef, useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  CircularProgress,
} from '@mui/material';
import { useParams } from 'react-router-dom';
import useGoogleSheetData from '../hooks/useGoogleSheetData';
import { csvUrl } from '../utils/fileUrl';
import Papa from 'papaparse';
import HomeAppBar from '../components/HomeAppBar';
import ShareIcon from '@mui/icons-material/Share';
import Info from '../components/view-certificate/Info';
import DSSCertificateSVG from '../components/view-certificate/certificates/DSSCertificateSVG';
import { Helmet } from 'react-helmet';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import ShareQRCode from '../components/ShareQRCode';
import PictureAsPdfRoundedIcon from '@mui/icons-material/PictureAsPdfRounded';

export default function CertificatePage() {
  const { programId, certificateId } = useParams();
  const [selectedProg, setSelectedProg] = useState(null);
  const [certificate, setCertificate] = useState(null);
  const [loading, setLoading] = useState(true);
  const svgRef = useRef();
  const { sheetData: programs, loading: loadingPrograms } =
    useGoogleSheetData(csvUrl);

  useEffect(() => {
    if (!loadingPrograms) {
      const selectedProgram = programs.find((prog) => prog.id === programId);
      if (selectedProgram) {
        setSelectedProg(selectedProgram);
      }
    }
  }, [loadingPrograms, programs, programId]);

  useEffect(() => {
    if (selectedProg) {
      const certificateUrl = csvUrl.replace('gid=0', `gid=${selectedProg.gId}`);
      Papa.parse(certificateUrl, {
        download: true,
        header: true,
        complete: (result) => {
          const certificateData = result.data.find(
            (cert) => cert.id === certificateId
          );
          setCertificate(certificateData);
          setLoading(false);
        },
      });
    }
  }, [selectedProg, certificateId]);

  const [open, setOpen] = useState(false);
  const certificateUrl = `https://verify.dreamspace.academy/certificate/${programId}/${certificateId}`;

  const handleShare = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const downloadPDF = async () => {
    const svgElement = svgRef.current;

    if (svgElement) {
      // Clone the SVG element into a hidden canvas
      const canvas = await html2canvas(svgElement, { useCORS: true });

      // Create a jsPDF instance
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'pt',
        format: [canvas.width, canvas.height],
      });

      // Add the canvas image to the PDF
      const imageData = canvas.toDataURL('image/png');
      pdf.addImage(imageData, 'PNG', 0, 0, canvas.width, canvas.height);

      // Download the PDF
      pdf.save(`${selectedProg.programmeName}_certificate.pdf`);
    }
  };

  if (loading || loadingPrograms) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (!certificate) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Typography variant="h6">Certificate not found</Typography>
      </Box>
    );
  }

  return (
    <>
      <Helmet>
        <title>{`Certificate of ${certificate.name}`}</title>
        <meta
          property="og:title"
          content={`Certificate of ${certificate.name}`}
        />
        <meta
          property="og:description"
          content={`I have successfully completed the ${selectedProg.initiative}. Check out my certificate!`}
        />
        <meta
          property="og:image"
          content="https://verify.dreamspace.academy/dss-banner.jpg"
        />
        <meta property="og:url" content={certificateUrl} />
        <meta property="og:type" content="website" />
      </Helmet>
      <HomeAppBar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Info certificate={certificate} selectedProg={selectedProg} />
            <ShareQRCode certificateUrl={certificateUrl} />
          </Grid>
          <Grid item xs={12} md={8}>
            <Card>
              <CardContent>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  mb={2}
                >
                  <Typography variant="h6">
                    {certificate.name}'s certificate
                  </Typography>

                  <Button
                    variant="contained"
                    color="primary"
                    onClick={downloadPDF}
                    sx={{ mt: 2 }}
                    startIcon={<PictureAsPdfRoundedIcon />}
                  >
                    PDF
                  </Button>
                </Box>
                <Box ref={svgRef}>
                  <DSSCertificateSVG
                    id={certificate.id}
                    name={certificate.name}
                    issuedOn={certificate.issuedOn}
                    certificateUrl={certificateUrl}
                    sx={{
                      width: '100%',
                      borderRadius: 2,
                      background: 'linear-gradient(to right, #9c27b0, #2196f3)',
                    }}
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
