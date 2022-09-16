import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  Button,
  Image,
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import CustomButton from "./components/CustomButton";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  //changeText event updates currentGoal ''
  //onPress event updates allGoals []
  const [allGoals, setAllGoals] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  () => {
    console.log(this);
  };
  const addNewGoal = (currntGoal) => {
    setAllGoals((allGoals) => [
      ...allGoals,
      { text: currntGoal, key: Math.random().toString() },
    ]);
    closeModal();
  };

  const deleteHandler = (item) => {
    setAllGoals(allGoals.filter((m) => m.key !== item.key));
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <StatusBar backgroundColor="purple" style="dark" />
      <View style={styles.container}>
        <View style={styles.goalsContainer}>
          <GoalInput
            visible={isModalVisible}
            addNewGoal={addNewGoal}
            closeModal={closeModal}
          />
          <View style={styles.tasks}>
            <FlatList
              data={allGoals}
              keyExtractor={(item) => item.key}
              renderItem={({ item }) => {
                return (
                  <GoalItem
                    text={item.text}
                    deleteHandler={() => deleteHandler(item)}
                  />
                );
              }}
            />
          </View>
        </View>
        <View style={styles.btn}></View>
        <CustomButton title="Add Goal" onPress={showModal} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
  },
  tasks: {
    paddingTop: 30,
  },
  btn: {
    backgroundColor: "purple",
  },
});
