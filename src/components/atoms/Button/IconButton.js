import React from "react"
import * as PropTypes from "prop-types"
import IconButton from "@material-ui/core/IconButton"

const Button = ({ children, ...rest }) => <IconButton {...rest}>{children}</IconButton>

Button.propTypes = {
	children: PropTypes.node.isRequired
}

export default Button
