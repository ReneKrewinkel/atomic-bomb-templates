import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import [NAME]Src from './[NAME]'
import { [NAME]Interface  } from './[NAME].interface'
import { [NAME]Mock } from './[NAME].mock'

/// TODO: Adapt [NAME] Stories
const [NAME]Meta: Meta<typeof [NAME]Src> = {
    title: "[TYPE]/[NAME]",
    component: [NAME]Src,
    tags: ['autodocs'],
    argTypes: {
        testID: { table: { disable: true } }
    }
}

type Story = StoryObj<typeof [NAME]Src>
export const [NAME]: Story = {
    args: { ...[NAME]Mock }
}

export default [NAME]Meta
