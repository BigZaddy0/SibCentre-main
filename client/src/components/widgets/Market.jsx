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
    >Market</Typography>
    </Box>
     <Grid container spacing={3}>
      <Grid item xs={12}>
        <Container>
          <Typography variant="h4" gutterBottom>
            What You Need To Know About SibMarket
          </Typography>
          <Typography variant="body1" paragraph>
            These are specifically designed for you inside the system. You can list your products for sale on the Sib Market and charge customers using the payment method of your choice preferably SibCentre Native Token $SIBCT.</Typography> 
            <Typography variant="body1" paragraph> Not involving any third parties as we will ensure there's a secure Escrow System during the product sales. Kindly take note: we will ensure your products are displayed globally for those interested in buying to have quick access. This we do to enhance the marketing of all products listed on Sib Market.
          </Typography>
          <Box display= "flex" flexDirection= "row">
          <Typography
    fontWeight="bold"
    color="primary"
    p="0px 5px"
    fontSize="clamp(1rem, 1rem, 1rem)"
  >
    Stay</Typography><Typography 
      fontWeight="bold"
      color="secondary"
      p="0px 5px"
      fontSize="clamp(1rem, 1rem, 1rem)"
    >tune</Typography>
    <Typography
    fontWeight="bold"
    color="primary"
    p="0px 5px"
    fontSize="clamp(1rem, 1rem, 1rem)"
    sx={{
    }}
  >
    for</Typography>
    <Typography
    fontWeight="bold"
    color="secondary"
    p="0px 5px"
    fontSize="clamp(1rem, 1rem, 1rem)"
    sx={{
    }}
  >
    our</Typography>
    <Typography
    fontWeight="bold"
    color="primary"
    p="0px 5px"
    fontSize="clamp(1rem, 1rem, 1rem)"
    sx={{
    }}
  >
    update !!!</Typography>
          </Box>
        </Container>
      </Grid>
    </Grid>
  </>
  );
};

export default Market;