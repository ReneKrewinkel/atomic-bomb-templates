import React from 'react'
import { Story, ComponentMeta } from '@storybook/react'
import [NAME]Src from './[NAME]'
import { [NAME]Interface  } from './[NAME].interface'
import { defaults } from '../../../config'
/// TODO: Adapt Stories
const [NAME]Meta: ComponentMeta<typeof [NAME]Src> = {
    title: "[TYPE]/[NAME]",
    component: [NAME],
    argTypes: {
        testID: { table: { disable: true } }
    }
}

const testID = "${$NAME}-" + Math.floor(Math.random() * 90000) + 10000

const Template: Story<[NAME]Interface> = (args) => <[NAME]Src {...args} />

export const [NAME] = Template.bind({})
[NAME].args = {
    testID: testID,
    props: [],
    style: {}
}

export default [NAME]Meta