import { configure, addParameters } from "@storybook/react"
import {themes} from "@storybook/theming"

addParameters({ options: { name:"Replicant", showPanel: false, theme: themes.dark } })

const req = require.context("../src/", true, /\.stories\.js$/)
function loadStories() {
	req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
