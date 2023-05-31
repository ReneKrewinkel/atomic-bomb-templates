import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import [NAME]Src from './[NAME]'
import { [NAME]Interface  } from './[NAME].interface'
import { defaults } from '../../../config'

/// TODO: Adapt Stories
const [NAME]Meta: Meta<typeof [NAME]Src> = {
    title: "[TYPE]/[NAME]",
    component: [NAME]Src,
    argTypes: {
        testID: { table: { disable: true } }
    }
}

type Story = StoryObj<typeof [NAME]Src>
export const [NAME]: Story = {
    args: {
        size: 'xs',
        type: 'default',
        /// etc
    }
}

export default [NAME]Meta