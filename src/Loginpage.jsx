import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBInput,
    MDBRadio,
   
  }
  from 'mdb-react-ui-kit';
  import 'mdb-react-ui-kit/dist/css/mdb.min.css';

const Loginpage = () => {

  const [email ,setemail] =useState("")
  const [password , Setpassword] =useState("")

  // const data = {email,usepassword}
  const Navigate = useNavigate()
    
  const signin =(e)=>{
    e.preventDefault ()
    fetch("http://localhost:3030/posts?email=" + email +"&password=" + password ).then((resp)=>{
      resp.json().then((rd)=>{
        if(rd[0]){

          sessionStorage.setItem("email" , email)
          sessionStorage.setItem("role" , rd[0].role)
        }
          
          if (rd[0].role == 1){
            Navigate("/Adminpage")
          }
          else {
            Navigate("/Userpage")
          }
      }).catch((err)=>{

      alert("Please Enter Valid Email Or Password " + err)
        
      })
    })

    console.log()

    setemail("")
    Setpassword("")
    
  }

  return (
    <>
    <h1>Login Form</h1>
    
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
    <form>

<MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' value={email} onChange={(e)=>setemail (e.target.value)}/>
<MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' value={password} onChange={(e)=>Setpassword (e.target.value)} />


<MDBBtn className="mb-4" onClick={signin}>Sign in</MDBBtn>
</form>

<div className="text-center">
  <p>Not a member? <Link to = "/" >Register</Link> </p>
  
</div>

</MDBContainer>
    
    
    </>
    
  )
}

export default Loginpage