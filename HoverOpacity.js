import { useRef } from "react";
import { StyleSheet, Animated, View, Text, Button, Easing, Dimensions, FlatList } from "react-native";

export default function HoverOpacity(props) {
    const fadeAnim = useRef(new Animated.Value(0)).current

    const animIn = () => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 1,
                duration: 100,
                easing: Easing.in(),
                useNativeDriver: true,
            }
        ).start();
    }

    const animOut = () => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 0,
                duration: 100,
                easing: Easing.linear(),
                useNativeDriver: true,
            }
        ).start();
    }

    return (
        <View style={{flex: 0}}>
            <Animated.View style={{ opacity: fadeAnim, backgroundColor: '#9999', position: 'absolute', left: 0, top: 0, width: 500, height: '100%', zIndex: 5 }} pointerEvents='none' />
            <View onMouseEnter={animIn} onMouseLeave={animOut}>
                {props.children}
            </View>
        </View>

    );
}