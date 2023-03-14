import React from 'react'
import { render, screen } from "@testing-library/react"
import defaults from '../../../config/defaults'

/// Preferably each story instead of actual object
///
import { [NAME] } from './[NAME].stories'

const testID = "[NAME]-" + Math.floor(Math.random()*90000) + 10000

describe("[NAME]", () => {

    it("Can render [NAME]", () => {
        render(<[NAME] testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})