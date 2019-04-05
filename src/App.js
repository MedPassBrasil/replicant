import React, { Component } from "react"
import { Container, Row, Col } from "./lib"

const Box = () => <div style={{ height: "50px", backgroundColor: "red" }} />

class App extends Component {
	render() {
		return (
			<Container mt={2}>
				<Row>
					<Col>
						<Box />
					</Col>
					<Col>
						<Box />
					</Col>
					<Col>
						<Box />
					</Col>
				</Row>
			</Container>
		)
	}
}

export default App
