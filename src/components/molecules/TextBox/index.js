import React from "react"
import * as PropTypes from "prop-types"
import Title from "components/atoms/Title"
import Description from "components/atoms/Description"

const TextBox = props => {
	const { title, children } = props
	return (
		<>
			<Title>{title}</Title>
			<Description>{children}</Description>
		</>
	)
}
TextBox.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.node
}

export default TextBox
