import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from '../pages/App';
import Length from '../pages/Length';
import Temperature from '../pages/Temperature';
import Weight from '../pages/Weight';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <div>ERROR 404</div>,
        children: [
            {
                path: 'length',
                element: <Length />
            },
            {
                path: 'temperature',
                element: <Temperature />
            },
            {
                path: 'weight',
                element: <Weight />
            }
        ]
    }
]);

const MyRoutes = () => <RouterProvider router={router} />;

export default MyRoutes;