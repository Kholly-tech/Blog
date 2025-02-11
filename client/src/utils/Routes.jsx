import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createBrowserRouter, Outlet, RouterProvider, useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Home from '../pages/Home';

const UnProtectedRoutes = () => {
  const {isAuthenticated, currentUser} = useSelector(state => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if(isAuthenticated) navigate('/');
  },[isAuthenticated, navigate]);

  return <Outlet />
}
const ProtectedRoutes = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const {currentUser, isAuthenticated} = useSelector(state => state.auth);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fetchUser = async() => {
    try {
        setLoading(true);
        const res = '';
    } catch (error) {
        setError('Error fetching user data');
    } finally {
        setLoading(false);
    }
  }

  useEffect(() => {
    if (isAuthenticated) fetchUser();
    else setLoading(false);
  },[isAuthenticated, dispatch]);

  if(loading) return <div>Loading...</div>;
  if(!isAuthenticated) return <h1>Sign In</h1>
  if(currentUser) {
    switch (currentUser.isVerified) {
        case true:
            return <Outlet />
    
        default:
            return <Outlet />
    }
  }
}

const router = createBrowserRouter([
    {
        element: <ProtectedRoutes />,
        children: [
            {
                element: <Layout />,
                children: [
                    {
                        path: '/blog/add',
                        element: <h1>Add Blog</h1>
                    }
                ]
            }
        ]
    },
    {
        element: <UnProtectedRoutes />,
        children: [
            {
                element: <Layout />,
                children: [
                    {
                        path: '/',
                        element: <Home />
                    },
                    {
                        path: '/signin',
                        element: <h1>Sign In</h1>
                    },
                    {
                        path: '/signup',
                        element: <h1>Sign Up</h1>
                    }
                ]
            }
        ]
    }
])
const Routes = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default Routes
