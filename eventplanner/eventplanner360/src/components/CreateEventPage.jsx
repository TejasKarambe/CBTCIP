import React from 'react';
import { Typography, Container, TextField, Button, Grid } from '@mui/material';

const CreateEventPage = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Create Event
      </Typography>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField fullWidth label="Event Name" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Description" variant="outlined" multiline rows={4} />
          </Grid>
          <Grid item xs={12} align="center">
            <Button variant="contained" color="primary" type="submit">
              Create
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default CreateEventPage;
