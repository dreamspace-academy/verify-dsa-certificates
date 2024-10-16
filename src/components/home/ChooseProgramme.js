import React, { useState } from 'react';
import {
  Box,
  Card,
  Typography,
  FormControl,
  Button,
  TextField,
  Autocomplete,
} from '@mui/material';
import useGoogleSheetData from '../../hooks/useGoogleSheetData';
import { csvUrl } from '../../utils/fileUrl';
import Loading from '../Loading';
import { useNavigate } from 'react-router-dom';

function ChooseProgramme() {
  const [program, setProgram] = useState(null);
  const { sheetData, loading } = useGoogleSheetData(csvUrl);
  const navigate = useNavigate();

  const handleContinue = () => {
    if (program) {
      // Navigate using the id of the selected program
      navigate(`/programme/${program.id}`);
    } else {
      console.log('No program selected');
      // You can also show a message or alert to select a program
    }
  };

  return (
    <Box textAlign="center" mt={5}>
      <Card
        sx={{
          borderRadius: '15px',
          maxWidth: { xs: '90%', md: '500px' },
          mx: 'auto',
          p: 3,
        }}
      >
        <Typography variant="h5" gutterBottom>
          Choose Program
        </Typography>

        {loading ? (
          <Loading />
        ) : (
          <FormControl fullWidth sx={{ mt: 2 }}>
            <Autocomplete
              options={sheetData}
              getOptionLabel={(option) => option.programmeName}
              value={program}
              onChange={(event, newValue) => setProgram(newValue)}
              renderInput={(params) => (
                <TextField {...params} label="Program" variant="outlined" />
              )}
            />
          </FormControl>
        )}

        <Button
          variant="contained"
          color="primary"
          onClick={handleContinue}
          sx={{ mt: 3 }}
          fullWidth
        >
          Continue
        </Button>
      </Card>
    </Box>
  );
}

export default ChooseProgramme;
