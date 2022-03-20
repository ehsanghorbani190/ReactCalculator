const Button = ({ value, clickHandler }) => {
    return (
        <button type="button" onClick={clickHandler}>
            {value}
        </button>
    );
};
export default Button;
