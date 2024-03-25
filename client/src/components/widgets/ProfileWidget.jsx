import {
    ManageAccountsOutlined,
    PhoneAndroidOutlined,
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
      phone,
      bio,
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
          <Box display="flex" alignItems="center" gap="1rem">
            <PhoneAndroidOutlined fontSize="large" sx={{ color: main }} />
            <Typography color={medium}>{phone}</Typography>
          </Box>
        </Box>
  
        <Divider />
        <Typography
        color="primary"
        fontWeight="bold"
        p= "10px"
        textAlign="center"
        >Bio</Typography>
          <Typography p="2px">{bio}</Typography>
  
        <Divider />
  
        {/* FOURTH ROW */}
      </WidgetWrapper>
    );
  };
  
  export default UserWidget;
  