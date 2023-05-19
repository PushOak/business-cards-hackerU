import React from 'react';

export default function StringPropChild({data}) {
    console.log(data);
  return (
    <>
        <h1>Hello</h1>
        <div>{data}</div>   
    </>
  )
}
