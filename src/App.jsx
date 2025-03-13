import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'

import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import MainLayout from './layouts/MainLayout'
import NotFoundPage from './Pages/NotFound'
import ProjectsPage from './Pages/ProjectsPage'
import WorkingOnIt from './Pages/WorkingOnIt'


const router = createBrowserRouter(
  createRoutesFromElements (
    <Route path = '/' element = {<MainLayout />}>

      <Route index element = {<HomePage />}/>
      <Route path = '/Home' element = {<HomePage />}/>
      <Route path = '/About' element = {< AboutPage/>}/>
      {/* <Route path = "/Projects" element = {<ProjectsPage /> } /> */}
      <Route path = '/Projects' element = {<WorkingOnIt />} />
      
      <Route path = '*' element = {<NotFoundPage/>}/>
    </Route>
  ),
  
);

const App = () => {
  return  <RouterProvider router = {router} />
}

export default App



    

    
    

