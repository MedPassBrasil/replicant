import React from "react"
import PropTypes from "prop-types"

const Breadcrumb = ({ content }) => (
	<div className="breadcrumb">
		<p>{content}</p>
	</div>
)

Breadcrumb.propTypes = {
	content: PropTypes.string.isRequired
}

export default Breadcrumb
