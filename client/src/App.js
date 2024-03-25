import HomePage from "components/HomePage";
import LoginPage from "components/LoginPage";
import ProfilePage from "components/ProfilePage";
import Home from "components/Home";
import About from "components/About";
import News from "components/News";
import Trending from "components/Trending";
import SibMine from "components/SibMine";
import SibMarket from "components/SibMarket";
import SibFrence from "components/SibFrence";
import Verification from "components/Verification";
import Monetization from "components/Monetization";
import Notification from "components/Notification";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import UpdateProfile from "components/UpdateProfile";
import UpdatePassword from "components/UpdatePassword";
import Chat from 'components/Chat';
import ForgotPassword from "components/ForgotPassword";
import {NextUIProvider} from "@nextui-org/react";


function App() {
  const mode = useSelector((state) => state.mode);
  const user = useSelector((state) => state.user);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useSelector((state) => state.token));
  // console.log(user);

  return (
    <div className="app">
     <NextUIProvider>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/loginpage" element={<LoginPage />} />
            <Route path="/home" element={isAuth ? <HomePage user={user} /> : <Navigate to="/" />} />
            <Route path="/profile/:userID" element={isAuth ? <ProfilePage user={user} id={user._id} /> : <Navigate to="/" />} />
            <Route path="/update/:id" element={isAuth ? <UpdateProfile user={user} /> : <Navigate to="/" />} />
            <Route path="/forgot/password" element={<ForgotPassword />} />
            <Route path="/update/:id/password" element={isAuth ? <UpdatePassword user={user} /> : <Navigate to="/" />} />
            <Route path="/chat" element={isAuth ? <Chat user={user} /> : <Navigate to="/" />} />
            <Route path="/About" element={<About />} />
            <Route path="/News" element={isAuth ? <News user={user} /> : <Navigate to="/" />} />
            <Route path="/SibMine" element={isAuth ? <SibMine user={user} /> : <Navigate to="/" />} />
            <Route path="/SibMarket" element={isAuth ? <SibMarket user={user} /> : <Navigate to="/" />} />
            <Route path="/SibFrence" element={isAuth ? <SibFrence user={user} /> : <Navigate to="/" />} />
            <Route path="/Notification" element={isAuth ? <Notification user={user} /> : <Navigate to="/" />} />
            <Route path="/Verification" element={isAuth ? <Verification user={user} /> : <Navigate to="/" />} />
            <Route path="/Monetization" element={isAuth ? <Monetization user={user} /> : <Navigate to="/" />} />
            <Route path="/Trending" element={isAuth ? <Trending user={user} /> : <Navigate to="/" />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
     </NextUIProvider>
    </div>
  );
}

export default App;