import React from 'react'
import './About.css'
import library from "../images/library.jpeg";

function About() {
    return (
        <div className='about-box'>
            <h2 className="about-title">About</h2>
            <div className="about-data">
                <div className="about-img">
                    <img src={library} alt="" />
                </div>
                <div>
                    <p className="about-text">
                    Our library management system, developed in collaboration with a team of developers, provides comprehensive and user-friendly features for efficient management of libraries. Instead of using paper records and manual processes, it uses computer software to organize and manage everything. With this system, librarians can easily catalog books, track who has borrowed them, and handle things like due dates and late fees. It also allows library users to reserve books, and even access digital copies if available. It simplifies the management of a library, making it more efficient and user-friendly for both the staff and patrons.
                    <br/>
                    <br/>
                     MongoDB is used as the database to store and manage information about books, patrons, transactions, and other library-related data. React is used for building the front-end user interface of the LMS. Users can search for books, check availability, and perform various actions like reserving or borrowing books. <br/>
                        <br/>
                        Overall, our library management system is designed to revolutionize the way libraries are managed and provide an optimal experience for both library administrators and users. We hope that you find it to be a valuable asset to your library operations and that it contributes significantly to the overall improvement and success of your library.<br/>
                        <br/>
                        
                        Your suggestions for improvement are always welcome!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
