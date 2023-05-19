import React from 'react';
import ChildComponent from './ChildComponent';

export default function FatherComponent() {

    let myName = 'Dima';

    return (<div>
        <ChildComponent data={myName}>Gavrisenko</ChildComponent>
    </div>
    );
}

