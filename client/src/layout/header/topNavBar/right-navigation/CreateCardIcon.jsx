import React from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { NavLink } from "react-router-dom";
import ROUTES from "../../../../routes/routesModel";

export default function CreateCardIcon() {
  return (
    <NavLink to={ROUTES.CREATE_CARD}>
      <AddBoxIcon style={{ color: "lightgray" }} />
    </NavLink>
  );
};
