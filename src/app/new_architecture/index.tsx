import { Text, View } from "react-native";

export default function Index() {

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        margin: 16,
        gap: 8,
      }}
    >
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>New Architecture</Text>
    </View>
  );
}
