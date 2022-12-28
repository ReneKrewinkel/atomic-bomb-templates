import React from 'react'
import [NAME] from './[NAME]'

const [NAME]Meta = {
    title: "atoms/[NAME]",
    component: [NAME],
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"},
        text: { name: "Text" }
    }
}

const testID = "[NAME]-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <[NAME] {...args} />

export const DefaultThing = Template.bind({})
DefaultThing.args = {
    testID: testID,
    text: "Create a story",
    size: "medium",
    type: "regular"
}

export default ThingMeta