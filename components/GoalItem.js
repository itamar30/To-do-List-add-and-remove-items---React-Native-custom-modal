import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React from "react";

export default function GoalItem({ text, deleteHandler }) {
  return (
    <View style={styles.goalsContainer}>
      <Pressable onPress={deleteHandler} android_ripple={{ color: "#BDB5D5" }}>
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalsContainer: {
    alignSelf: "center",
    width: "80%",
    marginVertical: 10,
    backgroundColor: "#D8BFD8",
    borderColor: "#520c61",
    borderWidth: 2,
    height: 50,
    borderRadius: 10,
    textAlign: "center",
  },
  goalText: {
    width: "100%",
    fontSize: 18,
    fontWeight: "bold",
    color: "#520c61",

    textAlign: "center",
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
});
