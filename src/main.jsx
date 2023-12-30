import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './layout.jsx'
import Home from './Component/Home/Home.jsx'
import About from './Component/About/About.jsx'
import Contact from './Component/Contact/Contact.jsx'
import User from './User/User.jsx'
import Github, { githubloader } from './Component/Github/Github.jsx'

// Way 1 to creating a routing

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[{
//       path:"home",
//       element:<Home/>
//     },{
//       path:"About",
//       element:<About/>
//     },{
//       path:"Contact",
//       element:<Contact/>
//     }]
//   }
// ])


// way 2 for routing

 const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
       <Route path='home' element={<Home/>}></Route>
       <Route path='about' element={<About/>}></Route>
       <Route path='contact' element={<Contact/>}></Route>
       <Route path='contact' element={<Contact/>}></Route>
       {/* <Route path='user' element={<User/>}></Route> */}
       <Route path='GIthub' element={<Github/>}  loader={githubloader}></Route>

    </Route>
  )

 )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
