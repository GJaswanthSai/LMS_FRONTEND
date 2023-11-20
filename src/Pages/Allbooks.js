import React from "react";
import "./Allbooks.css";
import harrypotter from "../images/harrypotter.png";
import call from "../images/call.jpg";
import PopularBooks from '../Components/PopularBooks'
import RecentAddedBooks from '../Components/RecentAddedBooks'
import Footer from '../Components/Footer'

function Allbooks() {
  return (
    
    <div className="books-page">
      
      <br /><br />
      <PopularBooks/>
      <div className="books">
        <div className="book-card">
          <img
            src={harrypotter}
            alt=""
          ></img>
          <p className="bookcard-title">Harry Potter</p>
          <p className="bookcard-author">By JK Rowling</p>
          <div className="bookcard-category">
            <p>Fantasy</p>
          </div>
          <div className="bookcard-emptybox"></div>
        </div>
        <div className="book-card">
          <img
            src={call}
            alt=""
          ></img>
          <p className="bookcard-title">The Call Of the Wild</p>
          <p className="bookcard-author">By Jack London</p>
          <div className="bookcard-category">
            <p>Adventure Fiction</p>
          </div>
          <div className="bookcard-emptybox"></div>
        </div>
        <div className="book-card">
          <img
            src="https://m.media-amazon.com/images/I/61gC1cVToDL._SL1134_.jpg"
            alt=""
          ></img>
          <p className="bookcard-title">Elon Musk</p>
          <p className="bookcard-author">By Elon Musk</p>
          <div className="bookcard-category">
            <p>Auto Biography</p>
          </div>
          <div className="bookcard-emptybox"></div>
        </div>

      </div>
      <br /><br /><br />
      <RecentAddedBooks/>
      
      <Footer/>
    </div>
    
  );
}

export default Allbooks;
