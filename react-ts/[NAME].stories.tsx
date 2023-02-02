import React from 'react'
import { Story, ComponentMeta } from '@storybook/react'
import [NAME] from './[NAME]'
import { [NAME]Interface  } from './[NAME].interface'

const [NAME]Meta: ComponentMeta<typeof [NAME]> = {
    title: "[TYPE]/[NAME]",
    component: [NAME],
    argTypes: {
        testID: { table: { disable: true } }
    }
}

const testID = "${$NAME}-" + Math.floor(Math.random() * 90000) + 10000

const Template: Story<[NAME]Interface> = (args) => <[NAME] {...args} />

export const Default[NAME] = Template.bind({})
Default[NAME].args = {
    testID: testID,
    props: [],
    style: {}
}

export default [NAME]Meta