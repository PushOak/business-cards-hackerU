import React from "react";
import { Box, IconButton } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useTheme } from "../../../../providers/ThemeProvider";
import Logged from "./Logged";
import NotLogged from "./NotLogged";
import { useUser } from "../../../../users/providers/UserProvider";
import MoreButton from "./MoreButton";
import SearchBar from "./SearchBar";
import CreateCardIcon from "./CreateCardIcon";

export default function RightNavBar() {
  const { isDark, toggleDarkMode } = useTheme();
  const { user } = useUser();

  return (
    <>
      <CreateCardIcon />
      <Box sx={{ display: { xs: "none", md: "inline-flex" } }}>
        <SearchBar />
        <IconButton sx={{ ml: 1 }} onClick={toggleDarkMode}>
          {isDark ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
        {user && <Logged />}
        {!user && <NotLogged />}
      </Box>
      <MoreButton />
    </>
  );
};
