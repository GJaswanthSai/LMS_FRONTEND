import React, {  useEffect, useState } from 'react'
import "../AdminDashboard.css"
import axios from "axios"
import EditForm from "./Editform";


function BookDetsils() {

  const API_URL = "https://lms-backend-gts2.onrender.com/"
    const [memberId, setMemberId] = useState(null)
    const [recentAddedBooks, setRecentAddedBooks] = useState([])
    const [selectedBook, setSelectedBook] = useState(null);
    const [isEditFormVisible, setIsEditFormVisible] = useState(false);
    const handleEditBook = (bookId) => {
        setSelectedBook(bookId);
        setIsEditFormVisible(true);
      };
    

    useEffect(() => {
        const getallBooks = async () => {
            const response = await axios.get(API_URL + "api/books/allbooks")
            setRecentAddedBooks(response.data)
        }
        getallBooks()
    }, [API_URL])

    const handleUpdate = () => {
        setIsEditFormVisible(false);
      };
    

    const deletebook = async (bookId) => {
        try {
          await axios.delete(API_URL + `api/books/removebook/${bookId}`, {
            data: { memberId: memberId, isAdmin: true }
          });
          console.log("Book has been deleted");
          alert("Book has been deleted")
          window.location.href="./dashboard@admin"
        } catch (err) {
          console.error(err);
        }
      };

    return (
        <div>
            
                <p className="dashboard-option-title">Book Details</p>
                <div className="dashboard-title-line"></div>
                <table className='admindashboard-table'>
                    <tr>
                        <th>S.No</th>
                        <th>Book Name</th>
                        <th>Author</th>
                        <th>Category</th>
                        <th>Online Link</th>
                        <th>Stock</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                    {
                        recentAddedBooks.map((book, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{book.bookName}</td>
                                    <td>{book.author}</td>
                                    <td>{book.categories}</td>
                                    <td><a href={book.onlineLink} target='_blank'><button className='edit-button'>Online Book</button></a></td>
                                    <td>{book.bookCountAvailable}</td>
                                    <td><button className='edit-button' onClick={() => handleEditBook(book._id)}>Edit </button></td>
                                    <td><button className='edit-button' onClick={() => deletebook(book._id)}>Delete</button></td>
                                </tr>
                            )
                        })
                    }
                </table>

                {isEditFormVisible && (
        <div className="edit-form-overlay">
          <EditForm bookId={selectedBook} onClose={() => setIsEditFormVisible(false)} onUpdate={handleUpdate}  />
        </div>
      )}

            </div>
    )



}

export default BookDetsils;