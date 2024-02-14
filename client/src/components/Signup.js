import React, { useState , useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import "../css/Signup.css"
import Notify from './Notify';
import logcontext from '../context/logContext'

function Signup() {
    const [credentials , setCredentials] = useState({name : "" , phone : "" , password : ""})
    const [message, setMessage] = useState("")
    const [properties, setProperties] = useState({ color: "", backgroundColor: "" })

    const {setLogedIn} = useContext(logcontext)
    const navigate = useNavigate()

    const formSubmit = async(e)=>{
        e.preventDefault();


     try {
        const res = await fetch('http://localhost:8000/add-user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: "include",
            body: JSON.stringify({ phone: credentials.phone, name: credentials.name, password: credentials.password })
        })

        const response = await res.json();
        console.log(response)
        if (response.success) {
            
            setCredentials({ ...credentials, name: "", phone: "", password: "" })
            setLogedIn(true)
            navigate('/');
           
         }
        else {
            setMessage(response.message)
            setProperties({ ...properties, color: "red", backgroundColor: "red" })
             setTimeout(() => {
                setMessage("")
             }, 5000)
              
        }
     } catch (error) {
        console.log(error)
     }
       

    }

    const change = (e)=>{
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }


  return (
    <div className='signup'>
        {message && <Notify message={message} color={properties.color } backgroundColor={properties.backgroundColor} />}
        <div className="formContainer">
                <h2>V-Commerce</h2>
                <h4>SignUp Now To Move forward</h4>
                <form className="form" onSubmit={formSubmit}>
                    <input type="text" name="name" id="name" placeholder='Enter Your Name' onChange={change} value={credentials.name} />
                    <input type="tel" id="phone" name="phone" placeholder='Enter Your Phone Number' onChange={change} value={credentials.phone}></input>
                    <input type="password" name="password" id="password" placeholder='Enter Your Password' onChange={change} value={credentials.password} />
                    <button type='submit' >Submit</button>

                </form>
            </div>
      
    </div>
  )
}

export default Signup
