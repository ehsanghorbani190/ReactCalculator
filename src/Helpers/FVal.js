const FVal = (x, op, y) => {
    if (op === "=") return y.toString();
    return Function(`return ${x}${op}${y}`)().toString();
};
export default FVal;
