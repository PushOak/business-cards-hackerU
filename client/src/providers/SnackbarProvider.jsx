import React, { createContext, useCallback, useContext, useState } from "react";
import { Alert, Snackbar } from "@mui/material";

const SnackbarContext = createContext();

export default function SnackbarProvider({ children }) {

    const [isSnackOpen, setIsSnackOpen] = useState(false);
    const [snackColor, setSnackColor] = useState("success");
    const [snackVariant, setSnackVariant] = useState("filled");
    const [snackMessage, setSnackMessage] = useState("in snackbar");

    const setSnack = useCallback((color, message, variant = "filled") => {
        setIsSnackOpen(true);
        setSnackColor(color);
        setSnackVariant(variant);
        setSnackMessage(message);
    }, []);

    return (
        <>
            <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                open={isSnackOpen}
                onClose={() => setIsSnackOpen((prev) => !prev)}
                autoHideDuration={5000}
            >
                <Alert severity={snackColor} variant={snackVariant}>{snackMessage}</Alert>
            </Snackbar>{' '}
            <SnackbarContext.Provider value={setSnack}>{children}</SnackbarContext.Provider>
        </>
    );
};

export const useSnack = () => {
    const context = useContext(SnackbarContext);
    if (!context) throw Error("useSnackbar must be used within a NameProvider");
    return context;
};

