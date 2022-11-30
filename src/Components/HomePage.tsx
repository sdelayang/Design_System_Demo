import { Popout } from "../LibraryComponents/Popout";
import { Typography } from "../LibraryComponents/Typography";
import "./main.css";
import { Post } from "./Post";

export const HomePage = () => (
  <>
    <div className="spacer" />
    <Typography variant="subtitle2">Here is the place for subtitle</Typography>
    <Typography variant="title1">Big Title</Typography>
    <div className="spacer" />
    <Popout style={{ maxWidth: 400 }}>
      <Typography variant="title2">Title of something</Typography>
      <Typography variant="body1">
        Consequuntur iusto labore dolores soluta aut. Autem id beatae pariatur
        laboriosam non fu
      </Typography>
    </Popout>
    <Post></Post>
  </>
);
