// ProtectedComponent.js

import React from 'react';
import WithAuth from './WithAuth'; 
import { Navigate, Outlet , Redirect} from 'react-router-dom';

const ProtectedComponent = (props) => {



  return (
    <div>
     {
        props.isAuthenticated==="true" ? <Outlet/> : <Navigate to="/login" />
     }
    </div>
  );
};


export default WithAuth(ProtectedComponent);
