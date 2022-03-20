import { useState } from "react";
import Display from "./Components/Display";
import Numpad from "./Components/Numpad";
import Operatorpad from "./Components/Operatorpad";

function App() {
    const [args, setArgs] = useState({ x: "0", operator: "", answer: "" });

    return (
        <>
            <Numpad setter={setArgs} />
            <Operatorpad setter={setArgs} />
            <Display value={args.x} />
        </>
    );
}

export default App;
