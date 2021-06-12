import React, { Fragment } from 'react';
import './home.css';
import TabbarSandbox from "../../components/tabbar/Sandbox";

const Home = ({ children }) => (
    <div className="main">
        {children}
    </div>
);

Home.propTypes = {
    children: {TabbarSandbox}
};

export default Home;
