import React from "react"
import ReactDOM from "react-dom"
import Button from "./index"

describe("Button", () => {
	describe("Primary", () => {
		const div = document.createElement("div")
		ReactDOM.render(<Button>ClickMe</Button>, div)
		ReactDOM.unmountComponentAtNode(div)
	})

	describe("Secondary", () => {
		const div = document.createElement("div")
		ReactDOM.render(<Button variant={"secondary"}>ClickMe</Button>, div)
		ReactDOM.unmountComponentAtNode(div)
	})

	describe("Outline", () => {
		const div = document.createElement("div")
		ReactDOM.render(<Button variant={"outline"}>ClickMe</Button>, div)
		ReactDOM.unmountComponentAtNode(div)
	})
})
