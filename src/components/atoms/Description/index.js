import React from "react"
import * as PropTypes from "prop-types"
import classes from "./index.module.scss"

const Description = props => <p className={classes.description}>{props.children}</p>

Description.propTypes = {
	children: PropTypes.node
}

export default Description
