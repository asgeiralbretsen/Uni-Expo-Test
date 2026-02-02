import React, { createContext, useContext, useMemo } from "react";
import { BrandId, getBrandId, getBrandTheme } from "./getBrand";

type BrandContextValue = {
  brand: BrandId;
  theme: { colors: { primary: string; background: string }, name: string };
};

const BrandContext = createContext<BrandContextValue | null>(null);

export function BrandProvider({ children }: { children: React.ReactNode }) {
  const value = useMemo(() => {
    return { brand: getBrandId(), theme: getBrandTheme() };
  }, []);

  return <BrandContext.Provider value={value}>{children}</BrandContext.Provider>;
}

export function useBrand() {
  const ctx = useContext(BrandContext);
  if (!ctx) throw new Error("useBrand must be used within BrandProvider");
  return ctx;
}
