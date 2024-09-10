import "./Display.css";

const Display = ({ value }) => {
	const limiteValue = value.length > 12 ? value.slice(0, 12) + "..." : value;

	return <div className="display">{limiteValue}</div>;
};

export default Display;
