import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from "./Layouts/Layout.jsx"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout/>}>
            <Route path="" element={<App/>}/>
        </Route>
    )
)

ReactDOM.createRoot(document.getElementById('root')).render(
   <RouterProvider router={router}/>
)
