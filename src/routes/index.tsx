import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home'
import Benefits from '../pages/Benefits'
import Breeds from '../pages/Breeds'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/benefits',
        element: <Benefits />,
      },
      {
        path: '/breeds',
        element: <Breeds />,
      },
      {
        path: '/benefits',
        element: <Benefits />,
      },
    ],
  },
])
