import React from 'react'
import { render, screen } from "@testing-library/react"
import [NAME]Mock from './[NAME].mock'

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { Default[NAME] } from './[NAME].stories'

const testID = "[NAME]-" + Math.floor(Math.random()*90000) + 10000

describe("[NAME]", () => {

    it("Can render [NAME]", () => {
        render(<Default[NAME] testID={ testID } { ...[NAME]Mock } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})