import AppLayout from "./components/Layout/AppLaypout.jsx";
import { Home } from "./components/Pages/Home.jsx";
import { AllBooksPage } from "./components/Pages/AllBooksPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BookDetails from "./components/Pages/BookDetails.jsx";
import "./App.css";
import SignUp from "./components/UI/signUp.jsx";
import LoginForm from "./components/UI/LoginForm.jsx";
import CartItems from "./components/UI/CartItems.jsx";
import About from "./components/Pages/policy-pages/About.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "books",
        element: <AllBooksPage />,
      },
      {
        path: "/cart",
        element: <CartItems />,
      },
      {
        path: "/books/:id",
        element: <BookDetails />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginForm />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/pages/about",
    element: <About />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
