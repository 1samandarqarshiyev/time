import React from "react";
import './Style.css';
import TopNav from './TopNav';
import TopMain from './TopMain';


const Main = () => {
    return (
        <div className="main-block">
            <TopNav/>
            <TopMain/>
        </div>
    )
}

export default Main;