import React from 'react';
import './main.css';
import TabbarSandbox from "../../components/tabbar/Sandbox";
const Main = ({ children }) => (
  <div className="main">
    {children}
  </div>
);

Main.propTypes = {
  children: {TabbarSandbox}
};

export default Main;
