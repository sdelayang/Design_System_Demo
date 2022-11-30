import MuiChip from "@mui/material/Chip";
import { useTheme } from "@mui/material/styles";

interface PostProps {
  label: string;
  color: "blue" | "green" | "purple";
  style?: React.CSSProperties;
}

export const Chip = ({ label, color, style }: PostProps) => {
  const theme = useTheme();
  let paletteChoice = theme.palette.primary;
  if (color === "green") {
    paletteChoice = theme.palette.green;
  } else if (color === "blue") {
    paletteChoice = theme.palette.blue;
  }
  return (
    <div>
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
