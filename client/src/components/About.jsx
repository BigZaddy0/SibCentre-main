import { useTheme, useMediaQuery } from "@mui/material";
import BgNav from "./BgNav";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Footer from "./Footer";
import Face6Icon from '@mui/icons-material/Face6';
import PeopleIcon from '@mui/icons-material/People';
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EmailIcon from '@mui/icons-material/Email';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import PinDropIcon from '@mui/icons-material/PinDrop';


const About = () => {
  return (<>
      <BgNav />
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
    About</Typography><Typography 
      fontWeight="bold"
      color="secondary"
      fontSize="clamp(2rem, 3rem, 3rem)"
    >SibCenter</Typography>
    </Box>
    <Typography
    margin="1rem"
    fontFamily="Poppins"
    fontWeight="regular"
    fontSize="20px"
    >SIBCENTRE - Is a private messaging platform, it is the first of it's kind, a revolutionary social media platform, designed and empowered on Metaverse ecosystem to connect global cryptocurrency audience, as well as non crypto oriented persons. With unique features of instantaneous communication anywhere in the world. Messages are end to end encrypt, and are completely secure. Messages, Calls and files sent are all safe and secured, without any third party involvement. The only thing required for SibCentre is your registration details, which include;
 </Typography>
    <Grid display="flex"
      flexDirection="column"
      margin="1rem">
      <Grid
      display="flex"
      flexDirection="row"
      margin="0.5rem 0.5rem"
      >
        <Face6Icon color="primary" />
        <Typography margin="0rem 0.5rem">First name</Typography>
      </Grid>
      <Grid
        display="flex"
        flexDirection="row"
        margin="0.5rem 0.5rem"
      >
        <PeopleIcon color="primary" />
        <Typography margin="0rem 0.5rem">Last Name</Typography>
      </Grid>
      <Grid
        display="flex"
        flexDirection="row"
        margin="0.5rem 0.5rem"
      >
         <PersonIcon color="primary" />
        <Typography margin="0rem 0.5rem">Your username</Typography>
      </Grid>
      <Grid
        display="flex"
        flexDirection="row"
        margin="0.5rem 0.5rem"
      >
         <CalendarMonthIcon color="primary" />
        <Typography margin="0rem 0.5rem">Date of Birth</Typography>
      </Grid>
      <Grid
        display="flex"
        flexDirection="row"
        margin="0.5rem 0.5rem"
      >
         <EmailIcon color="primary" />
        <Typography margin="0rem 0.5rem">Your Email Address</Typography>
      </Grid>
      <Grid
        display="flex"
        flexDirection="row"
        margin="0.5rem 0.5rem"
      >
         <PhoneInTalkIcon color="primary" />
        <Typography margin="0rem 0.5rem">Phone Number</Typography>
      </Grid>
      <Grid
        display="flex"
        flexDirection="row"
        margin="0.5rem 0.5rem"
      >
        <PinDropIcon color="primary" />
        <Typography margin="0rem 0.5rem">Location</Typography>
      </Grid>
    </Grid>
    <Typography
     display="flex"
     flexDirection="row"
     justifyContent="center"
     margin="1rem"
     color="primary"
     fontFamily="Poppins"
     fontWeight="bold"
     fontSize="20px"
    >REQUIREMENTS DETAILS</Typography>
    <Typography
    margin="1rem"
    fontFamily="Poppins"
    fontWeight="regular"
    fontSize="20px"
    >
Access to your Location, This will enhance the connection of people around your locality,  community, State or Country. It mostly suggested and bring people together, who pitch their tent and based around you and closer to or around your location. Friend request is not required. a user can send a message without being your friend, it will delivered and seen instantly, without any filter, If the person, is not interested in talking or communicating with you, or having conversations with you, they can easily blacklist you and block you as well. Which means messages will never get delivered again, such user cannot contact each other again, There's absolutely no negative effects on your account. As you're free as the bird in the air. No matter what, there's no penalty attached.
 </Typography>
 <Typography
    margin="1rem"
    fontFamily="Poppins"
    fontWeight="regular"
    fontSize="20px"
    >
      The social networking Platform will be designed on a special standard frame work, where individuals prizes will be awarded. New privacy controls will be built and upgraded in every quarter, coupled with high speed of connecting you to your closest persons in your location, with maximum security and we're fully committed towards building a complete decentralized system, this we assured the community, as decentralization is our priority and primary goals of SibCentre.
 </Typography>
 <Typography
    margin="1rem"
    fontFamily="Poppins"
    fontWeight="regular"
    fontSize="20px"
    >
      You can buy or sell data in a decentralised and anonymous manner like Documents, videos, photos, NFTs and all kinds of data, can be sold on the SibCentre social media platform, as you're completely in control of whatever you post or uploaded on SibCentre. The platform is committed towards eleminating the culture of censorship, and present a great project for standard communication. Users operates in a ream of total or complete freedom, and can freely express themselves, dialogue any form of communication on SibCentre social media platform, and make money online by creating useful contents as well.
 </Typography>
 <Typography
    margin="1rem"
    fontFamily="Poppins"
    fontWeight="regular"
    fontSize="20px"
    >There will be a unique SibCentre Channel for free communication between users. On this Channel user can convers and get to understand themselves and possible they can choose to communicate privately if needed. SibCentre will operate as a full community-driven project. There's an option to follow, And followed back users in order to build your own ecosystem network, with live feeds from those who are in your circle of influence.
 </Typography>
      <Footer />
  </>
  );
};

export default About;