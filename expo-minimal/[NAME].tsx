// import { useState, useEffect, useContext } from 'react'
import { View, Text } from 'react-native'
import { [NAME]Interface } from './[NAME].interface'
import [NAME]Style from './[NAME].style'


const [NAME] = ({testID }:[NAME]Interface) => {

    return(
        <View testID={ testID }
              style={ [NAME]Style.View }>
        </View>
    )

}

export default [NAME]
