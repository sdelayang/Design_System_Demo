import { ComponentPropsWithRef } from "react";
import { Chip } from "../LibraryComponents/Chip";
import { Typography } from "../LibraryComponents/Typography";

interface PostProps {
  image: string;
  size: "small" | "medium" | "large";
}

export const Post = ({ image, size }: PostProps) => {
  const { divStyle, typoVariant } = propTable[size];
  return (
    <div className={"column " + divStyle}>
      <img src={image} alt="" style={{ width: "100%" }} />
      <Chip color="blue" label="Technology" />
      <Typography variant={typoVariant}>
        Here is the place for subtitle, Here is the place for subtitle
      </Typography>
    </div>
  );
};

interface Item {
  divStyle: string;
  typoVariant: ComponentPropsWithRef<typeof Typography>["variant"];
}

const propTable: Record<string, Item> = {
  small: { divStyle: "post--small", typoVariant: "title3" },
  medium: { divStyle: "post--medium", typoVariant: "title3" },
  large: { divStyle: "post--large", typoVariant: "subtitle1" },
};
