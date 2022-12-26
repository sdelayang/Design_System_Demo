import { Typography } from "../LibraryComponents/Typography";
import "./main.css";
import { Post } from "./Post";
import simple from "./assets/simple.png";
import image7 from "./assets/image7.png";
import useMediaQuery from "@mui/material/useMediaQuery";
import { PopoutPost } from "./PopoutPost";

export const HomePage = () => {
  const matches = useMediaQuery("(min-width:600px)");
  const media = matches ? "wide" : "phone";
  return (
    <>
      <div className="spacer--large" />
      <div className="spacer--large" />
      <Typography variant="subtitle2">
        Here is the place for subtitle
      </Typography>
      <Typography variant="title1">Big Title</Typography>
      <div className="spacer" />
      <PopoutPost />
      <div className="spacer--large" />
      <div className="spacer--large" />
      <FeaturedPosts media={media} />
      <LatestPosts media={media} />
      <MorePosts media={media} />
    </>
  );
};

interface SectionProps {
  media: "phone" | "wide";
}

const FeaturedPosts = ({ media }: SectionProps) => {
  const postDivClass = media === "phone" ? "column" : "row";
  return (
    <div>
      <Typography variant="title1">Featured Posts</Typography>
      <div className="spacer" />
      <div className={postDivClass}>
        <Post image={simple} size="large" tag="technology" />
        <div className="spacer" />
        <div className="column">
          <div className="row">
            <Post image={simple} size="small" tag="technology" />
            <div className="spacer--small" />
            <Post image={simple} size="small" tag="art" />
          </div>
          <div className="row">
            <Post image={simple} size="small" tag="technology" />
            <div className="spacer--small" />
            <Post image={simple} size="small" tag="art" />
          </div>
        </div>
      </div>
    </div>
  );
};

const LatestPosts = ({ media }: SectionProps) => {
  const postDivClass = media === "phone" ? "column" : "row";
  return (
    <div>
      <Typography variant="title1">Latest Posts</Typography>
      <div className="spacer" />
      <div className={postDivClass}>
        <div className="column">
          <div className="row">
            <Post image={simple} size="small" tag="technology" />
            <div className="spacer--small" />
            <Post image={simple} size="small" tag="art" />
          </div>
          <div className="row">
            <Post image={simple} size="small" tag="technology" />
            <div className="spacer--small" />
            <Post image={simple} size="small" tag="art" />
          </div>
        </div>
        <div className="spacer" />
        <Post image={simple} size="large" tag="technology" />
      </div>
    </div>
  );
};

const MorePosts = ({ media }: SectionProps) => {
  const postDivClass = media === "phone" ? "column" : "row";
  return (
    <div>
      <Typography variant="title1">More Posts</Typography>
      <div className="spacer" />
      <div className={postDivClass}>
        <Post image={image7} size="medium" tag="technology" />
        <div className="spacer" />
        <Post image={image7} size="medium" tag="art" />
        <div className="spacer" />
        <Post image={image7} size="medium" tag="marketing" />
      </div>
    </div>
  );
};
