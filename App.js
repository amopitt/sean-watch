import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import useTimer from "./useTimer";
import { formatTime } from "./utils";

export default function App() {
  const { timer, isActive, isPaused, handleStart, handlePause, handleResume, handleReset } = useTimer(0);

  useEffect(() => {
    console.log("My timer is", timer);
    if (timer > 120) {
      // play a noise
    }
  }, [timer, handleStart]);

  return (
    <View style={styles.container}>
      {console.log("paused", isPaused)}
      <Text style={styles.timer}>{formatTime(timer)}</Text>
      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={handleStart}>
            Start
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={handlePause}>
            {isPaused ? "Resume" : "Pause"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={handleReset}>
            Reset
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  timer: {
    fontSize: 50,
  },
  buttonView: {
    flexDirection: "row",
  },
  child: {},
  button: {
    backgroundColor: "#628BF8",
    display: "flex",
    margin: 5,
    justifyContent: "center",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#000",
    height: 50,
    width: 100,
  },
  buttonText: {
    color: "#FFF",
    textAlign: "center",
    width: 100,
  },
});
