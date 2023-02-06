import React from 'react';
import {
  Routes,
  Route,
  NavLink,
  Navigate,
  useRoutes,
  useInRouterContext,
} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Counter from './pages/Counter';
import routes from './routes';
import Headers from './components/Headers';

function App() {
  console.log('App', useInRouterContext()); // true
  return (
    <div style={{ margin: '20px' }}>
      <Headers />
      <div className="row">
        <div className="col-xs-2 col-xs-offset-2">
          <div className="list-group">
            <NavLink className="list-group-item" to="/home">
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) => {
                return isActive
                  ? 'list-group-item testNavLink'
                  : 'list-group-item';
              }}
              to="/about">
              About
            </NavLink>
            <NavLink className="list-group-item" to="/counter">
              Counter
            </NavLink>
          </div>
        </div>
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">
              {/*注册路由*/}
              <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/home" element={<Home />} />
                <Route path="/counter" element={<Counter />} />
                <Route
                  path="/"
                  element={<Navigate replace={false} to={'/home'} />}
                />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AppRouter() {
  const element = useRoutes(routes);
  console.log('App', useInRouterContext()); // true
  return (
    <div style={{ margin: '20px' }}>
      <Headers />
      <div className="row">
        <div className="col-xs-2 col-xs-offset-2">
          <div className="list-group">
            <NavLink className="list-group-item" end to="/home">
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) => {
                return isActive
                  ? 'list-group-item testNavLink'
                  : 'list-group-item';
              }}
              to="/about">
              About
            </NavLink>
            <NavLink className="list-group-item" to="/counter">
              Counter
            </NavLink>
          </div>
        </div>
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">
              {/*注册路由*/}
              {element}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
export { AppRouter };
