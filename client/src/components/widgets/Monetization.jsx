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
    ><Typography 
      fontWeight="bold"
      color="secondary"
      fontSize="clamp(2rem, 3rem, 3rem)"
    >Monetization</Typography>
    </Box>
     <Grid container spacing={3}>
      <Grid item xs={12}>
        <Container>
          <Typography variant="h4" gutterBottom>
            What You Need To Know About Monetization
          </Typography>
          <Typography variant="body1" paragraph>Our Member can monetized their content and get instant payment for each activity engagement, by enabling, the subscribers monetization point, for this to work, A users needs a total number of 1000 ( one thousand) follower to activate this functions
            </Typography>
        </Container>
      </Grid>
    </Grid>
  </>
  );
};

export default Market;