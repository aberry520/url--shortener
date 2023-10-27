import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root, { loader as rootLoader } from './routes/root.jsx'
import Home, {loader as homeLoader} from './routes/home'
import SignUp from './routes/signup'
import LogIn from './routes/login'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // loader: rootLoader,
    children: [
      {
        index: true,
        element: <Home />,
        loader: homeLoader,
      },
      {
        path: "signup/",
        element: <SignUp />,
      },
      {
        path: "login/",
        element: <LogIn />,
      },
    ],
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
