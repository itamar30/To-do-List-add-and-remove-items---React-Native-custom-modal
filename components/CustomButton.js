import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

export default function CustomButton({ title, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "purple",
    alignSelf: "center",
    borderRadius: 20,
    marginTop: 20,
  },
  text: {
    fontSize: 18,
    color: "white",
    fontWeight: "700",
    textTransform: "capitalize",
  },
});
