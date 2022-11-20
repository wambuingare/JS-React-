import './form.css'
import pic from './girl.png'
import React,{useState,useEffect} from 'react';
import User from './User';
function MyForm() {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState()

  const [changeColor, setChangeColor] = useState("#469DA4")

  const handleClick = ()=>{
    const change = "red";
    setChangeColor(change)
  }
  // console.log('color', changeColor);

  const handlerSubmit = ()=>{
//     const [submit, setSubmitting] = useState(false)
//     // const handleSubmit = (event) =>{
//      console.log(event)
    const data = {
      email:email,
      password :password
    }
    alert(JSON.stringify(data))
  }
//   setTimeout(() => {
//     setSubmitting(false)
//     alert(JSON.stringify(data))
//   }, 5000)
//  }
    return (
        <div className="Application">
      <form onSubmit={handlerSubmit} >
        <div className="bluelog">
          <img src={picture}></img>
        </div>
        <p>EddieShop</p>
        <h1>Welcome back</h1>
        <label className="Email" for="fname">Your email</label>  <br></br>
        <input type="email" id="myEmail" placeholder="name@domain.com"
        value = {email}
        onChange = {(e)=>{setEmail(e.target.value)}}
        />
        <br></br>
          <label className="Pword">Password</label> <br></br>
        <input  type="password" id="myPassword" placeholder="atleast 8 characters"
        value={password}
       onChange = {(e)=>{setPassword(e.target.value)}}
        /> <br></br>
<br></br>
         <div className="box">
        <input type="checkbox" id="in" name="Keep me logged in" value="Keep me logged in"/>
        <label className="logged" >keep me logged in</label>
        </div>
         <p className="forgot">forgot Password?</p>
        <p><button className="btn" type="submit" onClick={handleClick} style={{backgroundColor: `${changeColor}`}}>LogIn</button></p> 
         <div className="or">
         <p>_________________________or______________________</p>
         </div>
         <div className="icons">
         <div className="icon1">
         <i className="icon1" class="fa-brands fa-facebook"></i>
         </div>
          <div className="icon2" >
          <i className="icon2" class="fa-brands fa-google"></i>
          </div>
          <div className="icon3">
          <i class="fa-brands fa-instagram"></i>
          </div>
         </div>
         <div className="sign">
         <p>Don't have an account? <span>Sign up</span> </p>
         </div>
         { <div className="image">
         <img src={pic} width='500px'></img>
         </div> }
      </form>
      <User email={email}/>
      </div>
    )
  }
  export default MyForm









