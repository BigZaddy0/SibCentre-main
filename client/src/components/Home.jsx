import { useTheme, useMediaQuery } from "@mui/material";
import BgNav from "./BgNav";
import Hero from  "./Hero";
import Focus from "./Focus";
import Features from "./Features";
import Footer from "./Footer";
import SibVerse from "./SibVerse";
import MainCoin from "./MainCoin";
import News from "./widgets/News";


const Mike = () => {
  return (<>
      <BgNav />
      <Hero />
      <Features />
      <MainCoin />
      <SibVerse />
      <Footer />
  </>
  );
};

export default Mike;