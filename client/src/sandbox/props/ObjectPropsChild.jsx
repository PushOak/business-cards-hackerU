import React from 'react';

export default function ObjectPropsChild({ userName, password }) {
    return (
        <>
            <div>
                <div>Object Child</div>
                <p>{userName}</p>
                <p>{password}</p>
            </div>
        </>
    )
}
