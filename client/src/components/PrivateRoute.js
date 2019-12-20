import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (localStorage.getItem('token')) { // If client gets a token then render the component
          
          return <Component {...props} />;
        } else {
          return <Redirect to="/login" />; // in case of no token, redirect to the login page
        }
      }}
    />
  );
};

export default PrivateRoute;