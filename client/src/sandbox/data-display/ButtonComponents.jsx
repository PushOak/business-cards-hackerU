import React from 'react';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import SendIcon from "@mui/icons-material/Send";
import ShareIcon from "@mui/icons-material/Share"

export default function ButtonComponents() {
    return (
        <>
            <Box m={2} display="flex" justifyContent="space-between">
                <Button variant="text">Click Me</Button>
                <Button variant="contained" color='success' size='small' startIcon={<ShareIcon />}>Contained</Button>
                <Button variant="outlined">Click Me</Button>
                <Button variant="contained" disabled>Click Me</Button>
            </Box>
        </>
    );
}
