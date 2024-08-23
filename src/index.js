import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import Collections from './screens/Collections';
import SignUp from './screens/SignUp';
import Login from './screens/Login';
import ProfileSettings from './screens/ProfileSettings';
import PostHistory from './screens/PostHistory';
import AddPost from './screens/AddPost';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "collections",
    element: <Collections />
  },
  {
    path: "signup",
    element: <SignUp />
  },
  {
    path: "login",
    element: <Login />
  },
  {
    path: "profilesettings",
    element: <ProfileSettings/>
  },
  {
    path: "posthistory",
    element: <PostHistory/>
  },
  {
    path: "addpost",
    element: <AddPost/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);