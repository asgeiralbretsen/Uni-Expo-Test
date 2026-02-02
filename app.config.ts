import type { ConfigContext, ExpoConfig } from "expo/config";
import fs from "node:fs";
import path from "node:path";

type BrandId = "unimicro" | "dnb";

const brand: BrandId = "unimicro"

function loadBrand(brand: BrandId) {
  const dir = path.join(__dirname, "brands", brand);
  const meta = JSON.parse(fs.readFileSync(path.join(dir, "brand.json"), "utf-8"));
  return {
    ...meta,
    icon: path.join(dir, "assets", "icon.png"),
  };
}

export default ({ config }: ConfigContext): ExpoConfig => {
  const b = loadBrand(brand);

  return {
    ...config,
    name: b.displayName,
    slug: b.slug,
    icon: b.icon,

    ios: {
      ...config.ios,
      bundleIdentifier: b.iosBundleId
    },
    android: {
      ...config.android,
      package: b.androidPackage
    },

    extra: {
      ...config.extra,
      brand: b.id,
      brandTheme: b.theme
    }
  };
};
