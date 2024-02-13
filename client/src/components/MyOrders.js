import { useContext, useState  , useEffect} from "react"
import { useNavigate } from 'react-router-dom';
import "../css/MyOrders.css"
import logcontext from "../context/logContext"
import Items from "./Items";

function MyOrders() {
    const navigate = useNavigate()
    const {logedIn , countOrder} = useContext(logcontext)
    const [show  , setShow] = useState(false)
    const [orders , setOrders] = useState([])

    const fetchOrders = async ()=>{
              console.log("fetching the data")
        try {
            const res = await fetch("http://localhost:8000/myOrders" , {
                method : "GET",
                credentials: "include"
            })
            const response = await res.json()
            console.log(response)

            if(response.success){
                
                setOrders(response.orders)
                setShow(true)
            }
            else{
                navigate('/login')
            }

        } catch (error) {
            console.log(error)
        }
        
    }

    useEffect(()=>{

        if(!logedIn){
           
            navigate('/login')
        }
        else{

            if(countOrder > 0){
                
                fetchOrders();
            }
            else{
                setShow(true)
            }
        }


    } , [])

  return (
    <div className='myOrders'>
        {show && (
        <>
            <h1>Your Orders: { orders.length || countOrder}</h1>
            {orders && (
               
               orders.map((e)=>{
                return <Items key={e.user} data={e} />
               })
               
            )}
        </>
    )}
     
    </div>
  )
}

export default MyOrders
