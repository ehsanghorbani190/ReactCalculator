const FVal = (x, op, y) => Function(`return ${x}${op}${y}`)().toString();

export default FVal;
