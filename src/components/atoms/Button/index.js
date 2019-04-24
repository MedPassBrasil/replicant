/* eslint-disable function-paren-newline */
import React from "react"
import * as PropTypes from "prop-types"
import classes from "./index.module.scss"
import classNames from "classnames"

const Button = props => {
	const { variant } = props
	const styles = classNames("btn", classes.button, {
		primary: variant === "primary",
		secundary: variant === "secondary"
	})
	return <button className={styles} {...props} />
}

Button.propTypes = {
	variant: PropTypes.oneOf(["primary", "secondary"])
}

Button.defaultProps = {
	variant: "primary"
}

export default Button
