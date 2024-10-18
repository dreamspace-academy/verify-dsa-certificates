import React from 'react';
import { Container, Typography, Box, Card } from '@mui/material';
import { styled } from '@mui/system';
import ChooseProgramme from './ChooseProgramme';

const HeroContainer = styled(Box)(({ theme }) => ({
  backgroundImage: 'url("/home-banner.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '95vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  textAlign: 'center',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
}));

const ContentWrapper = styled(Container)(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
}));

const ProgrammeCard = styled(Card)(({ theme }) => ({
  borderRadius: '15px',
  maxWidth: '500px',
  margin: '0 auto',
  padding: theme.spacing(3),
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
}));

export default function HeroSectionWithProgramme() {
  return (
    <HeroContainer>
      <ContentWrapper maxWidth="md">
        <Typography variant="h3" component="h1" gutterBottom>
          Verify Your Certificate
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom sx={{ mb: 3 }}>
          Choose your program and enter your certificate ID to verify your
          certificate.
        </Typography>

        <ProgrammeCard>
          <ChooseProgramme />
        </ProgrammeCard>

        {/* <Button
          variant="contained"
          color="secondary"
          size="large"
          sx={{ mt: 4 }}
          href="https://dreamspace.academy/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More About DreamSpace Academy
        </Button> */}
      </ContentWrapper>
    </HeroContainer>
  );
}
