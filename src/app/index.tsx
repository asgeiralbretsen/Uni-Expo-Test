import { Link, useRouter } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        margin: 16,
        gap: 8,
      }}
    >
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Greenfield Demo</Text>
      <Link href="/dev_tools" >Dev Tools</Link>
    </View>
  );
}
