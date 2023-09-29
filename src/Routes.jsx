import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Loginpage from './Loginpage'
import Registrationpage from './Registrationpage';
import Userpage from './Userpage';
import Adminpage from "./Adminpage" ;

const Routes = createBrowserRouter ([
    {
        path: "/",
        element: <Registrationpage/>
    },
    {
        path:"/Loginpage",
        element: <Loginpage/>

    },
    {
        path:"/Userpage",
        element: <Userpage/>

    },
    {
        path:"/Adminpage",
        element: <Adminpage/>

    }
    
])

export default Routes ;