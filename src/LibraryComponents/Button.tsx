import { default as MuiButton } from "@mui/material/Button";
import { CommonProps } from "./shared/CommonProps";

interface ButtonProps extends CommonProps {
  variant?: "text" | "contained";
  color?: "primary" | "secondary";
  onClick?: () => void;
}

export const Button = ({
  variant = "text",
  color = "primary",
  children,
  ...rest
}: ButtonProps) => (
  <MuiButton color={color} variant={variant} {...rest}>
    {children}
  </MuiButton>
);
