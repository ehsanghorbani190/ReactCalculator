import { useState, useEffect } from "react";
import Display from "./Components/Display";
import Numpad from "./Components/Numpad";
import Operatorpad from "./Components/Operatorpad";

function App() {
    const [args, setArgs] = useState({ x: "0", operator: "", answer: "" });
    useEffect(() => {
        const BackSpaceHandler = (e) => {
            if (e.keyCode === 8 || e.keyCode === 46) {
                setArgs((previousArgs) => ({
                    ...previousArgs,
                    x:
                        previousArgs.x.length === 1
                            ? "0"
                            : previousArgs.x.slice(0, -1),
                }));
            }
        };
        window.addEventListener("keydown", BackSpaceHandler);
        return () => window.removeEventListener("keydown", BackSpaceHandler);
    });
    return (
        <>
            <Numpad setter={setArgs} />
            <Operatorpad setter={setArgs} />
            <Display value={args.x} />
        </>
    );
}

export default App;
