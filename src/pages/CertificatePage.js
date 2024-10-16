// import React, { useState } from 'react';
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   IconButton,
//   Container,
//   Box,
//   Card,
// } from '@mui/material';
// import ShareIcon from '@mui/icons-material/Share';
// import CertificateSVG from '../components/CertificateSVG';
// import { useParams } from 'react-router-dom';
// import ShareDialog from '../components/ShareDialog';

// export default function CertificateViewer({ certificates }) {
//   const { id } = useParams();

//   const [open, setOpen] = useState(false);
//   const certificateUrl = `https://example.com/certificate/${id}`;

//   const handleShare = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   if (!certificates || certificates.length === 0) {
//     return (
//       <Typography>Loading certificates or no certificates found.</Typography>
//     );
//   }

//   const certificate = certificates.find((cert) => cert.id === id);

//   if (!certificate) {
//     return <Typography>Certificate not found</Typography>;
//   }

//   return (
//     <Box>
//       <AppBar position="static">
//         <Toolbar>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             Verify DSS Certification
//           </Typography>
//           <IconButton color="inherit" onClick={handleShare}>
//             <ShareIcon />
//           </IconButton>
//         </Toolbar>
//       </AppBar>

//       <Container sx={{ mt: 3 }}>
//         <Card
//           sx={{
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             mt: 2,
//             mb: 3,
//           }}
//         >
//           <CertificateSVG
//             id={certificate.id}
//             name={certificate.name}
//             course={certificate.course}
//             issuedOn={certificate.IssuedOn}
//           />
//         </Card>
//       </Container>

//       <ShareDialog
//         open={open}
//         onClose={handleClose}
//         certificateUrl={certificateUrl}
//       />
//     </Box>
//   );
// }

import React from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Grid,
  IconButton,
  Link,
  Typography,
} from '@mui/material';
import {
  Facebook,
  LinkedIn,
  Instagram,
  Twitter,
  Language,
  VerifiedUser,
} from '@mui/icons-material';

export default function CertificateVerification() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Box display="flex" alignItems="center" mb={2}>
            <Box
              component="img"
              src="/placeholder.svg?height=50&width=50"
              alt="Reset School Logo"
              sx={{ width: 50, height: 50, borderRadius: '50%', mr: 2 }}
            />
            <Typography variant="h5" component="h1">
              Reset School
            </Typography>
          </Box>
          <Box display="flex" mb={2}>
            <IconButton size="small" aria-label="LinkedIn">
              <LinkedIn />
            </IconButton>
            <IconButton size="small" aria-label="Facebook">
              <Facebook />
            </IconButton>
            <IconButton size="small" aria-label="Instagram">
              <Instagram />
            </IconButton>
            <IconButton size="small" aria-label="Twitter">
              <Twitter />
            </IconButton>
            <Button startIcon={<Language />} size="small">
              Visit website
            </Button>
          </Box>
          <Typography variant="body2" paragraph>
            Reset School is an educational hub offering concise product training
            for diverse software tools. Ideal for both novices and experts, it
            ensures up-to-date proficiency in software utilization. See our
            learning programs <Link href="#">here</Link>.
          </Typography>
          <Typography variant="h6" gutterBottom>
            General information
          </Typography>
          <Typography variant="body2">
            <strong>Recipient:</strong> Uliana Kysheniuk
          </Typography>
          <Typography variant="body2" paragraph>
            <strong>Description:</strong> The holder of this certificate has
            learnt how to use Certifier to send certificates in bulk by watching
            a step-by-step tutorial.
          </Typography>
          <Chip
            label="Certifier's Professional User"
            size="small"
            color="primary"
          />
          <Typography variant="body2" mt={2}>
            October 8, 2023
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
                  Uliana Kysheniuk's certificate
                </Typography>
                <Button startIcon={<VerifiedUser />} variant="outlined">
                  Verify
                </Button>
              </Box>
              <CardMedia
                component="img"
                image="/placeholder.svg?height=400&width=600"
                alt="Course Certificate"
                sx={{
                  width: '100%',
                  borderRadius: 2,
                  background: 'linear-gradient(to right, #9c27b0, #2196f3)',
                }}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
