import React, { useRef, useEffect, useState } from 'react';
import { StyleSheet, Animated, View, Text, Button, Easing, Dimensions } from "react-native";
import Controls from "./Controls";
import Card from "./Card";

export default function Deck(props) {
    const fadeAnim = useRef(new Animated.Value(0)).current
    const [cards, setCards] = useState([...props.cards]);

    const out = (finish) => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 1,
                duration: 1000,
                easing: Easing.linear(),
                useNativeDriver: true,
            }
        ).start(({ finished }) => {
            setCards(cards.slice(1))
            fadeAnim.setValue(0.0)
            // finish()
        });
    }

    return (
        <View
            style={
                styles.controls
            }
        >

            {/* {Dimensions.get('window').width > 600 && <View style={{position: 'fixed', backgroundColor: '#323437', height: '100%', width: '30%', right: 0, zIndex: 3}}></View>} */}
            <View style={styles.card}>
                {
                    cards.map((e, i) =>
                    (
                        <Animated.View key={e.id} style={{
                            marginRight: 200.0,
                            transform: [{
                                translateX: fadeAnim.interpolate({
                                    inputRange: [0.0, 1.0],
                                    outputRange: [0.0, -600.0]
                                })
                            }]
                        }}>
                            <Card card={e} />
                        </Animated.View>
                    )
                    )
                }
            </View>
            {/* {Dimensions.get('window').width > 600 && <View style={{position: 'fixed', backgroundColor: '#323437', height: '100%', width: '30%', left: 0, xIndex: 3}}></View>} */}

            <Controls onYes={out} />
        </View>
    );

}

const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        width: 400.0,
        // justifyContent: "centers",
        
    },
    controls: {
        overflow: 'hidden',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})