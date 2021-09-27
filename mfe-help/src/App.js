import './App.css';
import React from 'react'; // If react is not imported in each component, browser throws: "ReferenceError: React is not defined"
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Help from './components/Help/Help';

const routes = [
  {
    path: '/',
    exact: true,
    main: Home
  },
  {
    path: '/article/:id',
    exact: true,
    main: Help
  }
];

const App = ({baseHref}) => (
  <BrowserRouter basename={baseHref}>
    <div className="App-content">
      <header className="App-header">
        <Link to="/">Home</Link>
        <Link to="/article/1">Help 1</Link>
        <Link to="/article/2">Help 2</Link>
      </header>
      <Switch>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        ))}
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;