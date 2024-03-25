import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import focusImg from '../assets/01.png';
import focusImg1 from '../assets/share.png';
import focusImg2 from '../assets/02.png';
import focusImg3 from '../assets/03.png';
import focusImg4 from '../assets/05.jpg';
import focusImg5 from '../assets/06.jpg';
import focusImg6 from '../assets/07.jpg';
import focusImg7 from '../assets/08.jpg';
import { motion } from "framer-motion";
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { blueGrey, red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux";
import { useState } from "react";
import {
  useMediaQuery,
} from "@mui/material";




const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
        <Typography
    fontWeight="bold"
    color="primary"
    textAlign="center"
    fontSize="clamp(2rem, 3rem, 3rem)"
    sx={{
    }}
  >
    Our Unique Features</Typography>
    <Box sx={{
      display: "flex",
      flexWrap: "wrap",
      color: "white",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%"
    }}>
    <motion.div
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
    <Card sx={{ 
        margin: "2rem 0.5rem",
        maxWidth: 340 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            SB
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Some Unique Features Of SibCentre"
      />
       <img
        height="194"
        width="80%"
        alt="herImg"
        src={focusImg1}
        style={{ margin: '0rem 1.7rem' }}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Users can livestream, Like and share, audio, video, as well as reacting.
        Where ever they are across the world.
        City or town, There's audio and video quality which makes you feel Very closer to them.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>

    </Card>
  </motion.div>
  <motion.div
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 0.9 }}
    transition={{ type: "spring", stiffness: 400, damping: 17 }}
  >
    <Card sx={{ 
        margin: "2rem 0.5rem",
        maxWidth: 340 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "blue" }} aria-label="recipe">
            SB
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Some Unique Features Of SibCentre"
      />
       <img
        height="194"
        width="80%"
        alt="herImg1"
        src={focusImg}
        style={{ margin: '0rem 1.7rem' }}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Upload and Sending of photos, links, and various Emoji and stickers are all available for self-expression without any limitations, or restrictions like other social media platforms .
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  </motion.div>
  <motion.div
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 0.9 }}
    transition={{ type: "spring", stiffness: 400, damping: 17 }}
  >
    <Card sx={{ 
        margin: "2rem 0.5rem",
        maxWidth: 340 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "brown" }} aria-label="recipe">
            SB
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Some Unique Features Of SibCentre"
      />
      <img
        height="194"
        width="80%"
        alt="herImg2"
        src={focusImg2}
        style={{ margin: '0rem 1.7rem' }}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Make one-on-one voice, and video calls for free, you can also make it a group call, by adding the people you've previously Communicate with on the Communication list or via the SibCentre Channel.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  </motion.div>
  <motion.div
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 0.9 }}
    transition={{ type: "spring", stiffness: 400, damping: 17 }}
  >
    <Card sx={{ 
        margin: "2rem 0.5rem",
        maxWidth: 340 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "black" }} aria-label="recipe">
            SB
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Some Unique Features Of SibCentre"
      />
        <img
        height="194"
        width="80%"
        alt="herImg1"
        src={focusImg3}
        style={{ margin: '0rem 1.7rem' }}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Your right matters from Privacy, to Data monetization, and content modification and approved by you, you're entitled and empowered to establish your own user experience and special moment.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  </motion.div>
  <motion.div
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
    <Card sx={{ 
        margin: "2rem 0.5rem",
        maxWidth: 340 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "orange" }} aria-label="recipe">
            SB
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Some Unique Features Of SibCentre"
      />
      <img
        height="194"
        width="80%"
        alt="herImg"
        src={focusImg4}
        style={{ margin: '0rem 1.7rem' }}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Members can monetized their content and get instant payment for each activity engagement, 
        by enabling, the subscribers monetization point, for this to work, 
        A users needs a total number of 1000 ( one thousand) follower to activate this functions
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>

    </Card>
    </motion.div>
    <motion.div
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
    <Card sx={{ 
        margin: "2rem 0.5rem",
        maxWidth: 340 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "green" }} aria-label="recipe">
            SB
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Some Unique Features Of SibCentre"
      />
      <img
        height="194"
        width="80%"
        alt="herImg"
        src={focusImg5}
        style={{ margin: '0rem 1.7rem' }}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Having fun in the ecosystem brings joy and happiness, those we love and cherish, 
        should always be happy whenever they have opportunity to share their happy moment with us, 
        those moments as well can also be monetized
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
   </motion.div>
     </Box>
     <Box sx={{
      display: "flex",
      flexWrap: "wrap",
      color: "white",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%"
    }}>
   <motion.div
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    > 
    <Card sx={{ 
        margin: "2rem 0.5rem",
        maxWidth: 340 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "glod" }} aria-label="recipe">
            SB
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Some Unique Features Of SibCentre"
      />
      <img
        height="194"
        width="80%"
        alt="herImg"
        src={focusImg6}
        style={{ margin: '0rem 1.7rem' }}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        A market within the system, is uniquely designed just for you, On the Sib market, 
        you can place your items up for sales, and charge at your preference medium of payment solution. 
        No third party involvement. Note that your item will be displayed globally, for those interested to make purchases
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  </motion.div>
  <motion.div
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
    <Card sx={{ 
        margin: "2rem 0.5rem",
        maxWidth: 340 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "purple" }} aria-label="recipe">
            SB
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Some Unique Features Of SibCentre"
      />
      <img
        height="194"
        width="80%"
        alt="herImg"
        src={focusImg7}
        style={{ margin: '0rem 1.7rem' }}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        The immutability of the platform is to reflect true freedom, peace, 
        panick free, and give the voice back to the people,
         with true reflection of enduring quality of free speech and total Freedom
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  </motion.div>
     </Box>

    </>
  );
}