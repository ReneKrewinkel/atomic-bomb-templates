// import { useState, useEffect, useContext } from 'react'
import type { [NAME]Interface } from './[NAME].interface'

/// TODO: update interface/arguments for [NAME]
const [NAME] = ({testID, style, type, size, props }:[NAME]Interface) => {

    return(
        <div data-testid={ testID }
             data-object-type={ type ?? ""}
             className={ `[NAME]` }>
        </div>
    )

}

export default [NAME]
