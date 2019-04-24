import React from "react"
import * as PropTypes from "prop-types"
import className from "classnames"

const Row = props => {
	const { children, position, mt } = props
	const classes = className("row", {
		"justify-content-center": position === "center",
		"justify-content-end": position === "end",
		"justify-content-around": position === "around"
	})
	return (
		<div className={classes} style={{ marginTop: `${10 * mt}px` }}>
			{children}
		</div>
	)
}

Row.propTypes = {
	children: PropTypes.node,
	position: PropTypes.oneOf(["center", "end", "around"]),
	mt: PropTypes.number
}

Row.defaultProps = {
	mt: 0
}

export default Row
