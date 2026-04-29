import { describe, it, expect } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
// import { [NAME]Interface } from './[NAME].interface'
import [NAME] from './[NAME]'
import { [NAME]Mock } from './[NAME].mock'

/// TODO: fix test based upon interface for [NAME]
const testID = "[NAME]-" + Math.floor(Math.random()*90000) + 10000

describe("[NAME]", () => {

    it("Can render [NAME]", () => {
       const rendered = renderToStaticMarkup(
          <[NAME] testID={testID} {...[NAME]Mock} />
        )
        expect(rendered).toContain(`data-testid="${testID}"`)
    })

})
