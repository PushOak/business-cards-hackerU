import React from 'react'

export default function Loops() {

    let arr = ['one', 'two', 'three'];
    let result = arr.map((value) => {
        return value + 'Hello';
    });

    console.log(result);

  return (
    <>
    <div>{arr}</div>
    </>
  )
}
