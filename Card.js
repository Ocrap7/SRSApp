import { StyleSheet, View, Text } from "react-native";


export default function Card(props) {
    return (
        <View style={styles.card}>
            <Text style={styles.front}>{props.card.front}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    front: {
        color: "#d1d0c5",
        fontSize: 28.0
    },
    card: {
        
        height: 400.0,
        width: 400.0,
        borderRadius: 5.0,
        borderWidth: 2.0,
        borderColor: "#000",

        justifyContent: 'center',
        alignItems: 'center'
        // padding: 200.0
    }
})