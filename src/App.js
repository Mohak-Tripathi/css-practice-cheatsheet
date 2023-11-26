
import './App.css';
import HomePage  from './components/HomePage';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Form from './components/FormRegistration/Form';
import Navbar from "./components/Navbar/Navbar"


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>
  },
  {
    path: "/form",
    element: <Form/>
  },
  {
    path: "/navbar",
    element: <Navbar/>
  }
])


function App() {
  return (
    <RouterProvider router={appRouter} />
  );
}

export default App;
