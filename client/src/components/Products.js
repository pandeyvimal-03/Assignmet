import React ,{useContext, useEffect, useState} from 'react'
import "../css/Products.css"
import Items from './Items'
import logcontext from '../context/logContext'
import { useNavigate } from 'react-router-dom'

function Products() {

    const navigate = useNavigate()
    const {setLogedIn} = useContext(logcontext)
    const [show , setShow] = useState(false)
    const [data , setData]  = useState([])

   const fetchData =  async ()=>{

    try {
        const res = await fetch("http://localhost:8000/getData" , {
                method : "GET",
                credentials: "include"
            })
       
        const response = await res.json()
       
        if(response.success){
            setData(response.data)
            setLogedIn(true)
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

        fetchData();
     } , [])


  return (
    <div className='products'>
      {
        show &&
         data?.map((e)=>{
            return <Items key={e.id} data={e}/>
         })
      }
    </div>
  )
}

export default Products
