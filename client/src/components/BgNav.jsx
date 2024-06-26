import { useState } from "react";
import {
  Box,
  IconButton,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Search,
  Message,
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
      backgroundColor={alt}
      position="sticky"
      top="0"
      left="0"
      zIndex="99"
    >
      <FlexBetween gap="1.75rem">
        <Typography
          fontWeight="bold"
          fontSize="clamp(1rem, 2rem, 2.25rem)"
          color="primary"
          onClick={() => navigate("/home")}
          sx={{
            "&:hover": {
              color: primaryLight,
              cursor: "pointer",
            },
          }}
        >
          SibCentre
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
      {isNonMobileScreens ? (
        <FlexBetween gap="2rem">
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "dark" ? (
              <DarkMode sx={{ fontSize: "25px" }} />
            ) : (
              <LightMode sx={{ color: dark, fontSize: "25px" }} />
            )}
          </IconButton>
          <Typography
           onClick={() => navigate("/About")}
           sx={{
            "&:hover": {
              color: primaryLight,
              cursor: "pointer",
            },
          }}>About Us</Typography>
                  <Typography
           onClick={() => navigate("/Home/SibVerse")}
           sx={{
            "&:hover": {
              color: primaryLight,
              cursor: "pointer",
            },
          }}>SibVerse</Typography>
                          <Typography
           onClick={() => navigate("/loginpage")}
           sx={{
            "&:hover": {
              color: primaryLight,
              cursor: "pointer",
            },
          }}>Login/Sign Up</Typography>

        </FlexBetween>
      ) : (
        <IconButton
          onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
        >
          <Menu />
        </IconButton>
      )}

      {/* MOBILE NAV */}
      {!isNonMobileScreens && isMobileMenuToggled && (
        <Box
          position="fixed"
          right="0"
          bottom="0"
          height="100%"
          zIndex="10"
          maxWidth="500px"
          minWidth="300px"
          backgroundColor={background}
        >
          {/* CLOSE ICON */}
          <Box display="flex" justifyContent="flex-end" p="1rem">
            <IconButton
              onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
            >
              <Close />
            </IconButton>
          </Box>

          {/* MENU ITEMS */}
          <FlexBetween
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="3rem"
          >
            <IconButton
              onClick={() => dispatch(setMode())}
              sx={{ fontSize: "25px" }}
            >
              {theme.palette.mode === "dark" ? (
                <DarkMode sx={{ fontSize: "25px" }} />
              ) : (
                <LightMode sx={{ color: dark, fontSize: "25px" }} />
              )}
            </IconButton>
            <Typography
           onClick={() => navigate("/home")}
           sx={{
            "&:hover": {
              color: primaryLight,
              cursor: "pointer",
            },
          }}>About Us</Typography>
                  <Typography
           onClick={() => navigate("/home")}
           sx={{
            "&:hover": {
              color: primaryLight,
              cursor: "pointer",
            },
          }}>Contact Us</Typography>
                          <Typography
           onClick={() => navigate("/LoginPage")}
           sx={{
            "&:hover": {
              color: primaryLight,
              cursor: "pointer",
            },
          }}>Login/Sign Up</Typography>
          </FlexBetween>
        </Box>
      )}
    </FlexBetween>
  );
};

export default NavBar;
