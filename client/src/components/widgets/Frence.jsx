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
    >Frence</Typography>
    </Box>
     <Grid container spacing={3}>
      <Grid item xs={12}>
        <Container>
          <Typography variant="h4" gutterBottom>
            What You Need To Know About SibFrence
          </Typography>
          <Typography variant="body1" paragraph>This feature allows multiple users to connect and join for a live broadcast message without requiring a cross-platform connection. However, you can lock out Sib France from public view by only inviting a select few users that you wish to interact with. If necessary, it can also be made public so that anyone can take part. This feature only available on our mobile app.
            </Typography>
        </Container>
      </Grid>
    </Grid>
  </>
  );
};

export default Market;