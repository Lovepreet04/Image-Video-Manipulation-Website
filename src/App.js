import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import NoPage from './Components/Layout/NoPage';
import Home from './Components/Home/Home';
import About from './Components/Home/About';
import Image from './Components/Service/Image';
import Video from './Components/Service/Video';
import Users from './Components/Service/Users';
import Contact from './Components/Home/Contact';
import SignIn from './Components/Service/src/SignIn';
import Edit from './Components/Home/Edit';
import Face from './Components/Service/Face';


function App() {

  const rout=createBrowserRouter([
    {
      path:'/',element:<Layout/>,
      children:[
        { path:"" , element:<Home/>},
        {path:"about" , element:<About/>},
        {path:"image" , element:<Image/>},
        {path:"video" , element:<Video/>},
        {path:"contact" , element:<Contact/>},
        {path:"USER/:id" , element:<Users/>},
        {path:"edit" , element:<Edit/>},
        {path:"face" , element:<Face/>},
        {path:"authenticate" , element:<SignIn/>},
        {path:"Resume" , element:<SignIn/>},
        {path:"*" , element:<NoPage/>}
      ]
    }
  ])


  return (
    <RouterProvider router={rout}/>
    
  );
}

export default App;
