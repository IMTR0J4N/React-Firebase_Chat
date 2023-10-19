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
          path: '/chat/group/:id',
          element: <Chatbox />
        },
      ]);

    return (
        <main className='app'>
          <RouterProvider router={Router}/>
        </main>
    )
}

export default App;
