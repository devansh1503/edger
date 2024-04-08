export const Login = () =>{
    const outerStyle = {
        width:'100%',
        display:'flex',
        justifyContent: 'center',
        marginTop:'10%'
    }
    const mainStyle = {
        backgroundColor:'black',
        color:'white',
        padding:'25px',
        fontSize:"20px",
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems: 'center',
        width:'fit-content',
        borderRadius:'15px'
    }
    const btnStyle = {
        border:'none',
        background:'none',
        color:"white",
        fontSize:'22px',
        margin:'20px',
        padding:'10px',
        backgroundColor:"#006FFF",
        borderRadius:'15px',
        cursor:'pointer'
    }
    return (
        <div style={outerStyle}>
            <div style={mainStyle}>
                <p>You Are Not Logged In </p>
                <p>please Log-in/Sign-up to continue</p>
                <div>
                    <button style={btnStyle}>Login</button>
                    <button style={btnStyle}>Sign-up</button>
                </div>
            </div>
        </div>
    )
}