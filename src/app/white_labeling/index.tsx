import { useBrand } from "@/src/brand/BrandProvider";
import { Text, View } from "react-native";

export default function Index() {
  const { theme, brand } = useBrand();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        margin: 16,
        gap: 8,
      }}
    >
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>White Labeling</Text>
      <Text style={{ fontSize: 18 }}>Theme name: {theme.name}</Text>
      <Text style={{ fontSize: 18, color: theme.colors.primary, backgroundColor: theme.colors.background }}>Primary Color with BG color</Text>
    </View>
  );
}
