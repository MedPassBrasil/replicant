import React from "react"
import className from "classnames"
import * as PropTypes from "prop-types"

const Col = props => {
	const { children, size, ...rest } = props
	const colStyles = className({ col: !size }, { [`col-md-${size}`]: size })
	return (
		<div className={colStyles} {...rest}>
			{children}
		</div>
	)
}

Col.propTypes = {
	size: PropTypes.oneOf([2, 3, 4, 6, 8]),
	children: PropTypes.node
}

export default Col
