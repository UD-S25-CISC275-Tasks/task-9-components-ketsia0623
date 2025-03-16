import React, { useState } from "react";
import { Button } from "react-bootstrap";

type holiday = "🍀" | "✝️" | "💖" | "🎄" | "🦃";
// holidays alpha: Christmas, Easter, St.Patricks Day, Thanksgiving, Valentines Day

const holiday_alphabesized: Record<holiday, holiday> = {
    "🎄": "✝️",
    "✝️": "🍀",
    "🍀": "🦃",
    "🦃": "💖",
    "💖": "🎄"
};

const holiday_yearly: Record<holiday, holiday> = {
    "💖": "🍀",
    "🍀": "✝️",
    "✝️": "🦃",
    "🦃": "🎄",
    "🎄": "💖"
};

export function CycleHoliday(): React.JSX.Element {
    const [hol, setHoliday] = useState<holiday>("✝️");

    const cycle_yearly = () => {
        setHoliday(holiday_yearly[hol]);
    };

    const cycle_alpha = () => {
        setHoliday(holiday_alphabesized[hol]);
    };

    return (
        <div>
            <div>Cycle Holiday: {hol}</div>
            <Button onClick={cycle_yearly}> Cycle Alphabetically</Button>
            <Button onClick={cycle_alpha}> Cycle Yearly</Button>
        </div>
    );
}
