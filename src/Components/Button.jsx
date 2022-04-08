import { useEffect } from "react";

const Button = ({ value, clickHandler }) => {
    useEffect(() => {
        const keyHandler = (e) => {
            e.preventDefault(); // "/" key will mess up with focus, so we have to disable its functionality first
            if (e.key === `${value}`.charAt(0)) clickHandler();
        };
        window.addEventListener("keypress", keyHandler);
        return () => window.removeEventListener("keypress", keyHandler);
    });
    return (
        <button type="button" onClick={clickHandler}>
            {value}
        </button>
    );
};
export default Button;
