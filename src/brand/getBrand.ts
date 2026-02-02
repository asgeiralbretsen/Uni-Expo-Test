import Constants from "expo-constants";

export type BrandId = "unimicro" | "dnb";

export function getBrandId(): BrandId {
  return (Constants.expoConfig?.extra?.brand as BrandId) ?? "unimicro";
}

export function getBrandTheme(): { colors: { primary: string; background: string }, name: string } {
  return (Constants.expoConfig?.extra?.brandTheme as any) ?? {
    primary: "#2F80ED",
    background: "#0B1220"
  };
}
