import React from "react"
import * as PropTypes from "prop-types"
import MaterialTextField from "@material-ui/core/TextField"

const TextField = props => {
	const {
		label,
		input,
		meta: { touched, invalid, error },
		...rest
	} = props
	return (
		<MaterialTextField
			label={label}
			error={touched && invalid}
			helperText={touched && error}
			fullWidth
			{...input}
			{...rest}
		/>
	)
}

TextField.propTypes = {
	label: PropTypes.string,
	input: PropTypes.object,
	meta: PropTypes.object
}

export default TextField
