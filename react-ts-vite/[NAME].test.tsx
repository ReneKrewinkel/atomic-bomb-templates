import {describe, it, expect} from 'vitest';
import { render, screen } from '@testing-library/react'
// import { [NAME]Interface } from './[NAME].interface'
import [NAME] from './[NAME]'
import { [NAME]Mock } from './[NAME].mock'

/// TODO: fix test based upon interface
const testID = "[NAME]-" + Math.floor(Math.random()*90000) + 10000

describe("[NAME]", () => {

    it("Can render [NAME]", () => {
        render(<[NAME] testID={ testID } { ...[NAME]Mock } />)
        const defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})