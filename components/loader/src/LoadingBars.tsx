import { ActivityIndicator, ColorValue, StyleSheet, ViewStyle } from "react-native"
import React from 'react'

interface LoaderProps {
    animating:boolean
    size?: number | "large" | "small" | undefined
    color?: ColorValue | undefined
    loaderSyle?: ViewStyle | ViewStyle[]
}

const LoadingBar = ({animating,size,color,loaderSyle}:LoaderProps) => {
   return( <ActivityIndicator
        size={size}
        color={color}
        animating={animating}
        style={loaderSyle? loaderSyle : styles.activityIndicator} />)
}

const styles = StyleSheet.create( {
    activityIndicator: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
})

export default LoadingBar