import React from "react";

export interface ImageProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  src: string;
  alt: string;
}

export const Image = ({ src, alt, ...rest }: ImageProps) => (
  <div style={{ borderRadius: "8px" }} {...rest}>
    <img src={src} alt={alt} />
  </div>
);
