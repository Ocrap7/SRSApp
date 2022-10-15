import { useState } from "react";
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal, useRef } from "react";
import { StyleSheet, View, Text, Animated, Easing, TouchableWithoutFeedback, Image } from "react-native";
import { Hoverable } from "react-native-web-hooks";
import { Console } from "./Deck";
import If from "./If";

export interface Card {
    id: number,
    front: string,
    back: {
        title: string,
        desc?: string
        image?: string,
        audio?: string,
    }
}

const FlipDuration = 400;

export default function CardView(props: { card: Card }) {

    const fadeAnim = useRef(new Animated.Value(0)).current
    const [side, setSide] = useState(true);

    const animIn = () => {
        Animated.timing(
            fadeAnim,
            {
                toValue: side ? 1 : 0,
                duration: FlipDuration,
                easing: Easing.ease,
                useNativeDriver: true,
            }
        ).start(_ => {
            setSide(!side)
            // fadeAnim.setValue(0)
        });
    }

    return (
        <TouchableWithoutFeedback onPress={animIn} >
            <View style={styles.container}>
                <Animated.View style={{ ...styles.card, transform: [{ rotateY: fadeAnim.interpolate({ inputRange: [0, 1], outputRange: ['0deg', '180deg'] }) }] }}>
                    <Text style={styles.front}>{props.card.front}</Text>
                </Animated.View>
                <Animated.View style={{ ...styles.card, ...styles.back, transform: [{ rotateY: fadeAnim.interpolate({ inputRange: [0, 1], outputRange: ['180deg', '0deg'] }) }] }}>
                    <Text style={styles.front}>{props.card.back.title}</Text>
                    <If cond={props.card.back.desc !== undefined}><Text style={{ color: '#747679', fontSize: 20.0 }}>{props.card.back.desc}</Text></If>
                    <If cond={props.card.back.image !== undefined}><Image style={{ width: 250, aspectRatio: 1, resizeMode: 'contain' }} source={{ uri: props.card.back.image! }}></Image></If>
                </Animated.View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    front: {
        color: "#d1d0c5",
        fontSize: 28.0
    },
    container: {
        // flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    card: {
        // position: 'absolute',
        left: 0,
        top: 0,
        height: 400.0,
        width: 400.0,
        backgroundColor: '#424447',
        borderRadius: 5.0,
        borderWidth: 2.0,
        borderColor: "#000",

        justifyContent: 'center',
        alignItems: 'center',

        backfaceVisibility: 'hidden'

        // padding: 200.0
    },
    back: {
        color: "#d1d0c5",
        position: 'absolute',
        top: 0,
    }
})