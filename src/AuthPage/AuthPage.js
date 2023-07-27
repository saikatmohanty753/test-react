import React, { useState, CSSProperties } from 'react'
import valley from "../assets/valley.jpeg";
import LoginForm from './LoginForm';
import SignUp from './SignUp';

const AuthPage = () => {
  const [hasAccount, setHasAccount] = useState(true)
  const backgroundImage = {
    backgroundImage: `url(${valley})`
  }
  return (
    <div className='background-image' style={backgroundImage}>
        <div className='background-gradient-dark'>
            <div style={styles.formContainerStyle}>
                <div style={styles.titleStyle}>Chat</div>
                {hasAccount?(
                    <LoginForm onHasNoAccount={()=>setHasAccount(false)} />
                ):(
                    <SignUp onHasNoAccount={()=>setHasAccount(true)} />
                )}
            </div>
        </div>
    </div>
  )
}

const styles = {
    formContainerStyle:{
        width:'100%',
        maxWidth: "650px",
        padding: "36px 72px",
    },
    titleStyle:{
        fontSize: "24px",
        fontFamily: "VisbyRoundCF-Heavy",
        letterSpacing: "0.5px",
        color: "white",
        paddingBottom: "11vw",
    }
}
export default AuthPage