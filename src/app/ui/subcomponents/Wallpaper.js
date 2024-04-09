import axios from "axios"
import { useEffect, useState } from "react"

export const Wallpaper = () => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])
    useEffect(()=>{
        fetchData()
    },[])
    const fetchData = async() =>{
        await axios.get("https://meme-api.com/gimme/40")
        .then((res)=>{
             setData(res.data.memes)
             setLoading(false)
         })
        .catch((err)=>{
             console.log(err)
         })
    }
    return <div style={{marginTop:'40px', marginBottom:'30px'}}>
        {loading && <div className="loader"></div>}
        {
            !loading && data.map((item, index)=>{
                return <div key={index}>
                    <img style={{width:"100vw", marginBottom:'20px'}} src={item.preview[item.preview.length-1]}></img>
                </div>
            })
        }
    </div>
}