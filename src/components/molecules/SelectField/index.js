import React from "react"
import * as PropTypes from "prop-types"
import Select from "@material-ui/core/Select"
import FormControl from "@material-ui/core/FormControl"
import InputLabel from "@material-ui/core/InputLabel"
import FormHelperText from "@material-ui/core/FormHelperText"

const SelectField = props => {
	const {
		input,
		input: { value },
		meta: { error, touched, invalid },
		label,
		children
	} = props

	const showError = touched && invalid

	return (
		<FormControl fullWidth error={showError} style={{ color: "black" }}>
			<InputLabel htmlFor={input.id}>{label}</InputLabel>
			<Select value={value} inputProps={{ ...input }}>
				{children}
			</Select>
			{showError && <FormHelperText>{error}</FormHelperText>}
		</FormControl>
	)
}

SelectField.propTypes = {
	children: PropTypes.node.isRequired,
	input: PropTypes.object,
	label: PropTypes.string,
	meta: PropTypes.object,
	classes: PropTypes.object
}

export default SelectField
