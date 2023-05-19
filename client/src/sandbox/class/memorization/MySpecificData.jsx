import { Typography } from '@mui/material'
import React, { memo } from 'react'

export default memo(function MySpecificData({ text, data }) {
    console.log('component ' + text);
    let result = text
    if(data) {
        result = data.text;
    }
    return (
        <>
            <Typography variant='body1' color='initial'>
                {result}
            </Typography>
        </>
    )
});
