import { useState, useEffect } from 'react'

/// TODO: Define props for [NAME]
const [NAME] = ({ testID = "", type = ""}) => {

    return(
        <div data-testid={ testID }
             data-object-type={ type ?? ""}
             className={ `[NAME]` }>
        </div>
    )

}

export default [NAME]