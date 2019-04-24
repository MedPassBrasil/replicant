import React from "react"
import * as PropTypes from "prop-types"

const Subtitle = props => <h1>{props.children}</h1>

Subtitle.propTypes = {
	children: PropTypes.node.isRequired
}

export default Subtitle
