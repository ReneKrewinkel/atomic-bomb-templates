import React from 'react'
import [NAME] from './[NAME]'
import [NAME]Mock from './[NAME].mock'

/// TODO: fix story entries
const [NAME]Meta = {
    title: "[TYPE]/[NAME]",
    component: [NAME],
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "[NAME]-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <[NAME] {...args} />

export const Default[NAME] = Template.bind({})
Default[NAME].args = {
    testID: testID,
    ...[NAME]Mock
}

export default [NAME]Meta