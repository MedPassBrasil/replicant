import React from "react"
import * as PropTypes from "prop-types"
import className from "classnames"

const Row = props => {
	const { children, position, mt, mb, fullWidth, align } = props
	const classes = className("row", {
		"justify-content-center": position === "center",
		"justify-content-end": position === "end",
		"justify-content-around": position === "around",
		"align-items-center": align === "center"
	})

	const styles = { marginTop: `${10 * mt}px`, marginBottom: `${15 * mb}px` }

	if (fullWidth) styles.width = "100%"

	return (
		<div className={classes} style={styles}>
			{children}
		</div>
	)
}

Row.propTypes = {
	children: PropTypes.node,
	position: PropTypes.oneOf(["center", "end", "around"]),
	mt: PropTypes.number,
	mb: PropTypes.number,
	fullWidth: PropTypes.bool,
	align: PropTypes.oneOf(["center", "end", "around"])
}

Row.defaultProps = {
	mt: 0,
	mb: 0,
	fullWidth: false
}

export default Row
