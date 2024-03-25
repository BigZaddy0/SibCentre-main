import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

const CryptoPrices = () => {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    const fetchCryptoPrices = async () => {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
          params: {
            vs_currency: 'usd',
            ids: 'bitcoin,ethereum,tether,binancecoin,solana,lido-staked-ether,xrp,usd-coin',
            // Include additional parameters for fetching logos
            include_market_cap: true,
            include_ath: true,
            include_price_change_24h: true,
            include_market_cap_change_percentage_24h: true,
            include_ath_change_percentage: true,
            include_ath_date: true,
            include_logo: true, // This parameter fetches the coin logos
          },
        });
        setCryptoData(response.data);
        console.log(response.data);
      } catch (error) {
        console.log('Error fetching crypto prices:', error);
      }
    };

    fetchCryptoPrices();
  }, []);

  return (
    <>
        <Box 
    display="flex"
    flexDirection="row"
    justifyContent="center"
    >
    <Typography
    fontWeight="bold"
    color="secondary"
    padding= "0rem 1rem"
    fontSize="clamp(2rem, 3rem, 3rem)"
    sx={{
    }}
  >
    Live</Typography><Typography 
      fontWeight="bold"
      color="primary"
      fontSize="clamp(2rem, 3rem, 3rem)"
    >Crypto Price</Typography>
    </Box>
    <Container>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Coin</TableCell>
              <TableCell>Logo</TableCell> {/* Add a column for logos */}
              <TableCell>Price (USD)</TableCell>
              <TableCell>Market Cap Percentage</TableCell>
              <TableCell>24h Change</TableCell>
              <TableCell>Change Percentage</TableCell>
              <TableCell>24h Volume</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cryptoData.map((coin) => (
              <TableRow key={coin.id}>
                <TableCell>{coin.name}</TableCell>
                <TableCell>
                  <img src={coin.image} alt={`${coin.name} Logo`} width="30" height="30" /> {/* Display the logo */}
                </TableCell>
                <TableCell>{coin.current_price}</TableCell>
                <TableCell>{coin.market_cap_change_percentage_24h}%</TableCell>
                <TableCell>{coin.price_change_percentage_24h}%</TableCell>
                <TableCell>{coin.ath_change_percentage}%</TableCell>
                <TableCell>{coin.total_volume}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
    </>
  );
};

export default CryptoPrices;
