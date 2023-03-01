import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Switch,
  TextInput,
  Button,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Linking,
  Alert,
  Pressable,
} from "react-native";

export default function App() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const [text, onChangeText] = React.useState("");
  const [number, onChangeNumber] = React.useState(null);
  onPressButton = () => {
    alert("Painiketta on painettu!");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <View style={styles.container}>
            <StatusBar />
            <Text style={styles.header1} accessibilityRole="header">
              Tämä on pääotsikko
            </Text>
          </View>
          <View style={styles.paragraph} accessible={true}>
            <Text>Tässä ensimmäinen tekstielementti</Text>
            <Text>Tässä toinen tekstielementti</Text>
          </View>
          <View accessible={false}>
            <Text
              accessibilityElementsHidden={true}
              importantForAccessibility="no-hide-descendants"
            >
              Valintapainike päällä/pois päältä
            </Text>
          </View>
          <Switch
            accessibilityLabel="Tee valinta"
            accessibilityHint="Laita toiminto päälle tai pois"
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#15988A" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />

          <View
            accessible={true}
            style={styles.button}
            accessibilityRole="button"
            onStartShouldSetResponder={() =>
              alert("Kiitos, painiketta painettiin")
            }
          >
            <Text style={styles.buttonText}>Paina nappia!</Text>
          </View>
          <View accessible={true}>
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Tämä on 'pressable' elementti. Olen painettava tekstielementti"
              onPress={onPressButton}
            >
              <Text
                accessibilityElementsHidden={true}
                importantForAccessibility="no"
              >
                Tämäkin on painike!
              </Text>
            </Pressable>
          </View>
          <View>
            <Button
              onPress={onPressButton}
              title="Nappula"
              color="#841584"
              accessibilityLabel="Vahvista valinta"
              accessibility
            />
          </View>
        </View>

        <View style={styles.container3}>
          <Text style={styles.header2} accessibilityRole="header">
            Muita tietoja
          </Text>
          <View accessible={true}>
            <Text
              accessibilityElementsHidden={true}
              importantForAccessibility="no"
            >
              Nimi
            </Text>

            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
              accessibilityElementsHidden={false}
              importantForAccessibility="yes"
              accessibilityLabel="Kirjoita nimesi"
              accessibilityHint="Kirjoita koko nimesi"
              //placeholder="Kirjoita Nimi"
              autoCapitalize="words"
              //autoComplete="name"
            />
          </View>
          <View accessible={true}>
            <Text
            //accessibilityElementsHidden={true}
            //importantForAccessibility="no"
            //accessibilityLabel="Kirjoita puhelinnumerosi"
            >
              Puhelinnumero
            </Text>
            <TextInput
              //accessibilityElementsHidden={false}
              //importantForAccessibility="yes"
              style={styles.input}
              onChangeText={onChangeNumber}
              value={number}
              editable={true}
              //placeholder="0501234567"
              keyboardType="numeric"
              accessibilityLabel="Kirjoita puhelinnumerosi"
              accessibilityHint="Maakoodia ei tarvita"
              autoComplete="tel"
            />
          </View>
          <Text
            style={{ color: "blue" }}
            onPress={() => Linking.openURL("http://google.com")}
            accessibilityRole="link"
            accessibilityLabel="Google etusivu"
            accessibilityHint="Avaa linkin uuteen ikkunaan"
          >
            Google
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  container2: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 35,
  },
  container3: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  paragraph: {
    flex: 1,
    margin: 24,
    fontSize: 18,
    color: "grey",
    fontWeight: "bold",
    textAlign: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

  button: {
    justifyContent: "center",
    height: 60,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#a1ebeb",
  },
  buttonText: {
    textColor: "#0A0A0A",
    fontFamily: "sans-serif",
    fontSize: 20,
  },
  header1: {
    fontSize: 30,
    margin: 10,
  },
  header2: {
    fontSize: 20,
    margin: 10,
  },
});

/* import React from "react";
import { Switch } from "react-native";

//import all the components we are going to use
import { SafeAreaView, StyleSheet, View, Text } from "react-native";

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.paragraph} accessibilityRole="header">
          Tämä on pääotsikko
        </Text>
        <View
          style={styles.innerView}
          onStartShouldSetResponder={() => alert("View Clicked")}
        >
          <Text
            style={styles.paragraph}
            accessibilityLabel="Tässä on jotain klikattavaa"
            accessibilityRole="button"
          >
            Example of Click on a View
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 25,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  innerView: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 25,
    backgroundColor: "#bee0ec",
    marginTop: 200,
    marginBottom: 200,
    marginLeft: 20,
    marginRight: 20,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  },
});
export default App;
 */
