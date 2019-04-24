import React from "react"
import * as PropTypes from "prop-types"
import MenuItem from "@material-ui/core/MenuItem/index"
import { withStyles } from "@material-ui/core/styles"

const Option = ({ children, ...rest }) => <MenuItem {...rest}>{children}</MenuItem>
Option.propTypes = {
	children: PropTypes.node
}

const styles = {
	root: {
		color: "black"
	}
}
export default withStyles(styles)(Option)
