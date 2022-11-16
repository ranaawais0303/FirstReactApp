import { StyleSheet, View, Text, Pressable } from "react-native";
function GoalItem(props) {
  return (
    <Pressable onPress={props.onDeleteItem}>
      <View style={styles.goalItem} key={props.text.index}>
        <Text style={styles.goalText}>{props.text.item}</Text>
      </View>
    </Pressable>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
    fontWeight: "bold",
  },
});
