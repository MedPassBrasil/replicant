import React from "react"
import className from "classnames"
import * as PropTypes from "prop-types"

const Col = props => {
	const { children, size, md, ...rest } = props
	const colStyles = className({ col: !size }, { [`col-md-${size}`]: size, "col-md": md })
	return (
		<div className={colStyles} {...rest}>
			{children}
		</div>
	)
}

Col.propTypes = {
	size: PropTypes.oneOf([1, 2, 3, 4, 6, 8, 10, 12]),
	children: PropTypes.node,
	md: PropTypes.bool
}

export default Col
