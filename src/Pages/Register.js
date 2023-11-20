import React, { useContext, useState } from 'react'
import './register.css'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { Dropdown } from 'semantic-ui-react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Footer from '../Components/Footer'

import moment from 'moment';

function Register() {
    
    const API_URL = "https://lms-backend-gts2.onrender.com/"
    const [isLoading, setIsLoading] = useState(false)

    const [userFullName, setUserFullName] = useState(null)
    const [admissionId, setAdmissionId] = useState(null)
    const [employeeId, setEmployeeId] = useState(null)
    const [address, setAddress] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [mobileNumber, setMobileNumber] = useState(null)
    const [recentAddedMembers, setRecentAddedMembers] = useState([])
    const [userType, setUserType] = useState(null)
    const [gender, setGender] = useState(null)
    const [age, setAge] = useState(null)
    const [dob, setDob] = useState(null)
    const [dobString, setDobString] = useState(null)


    const genderTypes = [
        { value: "Male", text: "Male" },
        { value: "Female", text: "Female" }
    ]

    const userTypes = [
        { value: 'Staff', text: 'Staff' },
        { value: 'Student', text: 'Student' }
    ]


    const addMember = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        if (userFullName !== null && userType !== null && age !== null && dobString !== null && gender !== null && address !== null && mobileNumber !== null && email !== null && password !== null) {
            const userData = {
                userType: userType,
                userFullName: userFullName,
                admissionId: admissionId,
                employeeId: employeeId,
                age: age,
                dob: dobString,
                gender: gender,
                address: address,
                mobileNumber: mobileNumber,
                email: email,
                password: password
            }
            try {
                const response = await axios.post(API_URL + "api/auth/register", userData)
                if (recentAddedMembers.length >= 5) {
                    recentAddedMembers.splice(-1)
                }
                setRecentAddedMembers([response.data, ...recentAddedMembers])
                setUserFullName(null)
                setUserType("Student")
                setAdmissionId(null)
                setEmployeeId(null)
                setAddress(null)
                setMobileNumber(null)
                setEmail(null)
                setPassword(null)
                setGender(null)
                setAge(null)
                setDob(null)
                setDobString(null)
                alert("Member Added")
            }
            catch (err) {
                console.log(err)
            }
        }
        else {
            alert("All the fields must be filled")
        }
        setIsLoading(false)
    }

    

    return (
        <div className='signup-container'>
            <br/><br/>
            <div className="signup-card">
                <form onSubmit={addMember}>
                    <h2 className="signup-title"> Register</h2>
                    <p className="line"></p>
                    <div className="user-title">
                        <br/>
                        <label>Select User Type </label>
                        </div>
                    <div className='semanticdropdown'>
                    <Dropdown
                        placeholder='User Type'
                        fluid
                        selection
                        options={userTypes}
                        onChange={(event, data) => setUserType(data.value)}
                    />
                    <br/>
                </div>
                <div className="signup-fields"> 
                <label htmlFor="userFullName">Full Name &nbsp;&nbsp;</label>
                <input className="signup-textbox" type="text" name="userFullName" value={userFullName} required onChange={(e) => setUserFullName(e.target.value)}></input>
                </div>

                <div className="signup-fields">
                <label htmlFor={userType === "Student" ? "admissionId" : "employeeId"}>{userType === "Student" ? "Admission Id" : "Employee Id"}</label>
                <input className="signup-textbox" type="text" value={userType === "Student" ? admissionId : employeeId} required onChange={(e) => { userType === "Student" ? setAdmissionId(e.target.value) : setEmployeeId(e.target.value) }}></input>
                </div>

                <div className="signup-fields">
                <label htmlFor="mobileNumber">Mobile Number</label><br />
                <input className="signup-textbox" type="text" value={mobileNumber} required onChange={(e) => setMobileNumber(e.target.value)}></input>
                </div>

                <div className="signup-fields">
                <label htmlFor="gender">Gender&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <div className='signup-textbox'>
                    <Dropdown
                        placeholder='Select your Gender'
                        fluid
                        selection
                        value={gender}
                        options={genderTypes}
                           onChange={(event, data) => setGender(data.value)}
                    />
                </div>
                </div>
                
                <div className="signup-fields">
                <label htmlFor="age">Age &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input className="signup-textbox" type="text" value={age} required onChange={(e) => setAge(e.target.value)}></input>
                </div>

                <div className="signup-fields">
                <label htmlFor="dob">Date of Birth&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <DatePicker
                    className="signup-textbox"
                    placeholderText="MM/DD/YYYY"
                    selected={dob}
                    onChange={(date) => { setDob(date); setDobString(moment(date).format("MM/DD/YYYY")) }}
                    dateFormat="MM/dd/yyyy"
                />
                </div>

                <div className="signup-fields">
                <label  htmlFor="address">Address&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input className="signup-textbox" value={address} type="text" required onChange={(e) => setAddress(e.target.value)}></input>
                </div>

                <div className="signup-fields">
                <label htmlFor="email">Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input className="signup-textbox" type="email" value={email} required onChange={(e) => setEmail(e.target.value)}></input>
                </div>

                <div className="signup-fields">
                <label htmlFor="password">Password&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input className="signup-textbox" type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                <input className="signup-button" type="submit" value="SUBMIT" disabled={isLoading} ></input>
                <div className='signin-option'>
            <p className="signin-question">Already have an account?</p>
        </div>
        <Link to="/signin"><button className="login-button">Log in</button></Link>
        </form>
                
        
            </div>
            <br/><br/>
            <div className='footer-width'><Footer /></div>
            
        </div>
        
    )
}

export default Register