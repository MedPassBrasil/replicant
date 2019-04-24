import React from "react"
import * as PropTypes from "prop-types"
import MListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Paper from "@material-ui/core/Paper"
import classesStyles from "./index.module.scss"
import { withStyles } from "@material-ui/core/styles"
import classNames from "classnames"

const ListItem = ({ children, title, selected, classes, ...rest }) => {
	const selectedStyles = classNames({ [classes.selected]: selected })
	return (
		<Paper {...rest} elevation={selected ? 5 : 2} className={selectedStyles}>
			<MListItem selected={selected} classes={classes}>
				<ListItemText primary={title} secondary={children} className={classesStyles["list-item"]} />
			</MListItem>
		</Paper>
	)
}

ListItem.propTypes = {
	children: PropTypes.node,
	classes: PropTypes.object,
	title: PropTypes.string,
	selected: PropTypes.bool
}

ListItem.defaultProps = {
	selected: false
}

const styles = theme => ({
	selected: {
		backgroundColor: theme.palette.primary.main,
		color: "white"
	}
})

export default withStyles(styles)(ListItem)
