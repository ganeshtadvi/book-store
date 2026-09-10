import AppLayout from "./components/Layout/AppLaypout.jsx";
import { Home } from "./components/Pages/Home.jsx";
import { AllBooksPage } from "./components/Pages/AllBooksPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BookDetails from "./components/Pages/BookDetailsPage.jsx";
import "./App.css";
import SignUp from "./components/UI/signUp.jsx";
import LoginForm from "./components/UI/LoginForm.jsx";
import CartItems from "./components/UI/CartItems.jsx";

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
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
