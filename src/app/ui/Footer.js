import Link from "next/link"

export const Footer = ({
    setType,
}) =>{
    const mainStyle = {
        backgroundColor:'black',
        color:'white',
        padding:'25px',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems: 'center',
        position:'absolute',
        bottom: 0,
        width: '100%',
        height: '50px',
        position: 'fixed',
    }
    return <div style={mainStyle}>
        <img onClick={()=>{setType("photography")}} style={{width:'30px'}} src="https://clipart-library.com/images/8T65oRakc.png"></img>
        <img onClick={()=>{setType("wallpaper")}} style={{width:'30px'}} src="https://www.pngkey.com/png/full/50-505769_gallery-gallery-white-icon-png.png"></img>
        <img onClick={()=>{setType("quotes")}} style={{width:'30px'}} src="https://www.pikpng.com/pngl/b/60-601361_white-pencil-pen-icon-white-png-clipart.png"></img>
        <Link href=''><img style={{width:'30px'}} src="https://freesvg.org/img/abstract-user-flat-4.png"></img></Link>
    </div>
}