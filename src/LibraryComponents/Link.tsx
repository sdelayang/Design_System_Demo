import { default as MuiLink } from "@mui/material/Link";
import { CommonProps } from "./shared/CommonProps";

export interface LinkProps extends CommonProps {
  href?: string;
}

export const Link = ({ href, children, ...rest }: LinkProps) => (
  <MuiLink
    variant="body1"
    href={href}
    style={{ textDecoration: "none" }}
    {...rest}
  >
    {children}
  </MuiLink>
);
