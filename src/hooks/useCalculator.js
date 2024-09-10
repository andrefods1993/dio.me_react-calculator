import { useState } from "react";

const useCalculator = () => {
	const [currentValue, setCurrentValue] = useState("0");
	const [operator, setOperator] = useState(null);
	const [previousValue, setPreviousValue] = useState(null);

	const handleButtonClick = (label) => {
		if (/\d/.test(label)) {
			setCurrentValue(currentValue === "0" ? label : currentValue + label);
		} else if (label === ".") {
			if (!currentValue.includes(".")) {
				setCurrentValue(currentValue + ".");
			}
		} else if (label === "C") {
			resetCalculator();
		} else if (label === "=") {
			if (operator && previousValue !== null) {
				const newValue = calculate(previousValue, currentValue, operator);
				setCurrentValue(String(newValue));
				setPreviousValue(null);
				setOperator(null);
			}
		} else {
			if (operator && previousValue !== null) {
				const newValue = calculate(previousValue, currentValue, operator);
				setCurrentValue(String(newValue));
				setPreviousValue(newValue);
			} else {
				setPreviousValue(currentValue);
			}
			setOperator(label);
			setCurrentValue("0");
		}
	};

	const calculate = (prev, current, operator) => {
		const prevNumber = parseFloat(prev);
		const currentNumber = parseFloat(current);

		switch (operator) {
			case "+":
				return prevNumber + currentNumber;
			case "-":
				return prevNumber - currentNumber;
			case "×":
				return prevNumber * currentNumber;
			case "÷":
				return prevNumber / currentNumber;
			default:
				return currentNumber;
		}
	};

	const resetCalculator = () => {
		setCurrentValue("0");
		setOperator(null);
		setPreviousValue(null);
	};

	return {
		currentValue,
		handleButtonClick,
	};
};

export default useCalculator;
