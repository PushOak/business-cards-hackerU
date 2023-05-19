import React, { useEffect, useMemo, useState } from "react";
import MyButton from "./MyButton";

export default function RenderComponent() {
    console.log("The components is rendered");

    const [value, setValue] = useState(0);
    const [value2, setValue2] = useState(0);

    const doSomethingLong = useMemo(() => {
        console.log("The long function is render");
        return 5 * value2;
    }, [value2]);

    const handleClick1 = () => setValue((prev) => prev + 1);
    const handleClick2 = () => setValue2((prev) => prev + 2);

    return (
        <div>
            <h1>{value}</h1>
            <button onClick={() => setValue((prev) => prev + 1)}>+</button>

            <h1>{value2}</h1>
            <button onClick={() => setValue2((prev) => prev + 1)}>+</button>
            <p>{doSomethingLong}</p>
        </div>
    );
};