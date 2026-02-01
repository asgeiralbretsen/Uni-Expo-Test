import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import NativeBattery from "../../../specs/NativeBattery";

export default function Index() {
  const [batteryLevel, setBatteryLevel] = useState<number | null>(null);

  useEffect(() => {
    const level = NativeBattery.getBatteryLevel();
    setBatteryLevel(level ?? null);
  }, []);

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
      <Text style={{ fontSize: 18 }}>
        Battery Level: {batteryLevel !== null ? `${batteryLevel.toFixed(0)}%` : "Loading..."}
      </Text>
    </View>
  );
}
