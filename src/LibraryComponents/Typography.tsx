import React from "react";
import { default as MuiTypo } from "@mui/material/Typography";
import { CommonProps } from "./shared/CommonProps";

interface TypographyProps extends CommonProps {
  variant?:
    | "title1"
    | "title2"
    | "title3"
    | "subtitle1"
    | "subtitle2"
    | "body1";
}

export const Typography = ({ variant = "body1", ...rest }: TypographyProps) => (
  <MuiTypo variant={variant} {...rest} />
);
