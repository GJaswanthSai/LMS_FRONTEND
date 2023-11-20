import React, { useContext, useEffect, useState } from "react";
import "../../AdminDashboard/AdminDashboard.css";
import "../MemberDashboard.css";
import { AuthContext } from "../../../../Context/AuthContext";
import axios from "axios";
import moment from "moment";


function History(){
  const [sidebar, setSidebar] = useState(false);

  const [recentAddedBooks, setRecentAddedBooks] = useState([])
  const API_URL = "https://lms-backend-gts2.onrender.com/"
  const { user } = useContext(AuthContext);
  const [memberDetails, setMemberDetails] = useState(null);
  return(
    <div>    
    <div className="member-history-content" >
            <p className="member-dashboard-heading">History</p>
            <table className="activebooks-table">
              <tr>
                <th>S.No</th>
                <th>Book-Name</th>
                <th>From</th>
                <th>To</th>
                <th>Return Date</th>
              </tr>
              {memberDetails?.prevTransactions?.map((data, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{data.bookName}</td>
                    <td>{data.fromDate}</td>
                    <td>{data.toDate}</td>
                    <td>{data.returnDate}</td>
                  </tr>
                );
              })}
            </table>
          </div>
    </div>
  )
    
}

export default History;