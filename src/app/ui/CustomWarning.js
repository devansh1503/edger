export const CustomWarning = ({
    setDisplay
}) => {
    const mainStyle={
        backgroundColor:'white',
        width:'70%',
        position:'absolute',
        top:'50%',
        left:'50%',
        transform: 'translate(-50%, -50%)',
        padding:'25px',
        borderRadius:'15px',
        boxShadow:'10px 10px 10px black',
        zIndex:'1000'
    }
    return (
    <div style={mainStyle} className="warning">
        <div style={{display:'flex', justifyContent:'space-between', alignItems:"center", marginBottom:'10px'}}>
            <div style={{display:'flex', justifyContent:"center", alignItems:"center"}}>
                <img style={{width:'40px'}} src='https://cdn.iconscout.com/icon/free/png-256/free-warning-5320925-4434100.png?f=webp'></img>
                <p>Please Note:</p>
            </div>
            <div>
                <img onClick={()=>{setDisplay(false)}} style={{width:'25px'}} src="https://icons.veryicon.com/png/o/miscellaneous/medium-thin-linear-icon/cross-23.png"></img>
            </div>
        </div>
        <div>
            <p>The Application Uses Unsplash API for images, which is limited to 50 calls per hour. So, do try to lessen the numbers of reloads. Also Do support the Artists by clicking their name above the image.</p>
            <p>Thanks</p>
        </div>
    </div>)
}