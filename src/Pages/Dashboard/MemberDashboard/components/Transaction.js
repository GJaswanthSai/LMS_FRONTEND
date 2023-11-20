import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import { AuthContext } from "../../../../Context/AuthContext";

function Transaction(){
    
  const [memberDetails, setMemberDetails] = useState(null);
  const [recentAddedBooks, setRecentAddedBooks] = useState([])
  const API_URL = "https://lms-backend-gts2.onrender.com/";
  const { user } = useContext(AuthContext);
  useEffect(() => {
    const getMemberDetails = async () => {
      try {
        const response = await axios.get(
          API_URL + "api/users/getuser/" + user._id
        );
        setMemberDetails(response.data);
      } catch (err) {
        console.log("Error in fetching the member details");
      }
    };
    getMemberDetails();
  }, [API_URL, user]);

  useEffect(() => {
    const getallBooks = async () => {
        const response = await axios.get(API_URL + "api/books/allbooks")
        setRecentAddedBooks(response.data.slice(0, 5))
    }
    getallBooks()
}, [API_URL])

    return(
        <div>
        <div className="member-activebooks-content" >
            <p className="member-dashboard-heading">Issued</p>
            <table className="activebooks-table">
              <tr>
                <th>S.No</th>
                <th>Book-Name</th>
                <th>From Date</th>
                <th>To Date</th>
                <th>Fine</th>
              </tr>
              {memberDetails?.activeTransactions
                ?.filter((data) => {
                  return data.transactionType === "Issued";
                })
                .map((data, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{data.bookName}</td>
                      <td>{data.fromDate}</td>
                      <td>{data.toDate}</td>
                      <td>
                        {Math.floor(
                          (Date.parse(moment(new Date()).format("MM/DD/YYYY")) -
                            Date.parse(data.toDate)) /
                            86400000
                        ) <= 0
                          ? 0
                          : Math.floor(
                              (Date.parse(
                                moment(new Date()).format("MM/DD/YYYY")
                              ) -
                                Date.parse(data.toDate)) /
                                86400000
                            ) * 10}
                      </td>
                    </tr>
                  );
                })}
            </table>
        </div>
        <div className="member-reservedbooks-content">
            <p className="member-dashboard-heading">Reserved</p>
            <table className="activebooks-table">
              <tr>
                <th>S.No</th>
                <th>Book-Name</th>
                <th>From</th>
                <th>To</th>
              </tr>
              {memberDetails?.activeTransactions
                ?.filter((data) => {
                  return data.transactionType === "Reserved";
                })
                .map((data, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{data.bookName}</td>
                      <td>{data.fromDate}</td>
                      <td>{data.toDate}</td>
                    </tr>
                  );
                })}
            </table>
        </div>
        </div>
    )
}

export default Transaction;