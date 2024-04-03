import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Dashboard from "../assets/dashboard (1).png";
import Graph from "../assets/bar-chart.png";
import Assets from "../assets/pentagon-outline.png";
import Wallet from "../assets/ewallet.png";
import History from "../assets/history.png";
import Trade from "../assets/up-down.png";
import Carboncell from "../assets/carboncell-removebg-preview.png";
import Person from "../assets/person.jpg";
import Setting from "../assets/settings.png";
import Support from "../assets/question.png";
import Notification from "../assets/notification.png";
import Dots from "../assets/dots.png";
import "./Sidebar.css";

const Sidebar = ({ toggleSidebar, isOpen }) => {


  return (
    <div className="sidecontainer" 
    style={{ width: isOpen ? "70px" : "280px" }}>
      <div className="logoContainer">
        {isOpen === false ? (
          <img
            src={Carboncell}
            alt="Carboncell-logo"
            className="carboncell-logo"
          />
        ) : (
          ""
        )}
      </div>
      {/* <div
        className="hamburgerContainer"
        style={{ left: isOpen ? "20px" : "220px" }}
      > */}
      <div
        className="hamburgerContainer"
        onClick={toggleSidebar}
      >
        {/* <div className="hamgurberTrigger" onClick={toggle}> */}
        <div className="hamgurberTrigger" >
          <div className="hamburgerMenu"></div>
        </div>
      </div>
      {isOpen === false ? (
        <div className="contentsContainer">
          <ul>
            <li>
              <NavLink exact activeClassName="active" to="/">
                <img src={Dashboard} alt="dashboard" />
                <span className="title">Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/assets">
                <img src={Assets} alt="Assets" />
                <span className="title">Assets</span>
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/graph">
                <img src={Graph} alt="Graph" />
                <span className="title">Graphs</span>
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/metamask">
                <img src={Wallet} alt="Wallet" />
                <span className="title">Wallet</span>
              </NavLink>
            </li>
          </ul>
        </div>
      ) : (
        <div className="contentsContainerCollapse">
          <ul>
            <li>
              <NavLink exact activeClassName="active" to="/">
                <img src={Dashboard} alt="dashboard" />
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/assets">
                <img src={Assets} alt="Assets" />
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/graph">
                <img src={Graph} alt="Graph" />
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/metamask">
                <img src={Wallet} alt="Wallet" />
              </NavLink>
            </li>
          </ul>
        </div>
      )}

      {isOpen === false ? (
        <div className="contentsContainer2">
          <ul>
            <li>
              <NavLink activeClassName="active" to="/notification">
                <img src={Notification} alt="notification" />
                <span className="title">Notification</span>
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/support">
                <img src={Support} alt="support" />
                <span className="title">Support</span>
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/setting">
                <img src={Setting} alt="setting" />
                <span className="title">Setting</span>
              </NavLink>
            </li>
          </ul>
        </div>
      ) : (
        <div className="contentsContainerCollapse">
          <ul>
            <li>
              <NavLink activeClassName="active" to="/notification">
                <img src={Notification} alt="notification" />
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/support">
                <img src={Support} alt="support" />
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/setting">
                <img src={Setting} alt="setting" />
              </NavLink>
            </li>
          </ul>
        </div>
      )}

      {isOpen === false ? (
        <div className="profile">
          <div className="upper">
            <img src={Dots} alt="dots" className="dots" />
            <img src={Person} alt="profile-photo" className="profile-logo" />
          </div>
          <div className="profileContents">
            <p className="name">
              Hello, Jake <br></br>
              jake123@gmail.com
            </p>
          </div>
        </div>
      ) : (
        <div className="profile" style={{ marginTop: "3.5rem" }}>
          <img
            src={Person}
            alt="profile-photo"
            style={{ width: "45px", height: "45px" }}
            className="profile-logo"
          />
          <div className="profileContents">
            <p className="name">
              Hello<br></br>
              Jake
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
