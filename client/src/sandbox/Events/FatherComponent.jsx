import OnClickEvent from './OnClickEvent';
import React from 'react';

export default function FatherComponent() {

    function handleClick () {
        console.log('Button clicked! Father function');
    }

  return (
    <>
        Text from father
        <OnClickEvent handleClick={handleClick}/>
    </>
  )
}
