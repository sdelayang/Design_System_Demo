import ThemeDecorator from "../src/themeDecorator";
import "@fontsource/inter";

export const decorators = [
  (Story) => (
    <ThemeDecorator>
      <Story />
    </ThemeDecorator>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
