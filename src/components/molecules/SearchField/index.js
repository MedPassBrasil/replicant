import React from "react"
import * as PropTypes from "prop-types"
import InputAdornment from "@material-ui/core/InputAdornment"
import IconButton from "../../atoms/Button/IconButton"
import SearchIcon from "@material-ui/icons/Search"
import FormControl from "@material-ui/core/FormControl"
import Input from "@material-ui/core/Input"
import FormHelperText from "@material-ui/core/FormHelperText"

const SearchField = props => {
	const {
		input,
		onClick,
		meta: { error, touched, invalid },
		...rest
	} = props

	const showError = touched && invalid
	return (
		<FormControl fullWidth error={showError} style={{ color: "black" }}>
			<Input
				{...input}
				{...rest}
				endAdornment={
					<InputAdornment position="end">
						<IconButton onClick={onClick} type="submit">
							<SearchIcon />
						</IconButton>
					</InputAdornment>
				}
			/>
			{showError && <FormHelperText>{error}</FormHelperText>}
		</FormControl>
	)
}

SearchField.propTypes = {
	label: PropTypes.string,
	input: PropTypes.object,
	meta: PropTypes.object,
	placeholder: PropTypes.string,
	onClick: PropTypes.func
}

export default SearchField
