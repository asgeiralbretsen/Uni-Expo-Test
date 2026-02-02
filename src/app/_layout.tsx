import { Stack } from "expo-router";
import { BrandProvider } from "../brand/BrandProvider";

export default function RootLayout() {
  
  return (
  <BrandProvider>
    <Stack />
  </BrandProvider>
  );
}
