import React from 'react';
import { Grid, Box, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const Container = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  background: 'primary',
  color: '',
  fontFamily: 'Poppins',
}));

const TokenDetails = () => {
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
    >Verse</Typography>
    </Box>
     <Grid container spacing={3}>
      <Grid item xs={12}>
        <Container>
          <Typography variant="h4" gutterBottom>
            Token Details
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Name:</strong> SIB CENTRE
            <br />
            <strong>Symbol:</strong> SIBCT
            <br />
            <strong>Deflation:</strong> No
            <br />
            <strong>Token Type:</strong> Bep20
            <br />
            <strong>Blockchain:</strong> Binance Smartchain
            <br />
            <strong>Mint Function:</strong> No
            <br />
            <strong>Project website:</strong> Sibcentre.com
            <br />
            <strong>Smart Contract:</strong> ________________
            <br />
            <strong>Decimal:</strong> 18
            <br />
            <strong>Total supply:</strong> 100,000,000
          </Typography>
        </Container>
        <Container>
          <Typography variant="h4" gutterBottom>
            SIBCT DISTRIBUTION
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>PRE-SALES:</strong> 45% (45,000,000)
            <br />
            <strong>MARKETING:</strong> 12% (12,000,000)
            <br />
            <strong>DEVELOPMENT:</strong> 11.5% (11,500,000)
            <br />
            <strong>PARTNERSHIP:</strong> 10.5% (10,500,000)
            <br />
            <strong>TEAM:</strong> 6% (6,000,000)
            <br />
            <strong>ADVISOR:</strong> 4% (4,000,000)
          </Typography>
        </Container>
      </Grid>
    </Grid>
  </>
  );
};

export default TokenDetails;