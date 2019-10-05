import { configure, addParameters } from "@storybook/react"
import { themes } from "@storybook/theming"

addParameters({ options: { name: "Replicant" } })

const req = require.context("../src/components", true, /\.stories\.js$/)
function loadStories() {
	req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
