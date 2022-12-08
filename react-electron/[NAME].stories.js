import React from 'react'
import [NAME]Src from './[NAME]'

const [NAME]Meta = {
    title: "[TYPE]/[NAME]",
    component: [NAME]Src,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "[NAME]-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <[NAME]Src {...args} />

export const [NAME] = Template.bind({})
[NAME].args = {
    testID: testID,
    size: "medium",
    type: "regular"
}

export default [NAME]Meta