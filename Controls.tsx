import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export interface ControlsProps {
    onNo?: () => void;
    onBad?: () => void;
    onYes?: () => void;
}

export default function Controls(props: ControlsProps) {
    return (
        <View style={styles.controls}>
            <TouchableOpacity onPress={props.onNo} style={{ ...styles.buttonBackground, backgroundColor: "#FA373B" }}>
                <Text style={styles.button} selectable={false}>{"NO"}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={props.onBad} style={{ ...styles.buttonBackground, backgroundColor: "#e2b714" }}>
                <Text style={styles.button} selectable={false}>{"BAD"}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={props.onYes} style={{ ...styles.buttonBackground, backgroundColor: "#20CB14" }}>
                <Text style={styles.button} selectable={false}>{"YES"}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        cursor: 'pointer',
        zIndex: 6,
    },
    buttonBackground: {
        cursor: 'pointer',
        width: 100,
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 6,
    },
    controls: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: 400,
        padding: 30.0,
        zIndex: 6,
    }
})