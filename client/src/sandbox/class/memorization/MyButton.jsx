import React, { memo } from "react";
import { Button } from "@mui/material";

export default memo(function MyButton({ handleClick, children }) {
    return <Button onClick={handleClick}>{children}</Button>;
});