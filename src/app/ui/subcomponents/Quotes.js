import axios from "axios"
import { useEffect, useState } from "react"


export const Quotes = () =>{
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])
    useEffect(()=>{
        fetchData()
    },[])
    const fetchData = async() =>{
        await axios.get("https://api.quotable.io/quotes/random?limit=20")
        .then((res)=>{
             setData(res.data)
             setLoading(false)
         })
        .catch((err)=>{
             console.log(err)
         })
    }
    return <div className="quotes" style={{marginTop:'40px', marginBottom:'30px', color:'orange'}}>
        {loading && <div className="loader"></div>}
        {
            !loading && data.map((item, index)=>{
                return <div style={{width:'100%', height:'fit-content', padding:'40px', backgroundColor:'black', marginBottom:'20px'}} key={index}>
                    <p style={{ fontSize:'35px', fontWeight:'700'}}>{item.content}</p>
                    <p style={{ fontSize:'20px', fontWeight:'500', marginTop:'20px'}}>- {item.author}</p>
                </div>
            })
        }
    </div>
}