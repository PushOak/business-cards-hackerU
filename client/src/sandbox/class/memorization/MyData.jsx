import { Button, Typography } from '@mui/material';
import React, { useMemo, useState } from 'react';
import MySpecificData from './MySpecificData';

export default function MyData() {
    const [counter, setCounter] = useState(0);


    const memoObj = useMemo(() => {
        return {
            text: 'HELLO',
        }
    }, []);

    return (
        <>
            <MySpecificData text='hello' data={memoObj} />
            <MySpecificData text='bye bye' />
            <Button onClick={() => setCounter(prev => prev + 1)}>+</Button>
            <Button onClick={() => setCounter(prev => prev - 1)}>-</Button>
            <Typography>
                {counter}
            </Typography>
        </>
    )
}
