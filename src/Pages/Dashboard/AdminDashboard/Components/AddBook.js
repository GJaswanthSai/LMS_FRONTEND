import React, { useContext, useEffect, useState } from 'react'
import "../AdminDashboard.css"
import axios from "axios"

import { AuthContext } from '../../../../Context/AuthContext'
import { Dropdown } from 'semantic-ui-react'

function AddBook() {

    const API_URL = "https://lms-backend-gts2.onrender.com/"
    const [isLoading, setIsLoading] = useState(false)
    const { user } = useContext(AuthContext)


    const [bookName, setBookName] = useState("")
    const [onlineLink,setOnlineLink] = useState("")
    const [author, setAuthor] = useState("")
    const [bookCountAvailable, setBookCountAvailable] = useState(null)
    const [language, setLanguage] = useState("")
    const [publisher, setPublisher] = useState("")
    const [categories,setcategories] = useState(null)
    const [recentAddedBooks, setRecentAddedBooks] = useState([])


    


    const addBook = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        const BookData = {
            bookName: bookName,
            onlineLink: onlineLink,
            author: author,
            bookCountAvailable: bookCountAvailable,
            language: language,
            publisher: publisher,
            categories: categories,
            isAdmin: user.isAdmin
        }
        try {
            const response = await axios.post(API_URL + "api/books/addbook", BookData)
            if (recentAddedBooks.length >= 5) {
                recentAddedBooks.splice(-1)
            }
            setRecentAddedBooks([response.data, ...recentAddedBooks])
            setBookName("")
            setOnlineLink("")
            setAuthor("")
            setBookCountAvailable(null)
            setLanguage("")
            setPublisher("")
            setcategories("")
            alert("Book Added Successfully 🎉")
        }
        catch (err) {
            console.log(err)
        }
        setIsLoading(false)
    }


    useEffect(() => {
        const getallBooks = async () => {
            const response = await axios.get(API_URL + "api/books/allbooks")
            setRecentAddedBooks(response.data.slice(0, 5))
        }
        getallBooks()
    }, [API_URL])

    const categoryTypes = [
        {value: "Comics", text: "Comics"},
        {value: "Horror", text: "Horror"},
        {value: "Crime", text: "Crime"},
        {value: "Mystery", text: "Mystery"},
        {value: "Fantasy", text: "Fantasy"},
        {value: "Auto-biography", text: "Auto-biography"},
        {value: "Sci-fi", text: "Sci-fi"},
        {value: "Novel", text: "Novel"},
        {value: "Drama", text: "Drama"},
        {value: "Romance", text: "Romance"},
        {value: "Adventure-fiction", text: "Adventure-Fiction"}
    ]

    return (
        <div>
            <p className="dashboard-option-title">Add a Book</p>
            <div className="dashboard-title-line"></div>
            <form className='addbook-form' onSubmit={addBook}>

                <label className="addbook-form-label" htmlFor="bookName">Book Name<span className="required-field">*</span></label><br />
                <input className="addbook-form-input" type="text" name="bookName" value={bookName} onChange={(e) => { setBookName(e.target.value) }} required></input><br />

               
                <label className="addbook-form-label" htmlFor="author">Author Name<span className="required-field">*</span></label><br />
                <input className="addbook-form-input" type="text" name="author" value={author} onChange={(e) => { setAuthor(e.target.value) }} required></input><br />

                <label className="addbook-form-label" htmlFor="language">Language</label><br />
                <input className="addbook-form-input" type="text" name="language" value={language} onChange={(e) => { setLanguage(e.target.value) }}></input><br />

                <label className="addbook-form-label" htmlFor="publisher">Publisher</label><br />
                <input className="addbook-form-input" type="text" name="publisher" value={publisher} onChange={(e) => { setPublisher(e.target.value) }}></input><br />

                <label className="addbook-form-label" htmlFor="copies">No.of Copies Available<span className="required-field">*</span></label><br />
                <input className="addbook-form-input" type="text" name="copies" value={bookCountAvailable} onChange={(e) => { setBookCountAvailable(e.target.value) }} required></input><br />

                <label className="addbook-form-label" htmlFor="publisher">Online Link</label><br />
                <input className="addbook-form-input" type="text" name="onlineLink" value={onlineLink} onChange={(e) => { setOnlineLink(e.target.value) }}></input><br />

                <label className="addbook-form-label" htmlFor="categories">Categories<span className="required-field">*</span></label><br />
                <div className="semanticdropdown">
                    <Dropdown
                        placeholder='Category'
                        fluid
                        selection
                        options={categoryTypes}
                        value={categories}
                        onChange={(event, data) => setcategories(data.value)}
                    />
                </div>

                <input className="addbook-submit" type="submit" value="SUBMIT" disabled={isLoading}></input>
            </form>
            <div>
                <p className="dashboard-option-title">Recently Added Books</p>
                <div className="dashboard-title-line"></div>
                <table className='admindashboard-table'>
                    <tr>
                        <th>S.No</th>
                        <th>Book Name</th>
                        <th>Added Date</th>
                        <th>Stock</th>
                    </tr>
                    {
                        recentAddedBooks.map((book, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{book.bookName}</td>
                                    <td>{book.createdAt.substring(0, 10)}</td>
                                    <td>{book.bookCountAvailable}</td>
                                </tr>
                            )
                        })
                    }
                </table>
            </div>
        </div>
    )
}

export default AddBook