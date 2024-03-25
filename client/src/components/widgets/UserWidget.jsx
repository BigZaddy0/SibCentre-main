import {
  ManageAccountsOutlined,
  EditOutlined,
  LocationOnOutlined,
  WorkOutlineOutlined,
} from "@mui/icons-material";
import {

  Grid,
  Divider,
  Button,
  TextField,
} from "@mui/material";
import UserImage from "../UI/UserImage";
import FlexBetween from "../UI/FlexBetween";
import WidgetWrapper from "../UI/WidgetWrapper";
import { useNavigate } from "react-router-dom";
import {
  Box,
  IconButton,
  InputBase,
  Typography,
  Select,
  MenuItem,
  FormControl,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import logoimg from "../../assets/logo.png";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "store";
import NotificationsIcon from '@mui/icons-material/Notifications';
import TagIcon from '@mui/icons-material/Tag';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import StarsIcon from '@mui/icons-material/Stars';
import HomeIcon from '@mui/icons-material/Home';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import ConnectedTvIcon from '@mui/icons-material/ConnectedTv';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import DeleteAccountWidget from "./DeleteAccountWidget";

function isValidTwitterUrl(twitterUrl) {
  const regex = /^https?:\/\/(www\.)?twitter\.com\/[a-zA-Z0-9_]+\/?$/;
  return regex.test(twitterUrl) || !twitterUrl.length;
}

function isValidLinkedInUrl(linkedinUrl) {
  const regex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]+\/?$/;
  return regex.test(linkedinUrl) || !linkedinUrl.length;
}

