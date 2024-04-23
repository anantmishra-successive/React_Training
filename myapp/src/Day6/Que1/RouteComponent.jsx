import React, { Suspense } from "react";
import { Route, Link, Routes, BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { lazy } from "react";


const Home = lazy (() => import('./Home') )
const SignIn = lazy(() => import("./SignIn"));
const About = lazy(() => import("./About"));
const Contact = lazy(() => import("./Contact"));
function RouteComponent() {
  return (
    <div>
      <BrowserRouter>
      <Suspense fallback={<h1>Loading..</h1>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/about" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Suspense>
      
      </BrowserRouter>
     
      
    </div>
  );
}

export default RouteComponent;