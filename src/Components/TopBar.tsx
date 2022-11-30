import { Button } from "../LibraryComponents/Button";
import { useNavigate, useLocation } from "react-router-dom";
import "./main.css";
import { ComponentPropsWithRef, useState } from "react";
import logo from "./assets/logo.png";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";

export const TopBar = () => {
  const large = useMediaQuery("(min-width:600px)");
  return (
    <div id="page-header">
      <img src={logo} alt="Logo" style={{ width: 47, height: 39 }} />
      {large ? (
        <>
          <div>
            <NavItems />
          </div>
          <Button variant="contained">Sign up</Button>
        </>
      ) : (
        <Drawer />
      )}
    </div>
  );
};

const NavItems = () => (
  <>
    <NavButton path="/">Home</NavButton>
    <NavButton>Pricing</NavButton>
    <NavButton>Blog</NavButton>
  </>
);

interface NavigationButtonProps extends ComponentPropsWithRef<typeof Button> {
  path?: string;
  children: React.ReactNode;
}

const NavButton = ({ path, children }: NavigationButtonProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const className =
    path === location.pathname
      ? "nav-button nav-button--active"
      : "nav-button nav-button--inactive";
  return (
    <Button
      className={className}
      onClick={path ? () => navigate(path) : undefined}
    >
      {children}
    </Button>
  );
};

const Drawer = () => {
  const [open, setOpen] = useState<boolean>(false);
  const toggleDrawerOpen = () => setOpen(!open);
  return (
    <>
      <IconButton
        color="primary"
        aria-label="open drawer"
        onClick={toggleDrawerOpen}
        edge="start"
        sx={{
          ...(open && { display: "none" }),
        }}
      >
        <MenuIcon />
      </IconButton>
      <MuiDrawer anchor="right" open={open} onClose={toggleDrawerOpen}>
        <NavItems />
      </MuiDrawer>
    </>
  );
};
