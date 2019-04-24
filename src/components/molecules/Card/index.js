import React from "react"
import * as PropTypes from "prop-types"
import MCard from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import classes from "./index.module.scss"

const Card = ({ children }) => (
	<MCard>
		<CardContent className={classes.card}>{children}</CardContent>
	</MCard>
)

Card.propTypes = {
	children: PropTypes.node
}

export default Card
