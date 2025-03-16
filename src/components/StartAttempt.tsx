import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);

    const [progressed, setProgressed] = useState<boolean>(false);

    const startQuiz = () => {
        setProgressed(true);
        setAttempts((previousA) => previousA - 1);
    };

    const stopQuiz = () => {
        setProgressed(false);
    };

    const mulligan = () => {
        setAttempts((previousA) => previousA + 1);
    };

    return (
        <div>
            <Button onClick={startQuiz} disabled={progressed || attempts === 0}>
                {" "}
                Start Quiz
            </Button>
            <Button onClick={stopQuiz} disabled={!progressed}>
                {" "}
                Stop Quiz
            </Button>
            <Button onClick={mulligan} disabled={progressed}>
                {" "}
                Mulligan{" "}
            </Button>
            <div> Attempts: {attempts}</div>
        </div>
    );
}
