import { Chip } from "../LibraryComponents/Chip";
import { Typography } from "../LibraryComponents/Typography";
import simple from "./assets/simple.png";

export const Post = () => {
  return (
    <div className="column" style={{ maxWidth: 564 }}>
      <img src={simple} alt="" style={{ width: "100%" }} />
      <Chip color="blue" label="Technology" />
      <Typography variant="subtitle1">
        Here is the place for subtitle, Here is the place for subtitle
      </Typography>
    </div>
  );
};
