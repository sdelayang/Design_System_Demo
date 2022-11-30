import { ComponentStory, ComponentMeta } from "@storybook/react";
import simple from "./assets/simple.png";

import { Image } from "./Image";

export default {
  title: "Example/Image",
  component: Image,
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  src: simple,
  alt: "simple-image",
};
