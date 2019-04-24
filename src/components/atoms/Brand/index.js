import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import styles from "./styles.module.css"

import outlineLogo from "./assets/logo-medpass-outline.png"
import defaultLogo from "./assets/logo-medpass.svg"

const Brand = props => {
	const { variant, clickable = false } = props

	const logo = variant === "outline" ? outlineLogo : defaultLogo

	return clickable ? (
		<Link to="/company">
			<img src={logo} alt={"Medpass"} className={styles.root} />
		</Link>
	) : (
		<img src={logo} alt={"Medpass"} className={styles.root} />
	)
}

Brand.propTypes = {
	variant: PropTypes.oneOf(["default", "outline"]),
	clickable: PropTypes.bool
}

Brand.defaultProps = {
	variant: "default"
}

export default Brand
