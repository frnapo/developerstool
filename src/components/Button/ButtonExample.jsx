import propTypes from "prop-types";

const ButtonExample = ({ buttonStyle }) => {
	return <button style={buttonStyle}>Click me!</button>;
};

ButtonExample.propTypes = {
	buttonStyle: propTypes.object.isRequired,
};

export default ButtonExample;
