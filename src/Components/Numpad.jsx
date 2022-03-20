import Button from "./Button";
const Numpad = ({ setter }) => {
    const evalX = (args, n) => {
        if (args.x.indexOf(".") !== -1 && n === ".") return `${args.x}`;
        else if (args.x === "0" || args.x === args.answer)
            return n === "." ? "0." : `${n}`;
        else return `${args.x}${n}`;
    };
    return [...Array(10).keys(), "."].map((number) => (
        <Button
            value={number + ""}
            clickHandler={() =>
                setter((args) => ({
                    ...args,
                    x: evalX(args, number),
                }))
            }
            key={number + "OfNumpad"}
        />
    ));
};
export default Numpad;
