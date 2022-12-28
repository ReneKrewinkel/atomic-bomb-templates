import { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import [NAME]Style from './[NAME].style'

/// TODO: Define & Destructure props
const [NAME] = (props) => {

    return(
        <View testID={ props.testID }
              style={ [NAME]Style.View }>
            <Text>{ props.text }</Text>
        </View>
    )

}

/// TODO: add more utility classes if needed!

/// TODO: Adjust and extend!
const sizes = [
    "small",
    "medium",
    "large"
]

const exceptionClasses = [
    "button",
    "regular"
]

[NAME].propTypes = {
    testID: PropTypes.string,
    text: PropTypes.string,
    type: PropTypes.oneOf(exceptionClasses),
    size: PropTypes.oneOf(sizes),
}

export default [NAME]