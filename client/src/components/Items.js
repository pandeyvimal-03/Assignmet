import React ,{useState , useContext} from 'react'
import '../css/Item.css'
import Notify from './Notify'
import logcontext from '../context/logContext'


function Items(props) {
    const { name , category , price} = props.data
    const [message, setMessage] = useState("")
    const [properties, setProperties] = useState({ color: "", backgroundColor: "" })
    const {countOrder , setCountOrder} = useContext(logcontext)

   
    const buyNow = async()=>{
        
        try {
            const res = await fetch('http://localhost:8000/addOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: "include",
            body: JSON.stringify({ name : name , category : category , price : price })
        })
        const response = await res.json()
        if(response.success){
            
            setCountOrder(countOrder+1)
            setMessage(response.message)
            setTimeout(() => {
                setMessage("")
             }, 5000)
            setProperties({ ...properties, color: "green", backgroundColor: "green" })
        }
        else{
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
  return (
    <div className='item'>
        {message && <Notify message={message} color={properties.color } backgroundColor={properties.backgroundColor}/>}
        
        
        <div className="pname">{name}</div>
        <div className="category">{category}</div>
        <div className="price">₹ {price}</div>
        <div><button className='buy' onClick={buyNow}>Buy</button></div>
        
       
      
    </div>
  )
}

export default Items
