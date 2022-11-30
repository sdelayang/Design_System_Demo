import React from "react";
import { default as MuiTypo } from "@mui/material/Typography";

interface TypographyProps {
  variant?:
    | "title1"
    | "title2"
    | "title3"
    | "subtitle1"
    | "subtitle2"
    | "body1";
  children: React.ReactNode;
}

export const Typography = ({
  variant = "body1",
  children,
  ...rest
}: TypographyProps) => (
  <MuiTypo variant={variant} {...rest}>
    {children}
  </MuiTypo>
);
