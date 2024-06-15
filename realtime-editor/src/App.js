import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home";
import EditorPage from "./pages/EditorPage";
import { Toaster } from 'react-hot-toast';

function App() {

  const router = createBrowserRouter([

    {
      path: "/",
      element: <Home />,
    },

    {
      path: "/editor/:roomId",
      element: <EditorPage />,
    },
  ]);

  return (
    <>
      <div>
        <Toaster
          position='top-right'
          toastOptions={{
            success: {
              theme: {
                primary: '#4aed88',
              },
            },
          }}
        ></Toaster>
      </div>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
