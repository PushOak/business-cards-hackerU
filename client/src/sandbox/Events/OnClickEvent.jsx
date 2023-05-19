import { Button, TextField } from '@mui/material';
import React from 'react';

export default function OnClickEvent({ handleClick }) {

    // const handleClick = (text) => {
    //     console.log(text);
    // }

    const handleChange = (e) => {
        console.log(e.target.value);
    }

    return (
        <>
            <Button onClick={() => { handleClick('hi') }}>Click Me!</Button>
            <TextField id='outlined-basic' label='outlined' variant='outlined' onChange={handleChange}></TextField>
        </>
    )
}
