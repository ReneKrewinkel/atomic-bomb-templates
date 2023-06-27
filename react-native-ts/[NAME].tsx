// import { useState, useEffect, useContext } from 'react'
import { View, Text } from 'react-native'
import { [NAME]Interface } from './[NAME].interface'
import [NAME]Style from './[NAME].style'

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
