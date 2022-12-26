import { CommonProps } from "./shared/CommonProps";

export const Popout = ({ style, ...rest }: CommonProps) => (
  <div
    style={{
      boxShadow:
        "0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12)",
      borderRadius: "4px",
      ...style,
    }}
    {...rest}
  />
);
