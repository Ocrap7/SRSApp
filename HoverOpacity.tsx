import { useRef } from "react";
import { StyleSheet, Animated, View, Text, Button, Easing, Dimensions, FlatList, StyleProp, ViewStyle } from "react-native";
import { useHover } from "react-native-web-hooks";
import Hoverable from "react-native-web-hooks/build/Hoverable";

export default function HoverOpacity(props: { children: JSX.Element, style: StyleProp<ViewStyle> }) {
    const fadeAnim = useRef(new Animated.Value(0)).current
    const ref = useRef(null);
    const isHovered = useHover(ref);

    const animIn = () => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 1,
                duration: 100,
                easing: Easing.ease,
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
                easing: Easing.linear,
                useNativeDriver: true,
            }
        ).start();
    }

    return (
        <View style={{ flex: 0 }}>
            <Animated.View style={{ opacity: fadeAnim, backgroundColor: '#9999', position: 'absolute', left: 0, top: 0, width: 500, height: '100%', zIndex: 5 }} pointerEvents='none' />
            <Hoverable onHoverIn={animIn} onHoverOut={animOut}>
                {_ => props.children}
            </Hoverable>
            {/* <View onMouseEnter={animIn} onMouseLeave={animOut}> */}
            {/* </View> */}
        </View>

    );
}