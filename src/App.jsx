import React from 'react';
import { BrowserRouter, Routes, Route, useRoutes } from 'react-router-dom';
import Home from './pages/home';
import Layout from './component/Layout';
import './App.css';

import { routers } from './router';

import Login from './pages/login';


function App() {
  let myRoutes = [];

  const renderRoute = route => {
    return (
      <Route
        key={route.key}
        path={route.path}
        element={route.element}
      />
    );
  };

  routers.forEach(route => {
    if (route.children) {
      route.children.forEach(ele => {
        myRoutes.push(renderRoute(ele));
      });
    } else {
      myRoutes.push(renderRoute(route));
    }
  });


  // const GetRouter = () => {
  //   const element = useRoutes(routers)
  //   return element;
  // }


  return (
    <BrowserRouter>
      {/* <GetRouter /> */}
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          {myRoutes}
          {/* <Route
            path="/dashboard"
            element={
              <React.Suspense fallback={<Spin />}>
                <Dashboard />
              </React.Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <React.Suspense fallback={<Spin />}>
                <About />
              </React.Suspense>
            }
          />
          <Route
            path="/form/basic-form"
            element={
              <React.Suspense fallback={<Spin />}>
                <BasicForm />
              </React.Suspense>
            }
          />
          <Route
            path="/form/pro-form"
            element={
              <React.Suspense fallback={<Spin />}>
                <ProForm />
              </React.Suspense>
            }
          /> */}
          <Route
            path="*"
            element={
              <main style={{ padding: '1rem' }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
