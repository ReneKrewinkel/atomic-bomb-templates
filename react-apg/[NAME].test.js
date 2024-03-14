import React from 'react'
import { render, screen } from "@testing-library/react"
import [NAME]Mock from './[NAME].mock'

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import NAME]  from './[NAME]'

const testID = "[NAME]-" + Math.floor(Math.random()*90000) + 10000

describe("[NAME]", () => {

    it("Can render [NAME]", () => {
        render(<[NAME] testID={ testID } { ...[NAME]Mock } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})