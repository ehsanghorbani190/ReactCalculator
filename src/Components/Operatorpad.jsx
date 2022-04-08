import FVal from "@/Helpers/FVal";
import Button from "./Button";

const Operatorpad = ({ setter }) => {
    return ["+", "-", "*", "/", "**", "="].map((op) => (
        <Button
            value={op === "**" ? "^" : op}
            clickHandler={() =>
                setter((args) => {
                    let newAnswer =
                        args.answer === ""
                            ? args.x
                            : FVal(args.answer, args.operator, args.x);
                    return {
                        operator: op,
                        answer: newAnswer,
                        x: newAnswer,
                    };
                })
            }
            key={op + "OfOperatorpad"}
        />
    ));
};
export default Operatorpad;
