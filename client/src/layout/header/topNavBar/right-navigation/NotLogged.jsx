import React from "react";
import Box from "@mui/material/Box";
import NavItem from "../../../../routes/components/NavItem";
import ROUTES from "../../../../routes/routesModel";

const NotLogged = () => {
    return (
        <Box>
            <NavItem label="Signup" to={ROUTES.SIGNUP} sx={{ color: "lightgray" }} />
            <NavItem label="Login" to={ROUTES.LOGIN} sx={{ color: "lightgray" }} />
        </Box>
    );
};

export default NotLogged;