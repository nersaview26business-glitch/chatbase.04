module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundlightcelldefault: "var(--backgroundlightcelldefault)",
        backgroundlightcelldefaulthover:
          "var(--backgroundlightcelldefaulthover)",
        borderlightsecondary: "var(--borderlightsecondary)",
        cellbackgroundcolor: "var(--cellbackgroundcolor)",
        "data-vizgraygray-30": "var(--data-vizgraygray-30)",
        "data-vizgraygray-50": "var(--data-vizgraygray-50)",
        "data-vizlimelime-40": "var(--data-vizlimelime-40)",
        "data-vizpinkpink-10": "var(--data-vizpinkpink-10)",
        "data-vizpinkpink-70": "var(--data-vizpinkpink-70)",
        "data-vizpurplepurple-60": "var(--data-vizpurplepurple-60)",
        fontlightprimary: "var(--fontlightprimary)",
        fontlightsecondary: "var(--fontlightsecondary)",
        white: "var(--white)",
        wwwchatbasecoalabaster: "var(--wwwchatbasecoalabaster)",
        "wwwchatbasecoathens-gray": "var(--wwwchatbasecoathens-gray)",
        wwwchatbasecoblack: "var(--wwwchatbasecoblack)",
        "wwwchatbasecoblue-ribbon": "var(--wwwchatbasecoblue-ribbon)",
        "wwwchatbasecododger-blue": "var(--wwwchatbasecododger-blue)",
        "wwwchatbasecoguardsman-red": "var(--wwwchatbasecoguardsman-red)",
        wwwchatbasecoiron: "var(--wwwchatbasecoiron)",
        "wwwchatbasecoiron-50": "var(--wwwchatbasecoiron-50)",
        wwwchatbasecoportage: "var(--wwwchatbasecoportage)",
        "wwwchatbasecoroyal-blue": "var(--wwwchatbasecoroyal-blue)",
        "wwwchatbasecosantas-gray": "var(--wwwchatbasecosantas-gray)",
        "wwwchatbasecoscarpa-flow": "var(--wwwchatbasecoscarpa-flow)",
        wwwchatbasecoshark: "var(--wwwchatbasecoshark)",
        "wwwchatbasecospun-pearl": "var(--wwwchatbasecospun-pearl)",
        "wwwchatbasecostorm-gray": "var(--wwwchatbasecostorm-gray)",
        "wwwchatbasecostorm-gray-30": "var(--wwwchatbasecostorm-gray-30)",
        wwwchatbasecowhite: "var(--wwwchatbasecowhite)",
        "wwwchatbasecowhite-02": "var(--wwwchatbasecowhite-02)",
        "wwwchatbasecowhite-white": "var(--wwwchatbasecowhite-white)",
        wwwchatbasecowoodsmoke: "var(--wwwchatbasecowoodsmoke)",
        "wwwchatbasecoyour-pink": "var(--wwwchatbasecoyour-pink)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        bolder: "var(--bolder-font-family)",
        label: "var(--label-font-family)",
        "www-chatbase-co-inter-bold":
          "var(--www-chatbase-co-inter-bold-font-family)",
        "www-chatbase-co-inter-medium":
          "var(--www-chatbase-co-inter-medium-font-family)",
        "www-chatbase-co-inter-regular":
          "var(--www-chatbase-co-inter-regular-font-family)",
        "www-chatbase-co-inter-semi-bold":
          "var(--www-chatbase-co-inter-semi-bold-font-family)",
        "www-chatbase-co-inter-semi-bold-upper":
          "var(--www-chatbase-co-inter-semi-bold-upper-font-family)",
        "www-chatbase-co-semantic-button":
          "var(--www-chatbase-co-semantic-button-font-family)",
        "www-chatbase-co-semantic-heading-1":
          "var(--www-chatbase-co-semantic-heading-1-font-family)",
        "www-chatbase-co-semantic-input":
          "var(--www-chatbase-co-semantic-input-font-family)",
        "www-chatbase-co-semantic-label":
          "var(--www-chatbase-co-semantic-label-font-family)",
        "www-chatbase-co-semantic-link":
          "var(--www-chatbase-co-semantic-link-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};
