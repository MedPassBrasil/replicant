import React from "react"
import * as PropTypes from "prop-types"

const Badge = ({ status, text }) => (
	<div className={`labelStatus ${status}`}>
		<p>{text}</p>
	</div>
)

Badge.propTypes = {
	status: PropTypes.oneOf(["active", "inactive", "canceled"]).isRequired,
	text: PropTypes.string.isRequired
}

export default Badge
