/**
 * Create a React application that has multiple pages represented as components.
 * Implement lazy loading for these components using React's lazy and Suspense features.
 * When a user navigates to a particular page, the component should be loaded lazily,
 * improving the application's initial loading time.
 */

import React from "react";
import RouteComponent from "./RouteComponent";
import { Link } from "react-router-dom";


function Index() {
  return (
    <>
      
        
        <div>
          <Link to={"/"}>
       
            Home
          </Link>
          <Link  to={"/about"}>
            About
          </Link>
          <Link  to={"/contact"}>
            Contact
          </Link>
          <Link  to={"/login"}>
            Login
          </Link>
        
      </div>

      
    </>
  );
}

export default Index;