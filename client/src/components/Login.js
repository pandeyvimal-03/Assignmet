import React, {useState , useContext} from 'react'
import Notify from './Notify'
import "../css/Login.css"
import logcontext from "../context/logContext"
import { useNavigate } from 'react-router-dom'

function Login() {
    const navigate = useNavigate()
    const [credentials , setCredentials] = useState({phone : "" , password : ""})
    const [message, setMessage] = useState("")
    const [properties, setProperties] = useState({ color: "", backgroundColor: "" })

    const {setLogedIn} = useContext(logcontext)
    
    
    const formSubmit = async(e)=>{
        e.preventDefault();

        try {
                    const res = await fetch(`http://localhost:8000/login-user`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    credentials: "include",
                    body: JSON.stringify({ phone: credentials.phone,  password: credentials.password })
                })

                const response = await res.json();
                console.log("our resoponse is : ",response)
                if (response.success) {
                    setCredentials({ ...credentials,  phone: "", password: "" })
                    setLogedIn(true)
                    navigate('/')
                    
                }
                else {

                    setMessage(response.message)
                    setProperties({ ...properties, color: "red", backgroundColor: "red" })
                    setTimeout(() => {
                        setMessage("")
                    }, 5000)

        }
        } catch (error) {

              console.error
        }
        

    }

    const change = (e)=>{

        setCredentials({...credentials , [e.target.name] : e.target.value})

    }
    
  return (
    <div className="loginPage">
         <div className='login'>
        {message && <Notify message={message} color={properties.color } backgroundColor={properties.backgroundColor} />}
        <h3>Login to use <span>V-Commerce</span></h3>
        <form className='form' onSubmit={formSubmit}>
            <input type="tel" name="phone" id="phone" placeholder='Enter your phone' onChange={change}/>
            <input type="password" name="password" id="password" placeholder='Enter your password'onChange={change} />
            <button type='submit'>Submit</button>

        </form>
      
    </div>
    </div>
   
  )
}

export default Login
