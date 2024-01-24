import Navbar from "./components/Navbar";
import Aside from "./components/Aside";
import Main from "./components/Main";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  }
]);


function App() {
  return (
    <>
      <Navbar />
      <Aside />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
