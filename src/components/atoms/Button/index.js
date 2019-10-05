import React from "react"
import * as PropTypes from "prop-types"
import styles from "./styles.module.scss"
import classNames from "classnames"

const PRIMARY = "primary"
const SECONDARY = "secondary"
const OUTLINE = "outline"

const Button = props => {
	const { variant, isLoading, ...rest } = props
	const classes = classNames(styles.button, {
		[styles.secondary]: variant === SECONDARY,
		[styles.outline]: variant === OUTLINE
	})

	return (
		<button className={classes} {...rest}>
			{!isLoading ? props.children : <div className={styles.loading} />}
		</button>
	)
}

Button.propTypes = {
	variant: PropTypes.oneOf([PRIMARY, SECONDARY, OUTLINE]),
	children: PropTypes.node.isRequired,
	isLoading: PropTypes.bool
}

Button.defaultProps = {
	variant: PRIMARY,
	isLoading: false
}

export default Button
