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
        {loading && <div className="loader"></div>}
        {
            !loading && data.map((item, index)=>{
                return <div key={index} className="wallpaper">
                    <div
                     onClick={()=>{
                        window.open(item.user.portfolio_url, '_blank')
                     }}
                     style={{backgroundColor:"rgb(17, 17, 17)", padding:'25px', borderTopLeftRadius:"15px", borderTopRightRadius:"15px", color:'white', fontSize:'20px', display:'flex', alignItems:"center"}}>
                        <img style={{width:"30px", height:'30px', borderRadius:'50%'}} src={item.user.profile_image.small}></img>
                        <p style={{marginLeft:'10px'}}>{item.user.name}</p>
                    </div>
                    <img style={{width:"100vw"}} src={item.urls.full}></img>
                    <div style={{backgroundColor:"rgb(17, 17, 17)", padding:'25px', borderBottomLeftRadius:"15px", borderBottomRightRadius:"15px", color:'white', fontSize:'25px'}}>
                        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                            <div style={{display:"flex",justifyContent:'center', alignItems:"center"}}>
                                <img style={{width:"30px"}} src="https://www.freeiconspng.com/thumbs/heart-icon/heart-icon-14.png"></img>
                                <p className="likes-count">{item.likes}</p>
                            </div>
                            <div onClick={()=>{window.open(item.links.download)}}>
                                <img style={{width:"40px"}} src="https://www.freeiconspng.com/uploads/white-download-icon-png-32.png"></img>
                            </div>
                        </div>
                        <div>
                            <p>{item.alt_description}</p>
                        </div>
                    </div>
                </div>
            })
        }
    </div>
}