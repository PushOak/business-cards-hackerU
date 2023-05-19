import React from 'react';
import StringPropChild from './StringPropChild';

export default function StringPropParent() {
    let string = 'Text from Father';

    return (
        <>
            <StringPropChild data={string} />
        </>
    )
}
