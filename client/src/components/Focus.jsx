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
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
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
    Our</Typography><Typography 
      fontWeight="bold"
      color="secondary"
      fontSize="clamp(2rem, 3rem, 3rem)"
    >Focus</Typography>
    </Box>
    <div>
    <motion.div
      initial={{ x: -1000 }} // Initial position (off-screen to the left)
      animate={{ x: 0 }} // Final position (slide in from the left)
      transition={{ duration: 10 }} // Animation duration
    >
      <Accordion>
        <AccordionSummary
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography fontFamily="Poppins" fontSize="20px">The world is better of with unique social media and social networking Platform of free speech for free people. Your voice is as important as every other voice in the society, and no one should take that away from you, Privacy violation is a crime to humanity, Selling of users data is another great crime that the whole world needs to know. A globe where your voice is been taken away Shouldn't happen. It should be labeled as crime. your right to speak freely and hire your unique opinion and view is being squashed and taken away from you.</Typography>
        </AccordionSummary>
      </Accordion>
    </motion.div> 
    <motion.div
      initial={{ x: 1000 }} // Initial position (off-screen to the left)
      animate={{ x: 0 }} // Final position (slide in from the left)
      transition={{ duration: 10 }} // Animation duration
    > 
      <Accordion>
        <AccordionSummary
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography fontFamily="Poppins" fontSize="20px">At SibCentre we protect your freedom of speech, Your right to speak, Your opinion matters and we'll like to hear them. The mode of selling of our personal data by big tech, with censorship of our speech, stealing of content, and manipulates our unique activities for monetary gain is a crime</Typography>
        </AccordionSummary>
      </Accordion>
     </motion.div>
     <motion.div
      initial={{ x: -1000 }} // Initial position (off-screen to the left)
      animate={{ x: 0 }} // Final position (slide in from the left)
      transition={{ duration: 10 }} // Animation duration
    >
      <Accordion>
        <AccordionSummary
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography fontFamily="Poppins" fontSize="20px">SibCentre is an uncensored, self free expression, an end to end encryption messages or communication, a true definition of decentralized system, where members engaged in a meaningful conversation, and earn crypto as rewards, while building the necessary connections within and out side of their localities. SibCentre is offering maximum freedom of expression to all users irrespective of your status, country or state . This is a big benefit and a great win for decentralized or Blockchain global community like SibCentre social media platform.</Typography>
        </AccordionSummary>
      </Accordion>
    </motion.div>
    <motion.div
      initial={{ x: 1000 }} // Initial position (off-screen to the left)
      animate={{ x: 0 }} // Final position (slide in from the left)
      transition={{ duration: 10 }} // Animation duration
    >
      <Accordion>
        <AccordionSummary
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography fontFamily="Poppins" fontSize="20px">Sib Centre will empower you, to share your unique moments. As uniqueness matters to us, Observe current trending gist as well as participation, Polls creation and earning rewards, take parts in, in web games and earn real rewards, enchance your profile for credibility.</Typography>
        </AccordionSummary>
      </Accordion>
     </motion.div>
    </div>
    </>

  );
}