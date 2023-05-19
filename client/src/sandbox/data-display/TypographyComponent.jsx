import React from 'react'
import Typography from '@mui/material/Typography';
import { Divider, Box, Chip } from '@mui/material';

export default function TypographyComponent() {
    return (

        <>
            <Box display="flex">
                <Typography variant="h1" component="h1" color="initial">
                    Hello!
                </Typography>
                <Divider orientation="vertical" flexItem />
                <Typography variant="h2" component="h1" align="center" color="initial">
                    Hello All!
                </Typography>
            </Box>

            <Divider>  Text</Divider>

            <Typography
                sx={{
                    padding: 10,
                    color: "red",
                }}
                variant="body1"
                component="h1"
                fontWeight={300}
                color="secondary">
                YES
            </Typography>
            <Divider> Center</Divider>
            <Divider textAlign='right'> Right</Divider>
            <Divider textAlign='left'> Left</Divider>
            <Divider>
                <Chip label="Something" />
            </Divider>
        </>

    );
}
