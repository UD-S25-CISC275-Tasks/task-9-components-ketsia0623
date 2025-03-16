import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [see, setVisible] = useState<boolean>(false);

    return (
        <div>
            <Button
                onClick={() => {
                    setVisible(!see);
                }}
            >
                Reveal Answer
            </Button>
            {see && <div>42</div>}
        </div>
    );
}
