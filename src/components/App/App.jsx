import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from '../Login/Login.jsx';
import Welcome from '../Welcome/Welcome.jsx';
import Chatbox from '../Chat/Chat.jsx';
import './App.css'

function App() {

    const Router = createBrowserRouter([
        {
          path: '/',
          element: <Welcome />
        },
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/chat',
          element: <Chatbox />
        }
      ])

    return (
        <div className='app'>
          <RouterProvider router={Router}/>
        </div>
    )
}

export default App;