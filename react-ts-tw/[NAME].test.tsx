import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { [NAME]Interface  } from './[NAME].interface'
import { [NAME] } from './[NAME]'

/// TODO: Define Mock data
/// import { mockdata } from '../../../config'

/// TODO: fix test based upon interface
const testID = "[NAME]-" + Math.floor(Math.random()*90000) + 10000
const data: [NAME]Interface = {
    testID: testID
}

describe("[NAME]", () => {

    it("Can render [NAME]", () => {
        render(<[NAME] testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})