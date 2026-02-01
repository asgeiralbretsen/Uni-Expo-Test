import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function Index() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1)
  }, [count])

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        margin: 16,
      }}
    >
      <Text style={{ fontSize: 12, fontWeight: "bold" }}>{count}</Text>
    </View>
  );
}
