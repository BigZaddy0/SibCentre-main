import { useState } from "react";
import {
  Box,
  IconButton,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  DarkMode,
  LightMode,
  Menu,
  Close,
} from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { setMode, setLogout } from "../store/index";
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

  const fullName = `${props.user?.firstName} ${props.user?.lastName}`;
  return (
    <FlexBetween
      padding="1rem 6%"
      display="flex"
      flexWrap="wrap"
      backgroundColor= ""
      position="relative"
      bottom="0"
      left="0"
      right="0"
    >
      <FlexBetween gap="0.5rem">
      <Typography
          fontWeight="bold"
          flex="1 0 auto"
          fontSize="clamp(0.5rem, 1rem, 1.25rem)"
          color="secondary"
          onClick={() => navigate("/home")}
        >
          ALL RIGHT RESEVER
        </Typography>
        <Typography
           flex="1 0 auto"
          fontWeight="bold"
          fontSize="clamp(0.5rem, 1rem, 1.25rem)"
          color="primary"
          onClick={() => navigate("/home")}
        >
          ©  2022 SIBCENTRE INC
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

      {/* DESKTOP NAV */}
        <FlexBetween gap="2rem">
          <Typography
           flex="1 0 auto"
           onClick={() => navigate("/About")}
           sx={{
            "&:hover": {
              color: primaryLight,
              cursor: "pointer",
            },
          }}>About Us</Typography>
          <Typography
           flex="1 0 auto"
           onClick={() => navigate("/")}
           sx={{
            "&:hover": {
              color: primaryLight,
              cursor: "pointer",
            },
          }}>Privacy policy</Typography>
                    <Typography
           flex="1 0 auto"
           onClick={() => navigate("/")}
           sx={{
            "&:hover": {
              color: primaryLight,
              cursor: "pointer",
            },
          }}>WHITE-PAPER</Typography>

        </FlexBetween>
    </FlexBetween>
  );
};

export default NavBar;
