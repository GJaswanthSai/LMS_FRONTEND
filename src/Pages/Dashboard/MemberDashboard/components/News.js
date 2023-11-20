import React from "react";
import "../../AdminDashboard/AdminDashboard.css";
import cnn from "../../../../images/cnn.png"
import bbc from "../../../../images/bbc.png"
import reuters from "../../../../images/reuters.png"
import times from "../../../../images/timesnow.jpg"
import "../MemberDashboard.css";
import "./news.css";

function News(){
    return(
<div>
  <br/>
  <p className="member-dashboard-heading">News Links</p>
    <div className="news" >
            
            <div className="news-card">
              <img src={cnn} alt="cnn logo"></img>
              <p className="newscard-title">CNN</p>
              <div >
                  <a href="https://edition.cnn.com/" target="_blank"><button className="click-button">Click here</button></a>
              </div>
              <div className="bookcard-emptybox"></div>
            </div>
            <div className="news-card">
              <img src={bbc} alt="bbc logo"></img>
              <p className="newscard-title">BBC</p>
              <div >
                  <a href="https://www.bbc.com/news" target="_blank"><button className="click-button">Click here</button></a>
              </div>
              <div className="bookcard-emptybox"></div>
            </div>
            <div className="news-card">
              <img src={reuters} alt="reuters logo"></img>
              <p className="newscard-title">Reuters</p>
              <div >
                  <a href="https://www.reuters.com/" target="_blank"><button className="click-button">Click here</button></a>
              </div>
              <div className="bookcard-emptybox"></div>
            </div>
            <div className="news-card">
              <img src={times} alt="times now logo"></img>
              <p className="newscard-title">Times Now</p>
              <div >
                  <a href="https://www.timesnownews.com/latest-news" target="_blank"><button className="click-button">Click here</button></a>
              </div>
              <div className="bookcard-emptybox"></div>
            </div>
        </div>
    </div>
    )
}

export default News;