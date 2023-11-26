
import './App.css';
import HomePage  from './components/HomePage';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Form from './components/FormRegistration/Form';


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>
  },
  {
    path: "/form",
    element: <Form/>
  }
])


function App() {
  return (
    <RouterProvider router={appRouter} />
  );
}

export default App;
