import { Chip } from "../LibraryComponents/Chip";
import { Popout } from "../LibraryComponents/Popout";
import { Typography } from "../LibraryComponents/Typography";
import photo from "./assets/PhotoOutlined.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export const PopoutPost = () => (
  <Popout className="popout-post">
    <img src={photo} alt="" className="popout-post--image" />
    <Chip label="technology" color="blue" className="chip" />
    <Typography variant="title2">Title of something</Typography>
    <Typography variant="body1">
      Consequuntur iusto labore dolores soluta aut. Autem id beatae pariatur
      laboriosam non fu
    </Typography>
    <div className="spacer" />
    <div className="expander" />
    <div className="post-footer">
      <div className="row row--centered">
        <AccountCircleIcon fontSize="large" />
        <Typography variant="title3">&nbsp;USER NAME</Typography>
      </div>
      <Typography variant="body1">12 min to read</Typography>
    </div>
  </Popout>
);
