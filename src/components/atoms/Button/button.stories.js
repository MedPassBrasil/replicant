import React from "react"

import { storiesOf } from "@storybook/react"

import Button from "./index"

const containerStyle = { width: "100%", display: "flex", justifyContent: "space-around" }

const ButtonPrimary = () => (
	<div style={containerStyle}>
		<Button>Login</Button>
		<Button isLoading={true}>Login</Button>
	</div>
)

const ButtonSecondary = () => (
	<div style={containerStyle}>
		<Button variant={"secondary"}>Login</Button>
		<Button variant={"secondary"} isLoading={true}>
			Login
		</Button>
	</div>
)

const ButtonOutline = () => (
	<div style={containerStyle}>
		<Button variant={"outline"}>Login</Button>
		<Button variant={"outline"} isLoading={true}>
			Login
		</Button>
	</div>
)

storiesOf("Atoms/Button", module).add("Primary", ButtonPrimary)
storiesOf("Atoms/Button", module).add("Secondary", ButtonSecondary)
storiesOf("Atoms/Button", module).add("Outline", ButtonOutline)
