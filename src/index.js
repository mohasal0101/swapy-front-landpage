
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

// styles
import "bootstrap/scss/bootstrap.scss";
import "assets/scss/paper-kit.scss?v=1.3.0";
import "assets/demo/demo.css?v=1.3.0";
// pages
import Index from "views/Index.js";
import RegisterPage from "views/examples/RegisterPage";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import Signup from "./components/Signup"
import Signin from "./components/Signin"
// others

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
  <ChakraProvider>
    <Switch>
      <Route path="/index" render={(props) => <Index {...props} />} />
      
      <Route
        path="/landing-page"
        render={(props) => <LandingPage {...props} />}
      />
      <Route
        path="/profile-page"
        render={(props) => <ProfilePage {...props} />}
      />
      
      <Route
        path="/register-page"
        render={(props) => <RegisterPage {...props} />}
      />
      <Route
        path="/Signup"
        render={(props) => <Signup {...props} />}
      />

      <Route
      path="/Signin"
      render={(props) => <Signin {...props} />}
    />

      <Redirect to="/index" />
    </Switch>
    </ChakraProvider>
  </BrowserRouter>
);
