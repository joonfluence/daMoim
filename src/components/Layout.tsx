import React from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

type Props = {};

const Layout = (props: Props) => {
  return (
    <Wrapper>
      <h1>Basic Example</h1>
      {/* A "layout route" is a good place to put markup you want to
            share across all the pages on your site, like navigation. */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>
      <hr />
      {/* An <Outlet> renders whatever child route is currently active,
            so you can think about this <Outlet> as a placeholder for
            the child routes we defined above. */}
      <Outlet />
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div`
  width: 100%;
`;
