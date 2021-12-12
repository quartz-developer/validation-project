import React from "react";
import style from "./Home.module.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className={style.mainContainer}>
        <div className={style.infoCardContainer}>
            <div className={style.infoCardText}>
                <h1> Hi WE'RE <span> IT Mabna </span> </h1>
                <h2> Our Team Are Front-End Developers </h2>
                <p>
                This project is done by IT Mabna Team and it's for the <br />
                learning the <span> React </span> diffrent challanges and <br />
                features, which is taught by dear
                <span> Milad Azami. </span>
                </p>
                <button> <Link to="/signUp"> See My Project </Link> </button>
            </div>
            <div className={style.infoCardImage}>
            </div>
        </div>
    </div>
  );
};

export default Home;
