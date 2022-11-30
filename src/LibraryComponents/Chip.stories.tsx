import { ComponentMeta } from "@storybook/react";

import { Chip } from "./Chip";

export default {
  title: "Example/Chip",
  component: Chip,
} as ComponentMeta<typeof Chip>;

export const Chips = () => (
  <>
    <Chip label="purple" color="purple" />
    <Chip label="blue" color="blue" style={{ margin: "0 0.6rem" }} />
    <Chip label="green" color="green" />
  </>
);
