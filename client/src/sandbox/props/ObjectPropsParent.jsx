import React from 'react';
import ObjectPropsChild from './ObjectPropsChild';

export default function ObjectPropsParent() {
    let user = {
        userName: 'Dima',
        pass: '123456789',
    }
  return (
    <>
        <ObjectPropsChild userName={user.userName} password={user.pass} />
    </>
  )
}
