import React from "react"
import * as PropTypes from "prop-types"
import "bootstrap/dist/css/bootstrap-grid.css"

const Container = props => {
	const { children, mt } = props
	return (
		<div className="container" style={{ marginTop: `${10 * mt}px` }}>
			{children}
		</div>
	)
}

Container.propTypes = {
	children: PropTypes.node,
	mt: PropTypes.number
}

Container.defaultProps = {
	mt: 0
}

export default Container
