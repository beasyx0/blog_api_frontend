import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import routes from './Config/routes.js';
import {AppContextProvider} from './Context';
import Navigation from './Components/Navigation';


function App() {

  return (
    <AppContextProvider>
      <Router>
        <Navigation />
        <Switch>
          {routes.map((route) => (
            <Route
              key={route.path} 
              path={route.path} 
              component={route.component} 
              exact
            />
          ))}
        </Switch>
      </Router>
    </AppContextProvider>
  );
}

export default App;
