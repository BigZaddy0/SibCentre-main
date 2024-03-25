import React, { useState, useEffect } from 'react';
import { Typography, useTheme } from "@mui/material";
import FlexBetween from "../UI/FlexBetween";
import WidgetWrapper from "../UI/WidgetWrapper";
import advertImg from "../../assets/info4.jpg";
import { motion, AnimatePresence } from "framer-motion";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;
  const variants = {
    firstDiv: { opacity: 1 },
    secondDiv: { opacity: 0 }
  };

  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setToggle(!toggle);
    }, 5000);
    return () => clearInterval(timer);
  }, [toggle]);


  return (
    <WidgetWrapper>
      <AnimatePresence>
        <motion.div
          animate={toggle ? "firstDiv" : "secondDiv"}
          variants={variants}
          transition={{ duration: 1, loop: Infinity }}
        >
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src={advertImg}
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>MikaCosmetics</Typography>
        <Typography color={medium}>mikacosmetics.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Your pathway to stunning and immaculate beauty and made sure your skin
        is exfoliating skin and shining like light.
      </Typography>
        </motion.div>
      </AnimatePresence>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
