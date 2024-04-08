import Link from "next/link"

export const Header = () =>{
    const mainStyle = {
        backgroundColor:'black',
        color:'white',
        padding:'25px',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems: 'center',
        position:'absolute',
        top: 0,
        width: '100%',
        height: '50px',
        position: 'fixed',
    }
    return <div style={mainStyle}>
        <div></div>
        <h1 className="heading">EDGER</h1>
        <Link href=''><img style={{width:'30px'}} src="https://static-00.iconduck.com/assets.00/notification-icon-2047x2048-qbq87wz5.png"></img></Link>
    </div>
}