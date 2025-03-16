import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [left_die, setLeftDie] = useState<number>(1);
    const [right_die, setRightDie] = useState<number>(2);

    const left_roll = () => {
        setLeftDie(d6());
    };

    const right_roll = () => {
        setRightDie(d6());
    };

    const outcome =
        left_die === right_die ? (left_die === 1 ? "lose" : "win") : "";

    return (
        <div>
            <span data-testid="left-die">{left_die}</span>
            <span data-testid="right-die">{right_die}</span>
            <Button onClick={left_roll}> Roll Left</Button>
            <Button onClick={right_roll}> Roll Right</Button>
            {outcome && <div>{outcome}</div>}
        </div>
    );
}
