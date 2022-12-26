import MuiChip from "@mui/material/Chip";
import { useTheme } from "@mui/material/styles";

interface PostProps {
  label: string;
  color: "blue" | "green" | "purple";
  className?: string;
  style?: React.CSSProperties;
}

export const Chip = ({ label, color, className, style }: PostProps) => {
  const theme = useTheme();
  let paletteChoice = theme.palette.primary;
  if (color === "green") {
    paletteChoice = theme.palette.green;
  } else if (color === "blue") {
    paletteChoice = theme.palette.blue;
  }
  return (
    <div className={className}>
      <MuiChip
        style={{
          color: paletteChoice.dark,
          backgroundColor: paletteChoice.light,
          ...style,
        }}
        label={label}
        size="small"
      />
    </div>
  );
};
