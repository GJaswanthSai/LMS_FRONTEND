import React, { useState } from "react";
import "../AdminDashboard/AdminDashboard.css";
import "./MemberDashboard.css";

import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import BookIcon from "@material-ui/icons/Book";
import HistoryIcon from "@material-ui/icons/History";
import ReceiptIcon from '@material-ui/icons/Receipt';
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import CloseIcon from "@material-ui/icons/Close";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import { IconButton } from "@material-ui/core";
import Mbooks from "./components/MBooks";
import History from './components/History';
import Profile from "./components/Profile";
import Transaction from "./components/Transaction";
import News from "./components/News";

function MemberDashboard() {
  const [active, setActive] = useState("profile");
  const [sidebar, setSidebar] = useState(false);


  

  

  const logout = () => {
    localStorage.removeItem("user");
    window.location.href = "./signin";
  };

  return (
    <div className="dashboard">
      <div className="dashboard-card">
        <div className="sidebar-toggler" onClick={() => setSidebar(!sidebar)}>
          <IconButton>
            {sidebar ? (
              <CloseIcon style={{ fontSize: 25, color: "rgb(234, 68, 74)" }} />
            ) : (
              <DoubleArrowIcon
                style={{ fontSize: 25, color: "rgb(234, 68, 74)" }}
              />
            )}
          </IconButton>
        </div>
        <div
          className={sidebar ? "dashboard-options active" : "dashboard-options"}
        >
          <div className='dashboard-logo'>
                    <img
                className="user-profileimage"
                src="./assets/images/lib.png"
                alt=""
              ></img>
                        
                        <p className="logo-name">LMS</p>
                    </div>
          <a
            className={`dashboard-option ${
              active === "profile" ? "clicked" : ""
            }`}
            onClick={() => {
              setActive("profile");
              setSidebar(false);
            }}
          >
            <AccountCircleIcon className="dashboard-option-icon" /> Profile 
          </a>

          <a
            className={`dashboard-option ${
              active === "books" ? "clicked" : ""
            }`}
            onClick={() => {
              setActive("books");
              setSidebar(false);
            }}
          >
            <LibraryBooksIcon className="dashboard-option-icon" /> Books
          </a>

          <a
            className={`dashboard-option ${
              active === "transactions" ? "clicked" : ""
            }`}
            onClick={() => {
              setActive("transactions");
              setSidebar(false);
            }}
          >
            <ReceiptIcon className="dashboard-option-icon" /> Transactions
          </a>


          <a
            className={`dashboard-option ${
              active === "news" ? "clicked" : ""
            }`}
            onClick={() => {
              setActive("news");
              setSidebar(false);
            }}
          >
            <BookIcon className="dashboard-option-icon" /> News
          </a>
          
          
          <a
            className={`dashboard-option ${
              active === "history" ? "clicked" : ""
            }`}
            onClick={() => {
              setActive("history");
              setSidebar(false);
            }}
          >
            <HistoryIcon className="dashboard-option-icon" /> History
          </a>
          <a
            className={`dashboard-option ${
              active === "logout" ? "clicked" : ""
            }`}
            onClick={() => {
              logout();
              setSidebar(false);
            }}
          >
            <PowerSettingsNewIcon className="dashboard-option-icon" /> Log out{" "}
          </a>
        </div>
        <div className="member-activebooks-content" style={active !== "profile" ? { display: 'none' } : {}}>
            <Profile/>
          </div>
          <div className="member-activebooks-content" style={active !== "books" ? { display: 'none' } : {}}>
            <Mbooks/>
          </div>
          <div className="member-activebooks-content" style={active !== "history" ? { display: 'none' } : {}}>
            <History/>
          </div>
          <div className="member-activebooks-content" style={active !== "transactions" ? { display: 'none' } : {}}>
            <Transaction/>
          </div>
          <div className="member-activebooks-content" style={active !== "news" ? { display: 'none' } : {}}>
            <News/>
          </div>
      </div>
    </div>
  );
}

export default MemberDashboard;
