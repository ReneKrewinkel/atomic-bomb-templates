// import React from 'react'
import { type Meta, type StoryObj } from '@storybook/react'
import [NAME]Src from './[NAME]'
// import type { [NAME]Interface } from './[NAME].interface'
import { [NAME]Mock } from './[NAME].mock'

/// TODO: Adapt Stories for [NAME]
const [NAME]Meta: Meta<typeof [NAME]Src> = {
    title: "[TYPE]/[NAME]",
    component: [NAME]Src,
    argTypes: {
        testID: { table: { disable: true } }
    }
}

type Story = StoryObj<typeof [NAME]Src>
export const [NAME]: Story = {
    args: { ...[NAME]Mock }
}

export default [NAME]Meta
