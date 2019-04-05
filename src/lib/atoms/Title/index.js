import React from "react"
import * as PropTypes from "prop-types"

const Title = props => <h1>{props.children}</h1>

Title.propTypes = {
	children: PropTypes.node.isRequired
}

export default Title
