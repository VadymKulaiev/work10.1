import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Pages/Header/Header';
import Sidebar from './Pages/Sidebar/Sidebar';
import Welcome from './Pages/Welcome/Welcome';
import './global.css';
import StateHook from './Pages/StateHookPage/StateHook';
import Community from './Pages/Community/Community';
import Resources from './Pages/Resources/Resources';
import About from './Pages/About/About';
import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route,
    Outlet
} from 'react-router-dom';
import ErrorPage from './Pages/Error/ErrorPage';
import { Users } from './Pages/Users/Users';
import UserPage from './Pages/Users/UserPage';
import data from './data/users.json';

const Root = () => {
    return (
        <div className='container'>
            <Header />
            <Sidebar />
            <Outlet />
        </div>
    )
}

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Root />}>
            <Route index element={<Welcome />} />
            <Route path='/statehooks' element={<StateHook />} />
            <Route path='/community' element={<Community />} />
            <Route path='/resources' element={<Resources />} />
            <Route path='/about' element={<About />} />
            <Route path='/users' data={data} element={<Users />} />
            <Route path='/users/:userId' loader={loader} element={<UserPage />} errorElement={<ErrorPage />} />
            <Route path='*' element={<ErrorPage />} />
        </Route>
    )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <Root />
    <RouterProvider router={router}></RouterProvider>

);

function loader({ params }) {
    const user = data.filter(obj => obj.id === params.userId)
    return user[0];
}