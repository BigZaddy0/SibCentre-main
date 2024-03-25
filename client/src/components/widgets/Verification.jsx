import React from 'react';
import { Grid, Box, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const Container = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  background: 'primary',
  color: '',
  fontFamily: 'Poppins',
}));

const Market = () => {
  return (<>
      <Box 
    display="flex"
    flexDirection="row"
    justifyContent="center"
    >
    <Typography
    fontWeight="bold"
    color="primary"
    fontSize="clamp(2rem, 3rem, 3rem)"
    sx={{
    }}
  >
    Sib</Typography><Typography 
      fontWeight="bold"
      color="secondary"
      fontSize="clamp(2rem, 3rem, 3rem)"
    >Verification</Typography>
    </Box>
     <Grid container spacing={3}>
      <Grid item xs={12}>
        <Container>
          <Typography variant="h4" gutterBottom>
            What You Need To Know About Verificaton
          </Typography>
          <Typography variant="body1" paragraph>Verify your account to get our prenuim feature. Once your meet the requirements to verify your account.
            </Typography>
        </Container>
      </Grid>
    </Grid>
  </>
  );
};

export default Market;