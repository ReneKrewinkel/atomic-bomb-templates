import { useState, useEffect } from 'react'
import { [NAME]Interface } from './[NAME].interface'

/// TODO: update interface/arguments
const [NAME] = ({testID, type, size, props }:[NAME]Interface) => {

    return(
        <div data-testid={ testID }
             data-object-type={ type ?? ""}
             className={ `[NAME] ${ size } more utility classes` }>
        </div>
    )

}

export default [NAME]
