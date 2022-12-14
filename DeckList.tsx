import { StyleSheet, Animated, View, Text, Button, Easing, Dimensions, FlatList, TouchableWithoutFeedback } from "react-native";
import { Deck } from "./Deck";
import HoverOpacity from "./HoverOpacity";
import TestDeck from './TestDeck.json'

export interface DeckListProps {
    onDeckSelect: (item: Deck) => void;
}

export default function DeckList(props: DeckListProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.nameText}>Available Decks</Text>
            <FlatList<Deck> data={
                TestDeck.decks
            }
                contentContainerStyle={styles.list}
                renderItem={({ item }) => {
                    return <HoverOpacity style={{ flex: 0, }}>
                        <TouchableWithoutFeedback onPress={_ => props.onDeckSelect(item)} >
                            <View style={styles.item}>
                                <Text style={styles.nameText} selectable={false}>{item.name}</Text>
                                <Text style={styles.descText}>{item.desc}</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </HoverOpacity>
                }} />
        </View>
    );
}

const styles = StyleSheet.create({
    nameText: {
        fontSize: 28.0,
        color: "#d1d0c5",
    },
    descText: {
        fontSize: 16.0,
        color: "#e2b714"
    },
    item: {
        padding: 10.0,
        borderBottomColor: '#000',
        borderBottomWidth: 1.0,
        width: 500.0,
        cursor: 'pointer',
    },
    list: {
        paddingTop: 20.0,
        flex: 1,
        // alignItems: 'center',
        // alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    container: {
        flex: 1,
        backgroundColor: '#323437',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
});

