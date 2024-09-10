import "./Button.css";

const Button = ({ label, onClick }) => {
	return (
		<button className={`button ${label === "=" ? "equals" : ""} ${label === "C" ? "clear" : ""}`} onClick={onClick}>
			{label}
		</button>
	);
};

export default Button;
