import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Popout } from "./Popout";
import { Typography } from "./Typography";

export default {
  title: "Example/Popout",
  component: Popout,
} as ComponentMeta<typeof Popout>;

const Template: ComponentStory<typeof Popout> = (args) => <Popout {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  style: { maxWidth: 300 },
  children: (
    <>
      <Typography variant="title2">Dialog title</Typography>
      <Typography variant="body1">Content</Typography>
    </>
  ),
};
