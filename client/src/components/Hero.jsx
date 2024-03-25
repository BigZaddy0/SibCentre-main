import { useState } from "react";
import {
  Typography,
  useTheme,
  CardMedia,
  Button,
  useMediaQuery,
} from "@mui/material";
import {
  DarkMode,
  LightMode,
  Menu,
  Close,
} from "@mui/icons-material";
import heroImg from "../assets/hero.png";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import FlexBetween from "./UI/FlexBetween";

const NavBar = (props) => {
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  const theme = useTheme();
  const neutralLight = theme.palette.neutral.light;
  const dark = theme.palette.neutral.dark;
  const background = theme.palette.background.default;
  const primaryLight = theme.palette.primary.light;
  const alt = theme.palette.background.alt;

  return (
    <FlexBetween
      padding="0rem 6%"
      margin="2rem 0.5rem"
      position="relative"
    >
      <FlexBetween gap="1.75rem">
        <Typography
          fontWeight="bold"
          fontSize="clamp(2rem, 3rem, 3rem)"
          sx={{
          }}
        >
          Welcome To <Typography color="primary" 
          fontWeight="bold"
          fontSize="clamp(2rem, 3rem, 3rem)">SibCentre</Typography>
          <Typography>SibCentre social media platform, A Free world for all. Your one step Censorship free, private messaging and social networking Platform.</Typography>
          <Button variant="contained" size="small">
          Learn More
        </Button>
        </Typography>
        {isNonMobileScreens && (
          <FlexBetween
            borderRadius="9px"
            gap="3rem"
            padding="0.1rem 1.5rem"
          >
          </FlexBetween>
        )}
      </FlexBetween>
      <img
        width="50%"
        flex="1 0 auto"
        height="auto"
        alt="herImg"
        src={heroImg}
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
    </FlexBetween>
  );
};

export default NavBar;
