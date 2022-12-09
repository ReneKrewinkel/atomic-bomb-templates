import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

/// TODO: Define props
const [NAME] = ({ testID = "", type = ""}) => {

    return(
        <div data-testid={ testID }
             data-object-type={ type ?? ""}
             className={ `[NAME]` }>
        </div>
    )

}

/// TODO: add more utility classes if needed!
/// TODO: Adjust and extend
const exceptionClasses = [
    "option-1",
    "option-2"
]

[NAME].propTypes = {
    testID: PropTypes.string,
    type: PropTypes.oneOf(exceptionClasses)
}

export default [NAME]