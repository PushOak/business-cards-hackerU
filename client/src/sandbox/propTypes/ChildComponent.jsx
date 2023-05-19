
import { string } from 'prop-types';
import React from 'react';


export default function ChildComponent({ data, children }) {
    return (
        <>
            {data} {children}
        </>
    )
}

ChildComponent.propTypes = {
    data: string,
}