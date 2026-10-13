import Button, {
  ButtonSize,
  ButtonVariant,
} from "@galaxy-io/dls/buttons/Button";
import GalaxyLogomark3D from "@galaxy-io/dls/brand/GalaxyLogomark3D";
import GalaxyWordmark from "@galaxy-io/dls/brand/GalaxyWordmark";
import { IconWeight } from "@galaxy-io/dls/icons/Icon";
import Text, { TextSize, TextVariant } from "@galaxy-io/dls/text/Text";
import GalaxyProvider from "@galaxy-io/dls/theme/GalaxyProvider";
import { FontFamily, GalaxyTheme } from "@galaxy-io/dls/theme/enums";
import { useGalaxyTheme } from "@galaxy-io/dls/theme/useGalaxyTheme";
import {
  CalendarBlankIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
  MoonIcon,
  SunIcon,
  TwitterLogoIcon,
} from "@phosphor-icons/react";

const LOGO_LINK = "https://getgalaxy.io";
const BOOK_TIME_LINK = "https://cal.com/mitchbregs/30min";

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
  const { activeTheme, setTheme } = useGalaxyTheme();
  const isDark = activeTheme === GalaxyTheme.DARK;
  return (
    <div
      style={{
        position: "relative",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "var(--gx-color-background-base)",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 16,
          left: 16,
          height: 24,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Text
          family={FontFamily.MONO}
          size={TextSize.BODY_MD}
          variant={TextVariant.SECONDARY}
        >
          mitchbregs
        </Text>
      </div>
      <div style={{ position: "absolute", top: 16, right: 16 }}>
        <Button
          icon={isDark ? SunIcon : MoonIcon}
          ariaLabel={isDark ? "Switch to light theme" : "Switch to dark theme"}
          variant={ButtonVariant.TERTIARY}
          size={ButtonSize.SMALL}
          iconWeight={IconWeight.FILL}
          onClick={() => {
            setTheme(isDark ? GalaxyTheme.LIGHT : GalaxyTheme.DARK);
          }}
        />
      </div>
      <div style={{ position: "relative", width: 50, height: 50 }}>
        <a
          href={LOGO_LINK}
          aria-label="Mitch Bregman"
          style={{
            cursor: "pointer",
          }}
        >
          <GalaxyLogomark3D size={50} isAutoRotate speed={2} />
        </a>
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
            iconWeight={IconWeight.FILL}
            onClick={() => {
              window.open(href, "_blank");
            }}
          />
        ))}
        <Button
          icon={CalendarBlankIcon}
          label="Let's chat"
          href={BOOK_TIME_LINK}
          isExternal
          variant={ButtonVariant.SECONDARY}
          size={ButtonSize.SMALL}
        />
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
        <GalaxyWordmark size={16} ariaLabel="" />
      </a>
    </div>
  );
}

export default function App() {
  return (
    <GalaxyProvider theme={GalaxyTheme.DARK}>
      <Home />
    </GalaxyProvider>
  );
}
