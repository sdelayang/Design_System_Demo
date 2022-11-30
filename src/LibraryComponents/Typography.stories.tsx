import { ComponentMeta } from "@storybook/react";

import { Typography } from "./Typography";

export default {
  title: "Example/Typography",
  component: Typography,
} as ComponentMeta<typeof Typography>;

const padding = { style: { paddingBottom: 10 } };

export const Typographies = () => (
  <div style={{ display: "flex", flexDirection: "column" }}>
    <Typography variant="title1" {...padding}>
      Title1
    </Typography>
    <Typography variant="title2" {...padding}>
      Title2
    </Typography>
    <Typography variant="title3" {...padding}>
      Title3
    </Typography>
    <Typography variant="subtitle1" {...padding}>
      Subtitle1
    </Typography>
    <Typography variant="subtitle2" {...padding}>
      Subtitle2
    </Typography>
    <Typography variant="body1" {...padding}>
      Content
    </Typography>
  </div>
);
