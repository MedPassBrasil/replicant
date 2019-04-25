import React from "react"

import { storiesOf } from "@storybook/react"

import Container from "./Container"
import Col from "./Col"
import Row from "./Row"
const Box = () => <div style={{ height: "100px", margin: "10px", backgroundColor: "#4EC8CC" }} />

const Example12Col = () => (
	<div>
		<Container mt={2}>
			<Row>
				<Col size={1}>
					<Box />
				</Col>
				<Col size={1}>
					<Box />
				</Col>
				<Col size={1}>
					<Box />
				</Col>
				<Col size={1}>
					<Box />
				</Col>
				<Col size={1}>
					<Box />
				</Col>
				<Col size={1}>
					<Box />
				</Col>
				<Col size={1}>
					<Box />
				</Col>
				<Col size={1}>
					<Box />
				</Col>
				<Col size={1}>
					<Box />
				</Col>
				<Col size={1}>
					<Box />
				</Col>
				<Col size={1}>
					<Box />
				</Col>
				<Col size={1}>
					<Box />
				</Col>
			</Row>
		</Container>
	</div>
)

storiesOf("Template/Layout", module).add("12 Cols", Example12Col)
