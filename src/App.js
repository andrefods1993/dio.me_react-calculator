import "./global.css";

import Display from "./components/Display/Display";
import Button from "./components/Button/Button";
import useCalculator from "./hooks/useCalculator";

const App = () => {
	const { currentValue, handleButtonClick } = useCalculator();

	const buttons = ["7", "8", "9", "÷", "4", "5", "6", "×", "1", "2", "3", "-", "0", ".", "=", "+", "C"];

	return (
		<div className="calculator">
			<Display value={currentValue} />
			<div className="buttons">
				{buttons.map((button) => (
					<Button key={button} label={button} onClick={() => handleButtonClick(button)} />
				))}
			</div>
		</div>
	);
};

export default App;
