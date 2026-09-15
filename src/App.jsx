import GalaxyLogomark3D from "@galaxy-io/dls/icons/GalaxyLogomark3D";
import { GalaxyThemeProvider } from "@galaxy-io/dls/theme";

export default function App() {
  return (
    <GalaxyThemeProvider>
      <div
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          backgroundColor: "black",
        }}
        onClick={() => {
          window.open("https://getgalaxy.io", "_blank");
        }}
      >
        <GalaxyLogomark3D
          height={50}
          isAutoRotate
          isInteractive
          speed={2}
          color="#ffffff"
          environmentPreset="park"
          material={{
            metalness: 1,
            roughness: 0,
            clearcoat: 1,
            clearcoatRoughness: 0,
          }}
        />
      </div>
    </GalaxyThemeProvider>
  );
}
