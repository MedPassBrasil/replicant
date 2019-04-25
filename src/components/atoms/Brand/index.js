import React from "react"
import * as PropTypes from "prop-types"
import styles from "./styles.module.css"

import outlineLogo from "./assets/logo-medpass-outline.png"
import defaultLogo from "./assets/logo-medpass.svg"

const Brand = props => {
	const { variant, component: Component } = props

	const logo = variant === "outline" ? outlineLogo : defaultLogo

	return Component ? (
		<Component>
			<img src={logo} alt={"Medpass"} className={styles.root} />
		</Component>
	) : (
		<img src={logo} alt={"Medpass"} className={styles.root} />
	)
}

Brand.propTypes = {
	variant: PropTypes.oneOf(["default", "outline"]),
	component: PropTypes.element
}

Brand.defaultProps = {
	variant: "default"
}

export default Brand
