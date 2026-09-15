import Avatar from "@galaxy-io/dls/avatar/Avatar";
import Button, {
  ButtonSize,
  ButtonVariant,
} from "@galaxy-io/dls/buttons/Button";
import GalaxyWordmark from "@galaxy-io/dls/icons/GalaxyWordmark";
import GalaxyLogomark3D from "@galaxy-io/dls/icons/GalaxyLogomark3D";
import {
  GalaxyTheme,
  GalaxyThemeProvider,
  useGalaxyTheme,
} from "@galaxy-io/dls/theme";
import {
  GithubLogoIcon,
  LinkedinLogoIcon,
  MoonIcon,
  SunIcon,
  TwitterLogoIcon,
} from "@phosphor-icons/react";

const LOGO_LINK = "https://getgalaxy.io";

const SOCIALS = [
  {
    label: "LinkedIn",
    icon: LinkedinLogoIcon,
    href: "https://linkedin.com/in/mitchbregs",
  },
  {
    label: "GitHub",
    icon: GithubLogoIcon,
    href: "https://github.com/mitchbregs",
  },
  {
    label: "Twitter",
    icon: TwitterLogoIcon,
    href: "https://twitter.com/mitchbregs",
  },
];

function Home() {
  const { theme, activeTheme, setTheme } = useGalaxyTheme();
  const isDark = activeTheme === GalaxyTheme.DARK;
  return (
    <div
      style={{
        position: "relative",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.color.background.base,
      }}
    >
      <div style={{ position: "absolute", top: 16, left: 16 }}>
        <Avatar
          img="https://mitchbregs.com/files/avatar.png"
          size={24}
          seed="mitchbregs"
        />
      </div>
      <div style={{ position: "absolute", top: 16, right: 16 }}>
        <Button
          icon={isDark ? SunIcon : MoonIcon}
          variant={ButtonVariant.TERTIARY}
          size={ButtonSize.SMALL}
          isIconFilled
          onClick={() => {
            setTheme(isDark ? GalaxyTheme.LIGHT : GalaxyTheme.DARK);
          }}
        />
      </div>
      <div style={{ position: "relative", width: 50, height: 50 }}>
        <GalaxyLogomark3D
          height={50}
          isAutoRotate
          speed={2}
          color={theme.color.background.baseAlt}
          material={{
            clearcoatRoughness: 1,
          }}
        />
        <a
          href={LOGO_LINK}
          aria-label="Mitch Bregman"
          style={{
            position: "absolute",
            left: "11%",
            top: "11%",
            width: "78%",
            height: "78%",
            borderRadius: "50%",
            cursor: "pointer",
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 16,
          left: 16,
          display: "flex",
          gap: 8,
        }}
      >
        {SOCIALS.map(({ label, icon, href }) => (
          <Button
            key={label}
            icon={icon}
            ariaLabel={label}
            variant={ButtonVariant.SECONDARY}
            size={ButtonSize.SMALL}
            isIconFilled
            onClick={() => {
              window.open(href, "_blank");
            }}
          />
        ))}
      </div>
      <a
        href={LOGO_LINK}
        target="_blank"
        rel="noopener"
        aria-label="Galaxy"
        style={{
          position: "absolute",
          bottom: 16,
          right: 16,
          display: "flex",
          cursor: "pointer",
        }}
      >
        <GalaxyWordmark height={16} />
      </a>
    </div>
  );
}

export default function App() {
  return (
    <GalaxyThemeProvider
      initialTheme={GalaxyTheme.DARK}
      storage={{
        get: (key) => localStorage.getItem(key),
        set: (key, value) => localStorage.setItem(key, value),
      }}
    >
      <Home />
    </GalaxyThemeProvider>
  );
}
