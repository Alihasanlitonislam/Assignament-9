import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Home from './companet/Home/Home';
import JobDetels from './companet/JobDetels/JobDetels';
import ApplyHandel from './companet/ApplyHandel/ApplyHandel';
import Statistics from './companet/Statistics/Statistics';
import Blog from './companet/Blog/Blog';
import ErrorPag from './companet/ErrorPag/ErrorPag';
const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    errorElement: <ErrorPag/>,
    children: [
      {
        path: '/',
        element: <Home/>,
        loader: () => fetch('JobDaels.json')
      },
      {
        path: 'jobdetels/:id',
        element: <JobDetels/>,
        loader: ({params}) => fetch(`JobDaels.json/${params.id}`)
      },
      {
        path: 'apply',
        element: <ApplyHandel/>
      },
      {
        path: 'statistics',
        element: <Statistics/>
      },
      {
        path: 'blog',
        element: <Blog/>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={router}/>
)
