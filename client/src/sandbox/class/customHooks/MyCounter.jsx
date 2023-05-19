import { Button, Typography } from '@mui/material';
import React from 'react';
import useCounter from './useCounter';

export default function MyCounter() {
    const { counter, increment, decrement, reset } = useCounter(69, 5);
  return (
    <>
        <Button onClick={increment}>+</Button>
        <Button onClick={decrement}>-</Button>
        <Button onClick={reset}>Reset</Button>
        <Typography>{counter}</Typography>
    </>
  )
}
