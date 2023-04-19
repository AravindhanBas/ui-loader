import React from "react";
import { TouchableHighlight, View, Text, ViewStyle, StyleSheet } from "react-native";

interface ButtonProps {
    onPress: () => void,
    label?: string | null,
    touchableStyles?: ViewStyle | ViewStyle[]| null
    viewStyles?: ViewStyle | ViewStyle[] | null,
}

const CustomButton = ({ onPress, label, touchableStyles, viewStyles }: ButtonProps) => {
    return <TouchableHighlight
        style={[touchableStyles? touchableStyles: styles.touchView]}
        onPress={onPress}
    >
        <View style={[viewStyles? viewStyles: styles.button]}>
            <Text>{label}</Text>
        </View>
    </TouchableHighlight>
}

const styles = StyleSheet.create({
    touchView: {
        backgroundColor: 'pink',
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        margin:10
    },
    button: {
        alignItems: 'center',
        padding:10
    },
})

export default CustomButton