const UserWidget = (props) => {
  const [showLinkedin, setShowLinkedin] = useState(false);
  const [linkedinValue, setLinkedinValue] = useState(props.user.linkedinUrl);
  const [showTwitter, setShowTwitter] = useState(false);
  const [twitterValue, setTwitterValue] = useState(props.user.twitterUrl);
  const [clicked, setClicked] = useState(false);
  const [update, setUpdate] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const token = useSelector((state) => state.token);
  const myself = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useTheme();
  const dark = theme.palette.neutral.dark;
  const neutralLight = theme.palette.neutral.light;
  const medium = theme.palette.neutral.medium;
  const main = theme.palette.neutral.main;
  useEffect(() => {}, [props.user]);

  if (!props.user) return null;

  const {
    firstName,
    lastName,
    location,
    occupation,
    viewedProfile,
    impressions,
    friends,
  } = props.user;

  const addProfiles = async (e) => {
    e.preventDefault();
    setClicked(true);
    setLinkedinValue("");
    setTwitterValue("");

    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/users/${props.user._id}/update/socialprofile`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
  
      }
    );

    const updatedUser = await response.json();

    if (updatedUser.error) {
      setClicked(false);
      return;
    }

    if (updatedUser) {
      if (update === "linkedin") setShowLinkedin(false);
      else if (update === "twitter") setShowTwitter(false);
      setClicked(false);
      dispatch(setLogin({ user: updatedUser, token: token }));
    }
  };

  return (
    <WidgetWrapper
    position="sticky"
    >
      {/* FIRST ROW */}
      <FlexBetween
        gap="0.5rem"
        pb="1.1rem"
        onClick={() => navigate(`/profile/${props.user._id}`)}
      >
        <FlexBetween gap="1rem">
          <UserImage image={props.user.profilePhoto} />
          <Box>
            <Typography
              variant="h4"
              color={dark}
              fontWeight="500"
              sx={{
                "&:hover": {
                  color: theme.palette.primary.light,
                  cursor: "pointer",
                },
              }}
            >
              {firstName} {lastName}
            </Typography>
            <Typography color={medium}>{friends?.length} friends</Typography>
          </Box>
        </FlexBetween>
        <ManageAccountsOutlined />
      </FlexBetween>

      <Divider />

      {/* SECOND ROW */}
      <Box p="1rem 0">
        <Box display="flex" alignItems="center" gap="1rem" mb="0.5rem">
          <LocationOnOutlined fontSize="large" sx={{ color: main }} />
          <Typography color={medium}>{location}</Typography>
        </Box>
        <Box display="flex" alignItems="center" gap="1rem">
          <WorkOutlineOutlined fontSize="large" sx={{ color: main }} />
          <Typography color={medium}>{occupation}</Typography>
        </Box>
      </Box>

      <Divider />


      <Divider />

      {/* FOURTH ROW */}
      <Box p="1rem 0">
        <Typography fontSize="1rem" color={main} fontWeight="500" mb="1rem">
          More on SibCenter
        </Typography>
        <Box 
        display="flex"
        flexDirection="column" 
        color={main}
        >
                <Grid
        display="flex"
        flexDirection="row"
        flex="1 0 auto"
        sx={{
          "&:hover": {
            cursor: "pointer",
            color: theme.palette.primary.main,
          },
        }}
        >
        <HomeIcon />
          <Typography
          margin="0px 5px"
           onClick={() => navigate("/Home")}
           >Home</Typography>
        </Grid>
        <Grid
        display="flex"
        flexDirection="row"
        flex="1 0 auto"
        sx={{
          "&:hover": {
            cursor: "pointer",
            color: theme.palette.primary.main,
          },
        }}
        >
        <NotificationsIcon />
          <Typography
          margin="0px 5px"
           onClick={() => navigate("/Notification")}
           >Notification</Typography>
        </Grid>
        <Grid
          display="flex"
          flexDirection="row"
          flex="1 0 auto"
          sx={{
            "&:hover": {
              cursor: "pointer",
              color: theme.palette.primary.main,
            },
          }}
        >
        <TagIcon />
        <Typography
        margin="0px 5px"
           onClick={() => navigate("/Trending")}
           >Trending</Typography>
        </Grid>
        <Grid
        display="flex"
        flexDirection="row"
        flex="1 0 auto"
        sx={{
          "&:hover": {
            cursor: "pointer",
            color: theme.palette.primary.main,
          },
        }}
        >
        <AccountBoxIcon />
          <Typography
          margin="0px 5px"
          onClick={() => navigate(`/profile/${props.user._id}`)}
           >Profile</Typography>
        </Grid>
        <Grid
          display="flex"
          flexDirection="row"
          flex="1 0 auto"
          sx={{
            "&:hover": {
              cursor: "pointer",
              color: theme.palette.primary.main,
            },
          }}
        >
        <NewspaperIcon />
        <Typography
        margin="0px 5px"
           onClick={() => navigate("/News")}
           >News</Typography>
        </Grid>
        </Box>
        <FormControl variant="standard" value={'More'}>
            <Select  
            value= {'More'}
            sx={{
                value: "More",
                width: "150px",
                borderRadius: "0.25rem",
                p: "0.25rem 1rem",
                "& .MuiSvgIcon-root": {
                  pr: "0.25rem",
                  width: "3rem",
                }
              }}
            >
              <MenuItem placeholder="More" value="More">
                <Typography>More
                </Typography>
              </MenuItem>
              <MenuItem>
              <Grid
          display="flex"
          flexDirection="row"
          flex="1 0 auto"
          sx={{
            "&:hover": {
              cursor: "pointer",
              color: theme.palette.primary.main,
            },
          }}
        >
        <MonetizationOnIcon />
        <Typography
        margin="0px 5px"
           onClick={() => navigate("/SibMine")}
           >Sib MINE</Typography>
        </Grid>
              </MenuItem>
              <MenuItem>
              <Grid
          display="flex"
          flexDirection="row"
          flex="1 0 auto"
          sx={{
            "&:hover": {
              cursor: "pointer",
              color: theme.palette.primary.main,
            },
          }}
        >
        <ConnectedTvIcon />
        <Typography
        margin="0px 5px"
           onClick={() => navigate("/SibFrence")}
           >Sib Frence</Typography>
        </Grid>
              </MenuItem>
              <MenuItem >
              <Grid
          display="flex"
          flexDirection="row"
          flex="1 0 auto"
          sx={{
            "&:hover": {
              cursor: "pointer",
              color: theme.palette.primary.main,
            },
          }}
        >
        <StarsIcon />
        <Typography
        margin="0px 5px"
           onClick={() => navigate("/SibMarket")}
           >Sib Market</Typography>
        </Grid>
              </MenuItem>
          <MenuItem>
          <Grid
          display="flex"
          flexDirection="row"
          flex="1 0 auto"
          sx={{
            "&:hover": {
              cursor: "pointer",
              color: theme.palette.primary.main,
            },
          }}
        >
        <CurrencyExchangeIcon />
        <Typography
        margin="0px 5px"
           onClick={() => navigate("/Monetization")}
           >Monetization</Typography>
        </Grid>
          </MenuItem>    
              <MenuItem>        <Grid
          display="flex"
          flexDirection="row"
          flex="1 0 auto"
          sx={{
            "&:hover": {
              cursor: "pointer",
              color: theme.palette.primary.main,
            },
          }}
        >
        <WorkspacePremiumIcon />
        <Typography
        margin="0px 5px"
           onClick={() => navigate("/Verification")}
           >Verification</Typography>
        </Grid></MenuItem>
            </Select>
          </FormControl>
      </Box>
    </WidgetWrapper>
  );
};

export default UserWidget;
