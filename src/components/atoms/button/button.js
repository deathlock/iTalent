import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
    return (
        <input type={props.type} name={props.name} value={props.value} />
    )
}

Button.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string 
}

Button.defaultProps = {
    type: "button",
    name: "name",
    value: "Button"
}

export default Button;