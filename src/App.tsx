import React from 'react';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Counter from './components/Counter';

function App() {
  return (
    <div style={{ margin: '20px' }}>
      <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <div className="page-header">
            <h2>React Router Demo</h2>
          </div>
        </div>
      </div>
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

export default App;
