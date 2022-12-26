import {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  ReactNode,
} from "react";
import { Chip } from "../LibraryComponents/Chip";
import { Typography } from "../LibraryComponents/Typography";

interface PostProps {
  image: string;
  size: "small" | "medium" | "large";
  tag: "technology" | "art" | "marketing";
  children?: ReactNode;
}

export const Post = ({ image, size, tag, children }: PostProps) => {
  const { divStyle, typoVariant } = sizeTable[size];
  return (
    <div className={"column post " + divStyle}>
      <img src={image} alt="" className="post-image" />
      <Chip {...chipStyle[tag]} className="chip" />
      <Typography variant={typoVariant}>
        {children ??
          "Here is the place for subtitle, Here is the place for subtitle"}
      </Typography>
    </div>
  );
};

interface sizeProps {
  divStyle: string;
  typoVariant: ComponentPropsWithRef<typeof Typography>["variant"];
}

const sizeTable: Record<string, sizeProps> = {
  small: { divStyle: "post--small", typoVariant: "title3" },
  medium: { divStyle: "", typoVariant: "title3" },
  large: { divStyle: "post--large", typoVariant: "subtitle1" },
};

const chipStyle: Record<string, ComponentPropsWithoutRef<typeof Chip>> = {
  technology: { label: "Technology", color: "blue" },
  art: { label: "Art", color: "purple" },
  marketing: { label: "Marketing", color: "green" },
};
