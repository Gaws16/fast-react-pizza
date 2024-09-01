import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./features/ui/Home";
import Menu, { loader as MenuLoader } from "./features/menu/Menu";
import CreateOrder from "./features/order/CreateOrder";
import OrderItem from "./features/order/OrderItem";
import Cart from "./features/cart/Cart";
import AppLayout from "./features/ui/AppLayout";
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: MenuLoader,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
      },
      {
        path: "/order/id",
        element: <OrderItem />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
