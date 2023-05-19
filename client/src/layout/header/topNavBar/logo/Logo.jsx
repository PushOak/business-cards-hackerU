import React from "react";
import { Typography } from "@mui/material";
import NavBarLink from "../../../../routes/components/NavBarLink";
import ROUTES from "../../../../routes/routesModel";

export default function Logo() {
    return (
        <>
            <NavBarLink to={ROUTES.ROOT} sx={{ color: "lightgray" }}>
                <Typography
                    variant="h4"
                    sx={{
                        display: { xs: "none", md: "inline-flex" },
                        marginRight: 2,
                        fontFamily: "fantasy",
                    }}
                >
                    BCard
                </Typography>
            </NavBarLink>
        </>
    );
};