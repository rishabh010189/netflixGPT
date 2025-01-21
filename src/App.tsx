import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/Login/Login";
import Browse from "./components/Browse/Browse";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/browse',
    element: <Browse />,
  },
]);

function App() {

  return (
    <div className="">
    <RouterProvider router={router} />
    {/* <BrowserRouter>
    <Routes>
      <Route index element={<Body />}></Route>
      <Route path="login" element={<Login />}></Route>
    </Routes>
      
    </BrowserRouter> */}
    </div>
  )
}

export default App
