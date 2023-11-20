import React, { useState, useEffect } from "react";
import axios from "axios";
import "../AdminDashboard.css"

const Editform=({ bookId, onClose, onUpdate })=>{
    const[formData, setFormData] = useState({
        bookName: "",
        author:"",
        language:"",
        publisher:"",
        bookCountAvailable: "",
      });
      useEffect(() => {
    
        axios.get("https://lms-backend-gts2.onrender.com/api/books/updatebook/" +bookId)
          .then((res) => {
            if (res.status === 200) {
              
              setFormData(res.data); 
            } else {
              console.error("Failed to fetch course details.");
            }
          })
          .catch((err) => {
            console.error("Error fetching course details:", err);
          });
      }, [bookId]);
    

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };

      const handleSubmit = () => {
        axios.put('https://lms-backend-gts2.onrender.com/api/books/updatebook/'+bookId , formData)
          .then((res) => {
            if (res.status === 200) {
                alert("Book updated succesfully")
              onUpdate(); 
              onClose(); 
              window.location.href ='./dashboard@admin';
            } else {
              console.error("Failed to update book details.");
            }
          })
          .catch((err) => {
            console.error("Error updating book details:", err);
          });
      };
    

    return(
    <div className="edit-form-modal">
      <div className="edit-form-content">
        <h2>Edit Book</h2>
        <form className='addbook-form' >

                <label className="addbook-form-label" htmlFor="bookName">Book Name<span className="required-field">*</span></label><br />
                <input className="addbook-form-input" type="text" name="bookName" value={formData.bookName} onChange={handleInputChange} required></input><br />

                <label className="addbook-form-label" htmlFor="author">Author Name<span className="required-field">*</span></label><br />
                <input className="addbook-form-input" type="text" name="author" value={formData.author} onChange={handleInputChange} required></input><br />

                <label className="addbook-form-label" htmlFor="language">Language</label><br />
                <input className="addbook-form-input" type="text" name="language" value={formData.language} onChange={handleInputChange}  ></input><br />

                <label className="addbook-form-label" htmlFor="publisher">Publisher</label><br />
                <input className="addbook-form-input" type="text" name="publisher" value={formData.publisher} onChange={handleInputChange} ></input><br />

                <label className="addbook-form-label" htmlFor="bookCountAvailable">No.of Copies Available<span className="required-field">*</span></label><br />
                <input className="addbook-form-input" type="text" name="bookCountAvailable" value={formData.bookCountAvailable} onChange={handleInputChange} required></input><br />

                <button className="addbook-submit" type="button" onClick={handleSubmit}>Update</button>
                <button className="addbook-submit" type="button" onClick={onClose}>Cancel</button>
            </form>
      </div>
    </div>
    );
};

export default Editform;