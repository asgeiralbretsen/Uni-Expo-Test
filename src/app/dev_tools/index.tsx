import { Button } from "@/src/components/ui/button";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        margin: 16,
      }}
    >
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Dev Tools</Text>
      <Button label="Runtime failure" onPress={ () => { null.toLowerCase()}}/>
      <Button label="Normal network request" onPress={ async () => { await fetch("google.com").catch() }}/>
      <Button label="Failed network request" onPress={ async () => { await fetch("https://sdfusdfjsdfjjf.no").catch()} }/>
    </View>
  );
}
