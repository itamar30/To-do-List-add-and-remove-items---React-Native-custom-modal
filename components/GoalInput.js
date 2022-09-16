import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";
import React, { useState } from "react";

export default function GoalInput(props) {
  const [currntGoal, setCurentGoal] = useState("");

  const handleCurrentGoal = (goal) => {
    setCurentGoal(goal);
  };

  const addNewGoal = () => {
    props.addNewGoal(currntGoal);
    setCurentGoal("");
  };
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.detailsContainer}>
        <Image
          source={require("../assets/ModalImage.png")}
          style={styles.img}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Course Goals.."
          onChangeText={handleCurrentGoal}
          value={currntGoal}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.button} onPress={props.closeModal}>
            <Button title="Add Goal" onPress={addNewGoal} color="red" />
          </View>
          <View style={styles.button}>
            <Button
              title="cencel Goal"
              onPress={props.closeModal}
              color="purple"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 40,
    alignItems: "center",

    backgroundColor: "pink",
  },
  textInput: {
    width: "100%",
    borderColor: "#520c61",
    borderWidth: 2,
    height: 55,
    fontWeight: "bold",
    fontSize: 20,
    paddingLeft: 10,
    borderRadius: 20,
    marginVertical: 10,
    padding: 15,
    textAlign: "center",
    color: "#520c61",
  },
  buttonsContainer: {
    flexDirection: "row",

    justifyContent: "center",
  },
  button: {
    marginHorizontal: 10,
    marginVertical: 10,
    height: 250,
    width: 150,
  },
  img: {
    height: 100,
    width: 100,
    marginVertical: 10,
  },
});
