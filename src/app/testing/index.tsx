import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Index() {
  const [password, setPassword] = useState<string>();
  const [showSecret, setShowSecret] = useState<boolean>();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        margin: 16,
        gap: 8,
      }}
    >
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Testing</Text>
      <TextInput placeholder="Password..." onChangeText={(text) => setPassword(text)} testID="textInput"/>
      <TouchableOpacity onPress={() => { setShowSecret(password === "SecretPassword")}} testID="continue"><Text>Continue</Text></TouchableOpacity>
      {showSecret ? <Text testID="rett_passord">Rett passord</Text> : null}
    </View>
  );
}
