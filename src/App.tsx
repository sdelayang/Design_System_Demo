import "./App.css";
import { HomePage } from "./Components/HomePage";
import { TopBar } from "./Components/TopBar";
import {
  createBrowserRouter,
  RouterProvider,
  useRouteError,
} from "react-router-dom";
import { Outlet } from "react-router-dom";
import ThemeDecorator from "./themeDecorator";
import "@fontsource/inter";
import { ContactInfo } from "./Components/ContactInfo";

export default function App() {
  return <RouterProvider router={router} />;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="main-div">
        <div className="content">
          <ThemeDecorator>
            <TopBar />
            <Outlet />
            <ContactInfo />
          </ThemeDecorator>
        </div>
      </div>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
    ],
  },
]);

function ErrorPage() {
  const error = useRouteError() as { statusText?: string; message?: string };
  console.error(error);

  return (
    <div id="error-page">
      <p>Sorry, this page is not yet implemented.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
