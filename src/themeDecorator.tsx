import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    title1: React.CSSProperties;
    title2: React.CSSProperties;
    title3: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    title1?: React.CSSProperties;
    title2?: React.CSSProperties;
    title3?: React.CSSProperties;
  }

  interface Palette {
    blue: Palette["primary"];
    green: Palette["primary"];
  }

  interface PaletteOptions {
    blue: PaletteOptions["primary"];
    green: PaletteOptions["primary"];
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    title1: true;
    title2: true;
    title3: true;
    h1: false;
    h2: false;
    h3: false;
    h4: false;
    h5: false;
    h6: false;
    body2: false;
    caption: false;
    overline: false;
  }
}

const basic = createTheme({
  palette: {
    primary: {
      light: "#C6C4FF",
      main: "#6B4EFF",
      dark: "#5538EE",
    },
    blue: {
      light: "#9BDCFD",
      main: "#FFFFFF",
      dark: "#0065D0",
    },
    green: {
      light: "#7DDE86",
      main: "#FFFFFF",
      dark: "#198155",
    },
  },
  typography: {
    fontFamily: [
      "Inter",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    subtitle1: {
      fontWeight: 700,
      fontSize: "1.5rem",
    },
    subtitle2: {
      fontWeight: 700,
      fontSize: "1.125rem",
    },
  },
});

const theme = createTheme(
  {
    typography: {
      title1: {
        color: basic.palette.primary.main,
        fontFamily: basic.typography.fontFamily,
        fontWeight: 700,
        fontSize: "2rem",
      },
      title2: {
        fontFamily: basic.typography.fontFamily,
        fontWeight: 700,
        fontSize: "1.5rem",
      },
      title3: {
        fontFamily: basic.typography.fontFamily,
        fontWeight: 700,
        fontSize: "0.875rem",
      },
      body1: {
        color: "#6C7072",
        fontWeight: 400,
        fontSize: "1.125rem",
      },
    },
  },
  basic
);

interface ThemeDecoratorProps {
  children: React.ReactNode;
}

const ThemeDecorator = ({ children }: ThemeDecoratorProps) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default ThemeDecorator;
