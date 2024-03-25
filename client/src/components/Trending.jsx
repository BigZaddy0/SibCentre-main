import { Box, Divider, Typography, useMediaQuery } from "@mui/material";
import Navbar from "./NavBar";
import UserWidget from "./widgets/UserWidget";
import TrendingPost  from "./widgets/TrendingPost";
import SuggestedWidget from "./widgets/SuggestedWidget";
import { useState } from "react";
import AdvertWidget from "./widgets/AdvertWidget";
import Trending from "./widgets/Trending";


const HomePage = (props) => {
  const [reRender, setReRender] = useState(false);
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const [state, setState] = useState(false);

  function isPageBottom() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;
    const documentHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    );

    return scrollTop + windowHeight >= documentHeight - 30;
  }
 

  window.addEventListener("scroll", function () {
    if (isPageBottom()) {
      // Reached the bottom of the page
      setState((prev) => !prev);
      console.log("Reached the bottom of the page");
    }
  });

  return (
    <Box>
      <Navbar user={props.user} />
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          <UserWidget user={props.user} home={true} />
        </Box>
        {!isNonMobileScreens && (
          <Box flexBasis="26%">
            {/* <Box m="2rem 0" /> */}
            <SuggestedWidget
              userId={props.user._id}
              reRender={reRender}
              setReRender={setReRender}
            />
          </Box>
        )}
        <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
        <Typography
        fontSize="clamp(1rem, 2rem, 2.25rem)"
        fontWeight="bold"
        color="primary"
        >Trending Post</Typography>
          <TrendingPost />
        </Box>
        {isNonMobileScreens && (
          <Box flexBasis="26%">
            <Trending />
            <Box m="2rem 0" />
            <AdvertWidget />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default HomePage;
