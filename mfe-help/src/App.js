import "./App.css";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Help from "./components/Help/Help";

const routes = [
  {
    path: "/",
    exact: true,
    main: Home,
  },
  {
    path: "/help/:id",
    exact: true,
    main: Help,
  },
];

const App = () => (
  <BrowserRouter>
    <div className="App-content">
      <header className="App-header">
        <Link to="/">Home</Link>
        <Link to="/help/1">Help 1</Link>
        <Link to="/help/2">Help 2</Link>
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
