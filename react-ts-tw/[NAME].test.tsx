import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { [NAME]Interface  } from './[NAME].interface'
import [NAME] from './[NAME]'
import { [NAME]Mocks } from './[NAME].mocks'

/// TODO: fix test based upon interface
const testID = "[NAME]-" + Math.floor(Math.random()*90000) + 10000

describe("[NAME]", () => {

    it("Can render [NAME]", () => {
        render(<[NAME] testID={ testID } { ...[NAME]Mocks } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})