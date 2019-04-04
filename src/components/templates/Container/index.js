import React from "react"
import "./styles.scss"
import * as PropTypes from "prop-types"

const Container = props => <div className="container">{props.children}</div>

Container.propTypes = {
	children: PropTypes.node.isRequired
}

export default Container
