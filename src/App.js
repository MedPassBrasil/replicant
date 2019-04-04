import React, { Component } from "react"
import Container from "./components/templates/Container"

const Box = () => <div style={{ height: "50px", backgroundColor: "red" }} />

class App extends Component {
	render() {
		return (
			<Container>
				<div className="row">
					<div className="col-md-7">
						<Box />
					</div>
				</div>
			</Container>
		)
	}
}

export default App
