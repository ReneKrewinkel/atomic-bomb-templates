import { useState, useEffect } from 'react'
import { [NAME]Interface } from './[NAME].interface'

/// TODO: update interface/arguments
const [NAME] = (props:[NAME]Interface) => {

    return(
        <div data-testid={ props.testID }
             data-object-type={ props.type ?? ""}
             className={ `[NAME] ${props.size} more utility classes` }>
        </div>
    )

}

export default [NAME]
