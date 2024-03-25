import { Typography, useTheme } from "@mui/material";
import FlexBetween from "../UI/FlexBetween";
import WidgetWrapper from "../UI/WidgetWrapper";
import React, { useState } from "react";
import {
    IconButton,
    InputBase,
  } from "@mui/material";
import { Search } from "@mui/icons-material";

const Trending = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;
  const [searchTerm, setSearchTerm] = useState("");
 const [trendingTopics, setTrendingTopics] = useState([
    "#music",
    "#sports",
    "#travel",
    "#Blessed",
    "#Thankful",
    "#art",
  ]); 
  const theme = useTheme();
  const neutralLight = theme.palette.neutral.light;
  const background = theme.palette.background.default;
  const primaryLight = theme.palette.primary.light;
  const alt = theme.palette.background.alt;
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredTopics = trendingTopics.filter((topic) =>
    topic.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <WidgetWrapper>
        <div>
      <Typography
      color="primary"
      fontSize="Clamp(0.5rem, 1.2rem, 1.2rem)"
      >Trending Topics</Typography>
        {filteredTopics.map((topic, index) => (
          <Typography  margin="5px 0px"
          sx={{
            "&:hover": {
              cursor: "pointer",
              color: theme.palette.primary.main,
            },
          }} key={index}>{topic}</Typography>
        ))}
    </div>
    </WidgetWrapper>
  );
};

export default Trending;
