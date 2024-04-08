import axios from "axios"
import { useEffect, useState } from "react"

export const Photo = () =>{
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        fetchData()
    },[])
    const fetchData = async() =>{
        await axios.get("https://api.unsplash.com//photos/random?client_id=nS5qArDQZI_NJLyyxxiuzNX7LttEUH9TiBnozZ8ZK9s&count=20")
        .then((res)=>{
             setData(res.data)
             setLoading(false)
         })
        .catch((err)=>{
             console.log(err)
         })
    }
    return <div style={{marginTop:'40px', marginBottom:'30px'}}>
        {
            !loading && data.map((item, index)=>{
                return <div key={index}>
                    <img style={{width:"100vw", marginBottom:'20px'}} src={item.urls.full}></img>
                </div>
            })
        }
    </div>
}