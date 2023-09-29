import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBSelect,
  MDBRadio
}

from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import Loginpage from './Loginpage';

const Registrationpage = () => {

    const [name , setname]  = useState ("")
    const [password , setpassword]  = useState ("")
    const [bithday , setbirthday]  = useState ("")
    const[Gender , setGender ] =useState("Male")
    const[email , setemail ] =useState("")
    const[phone , setphone ] =useState("")

    const Navigate = useNavigate()
    // const navigate = useNavigate()

    const valid =()=>{
      let result = true
      if(name === "") {
       result = false
       alert ("Please Enter Your Name ")
      }
       if(password === "") {
       result = false
       alert ("Please Enter Password ")
    }
       if(bithday === ""){
       result = false
       alert ("Please Enter Birthdate ")}

       if(Gender === ""){
       result = false
       alert ("Please Enter Your Gender ") }

       if(email === ""){
       result = false
       alert ("Please Enter Your Email ")}

       if(phone === ""){
       result = false
       alert ("Please Enter Your Phone Number ")
       }

      return result
    }

     const handlesumit =(e)=>{

      e.preventDefault ()
      const data = {name,password,bithday,Gender,email,phone,role:2 }
      console.log(data)

    if (valid()) {
      fetch("http://localhost:3030/posts" , {
        method : 'POST' ,
        headers:{
          "Content-Type" : "application/json" ,
        },
        body:JSON.stringify(data)
       }).then(()=>{

        Navigate("./Loginpage")

       })
    }

    setname("")
    setpassword("")
    setbirthday("")
    setGender("")
    setemail("")
    setphone("")

     }

  return (
    <>
     <MDBContainer fluid>

<MDBRow className='justify-content-center align-items-center m-5'>

  <MDBCard>
    <MDBCardBody className='px-4'>

      <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
      <form>
      <MDBRow>

        <MDBCol md='6'>
          <MDBInput wrapperClass='mb-4' value={name} label='Full Name' size='lg' id='form1' type='text' onChange={(e)=>setname(e.target.value)}/>
        </MDBCol>

        <MDBCol md='6'>
          <MDBInput wrapperClass='mb-4' value={password} label='Password' size='lg' id='form2' type='password' onChange={(e)=>setpassword(e.target.value)}/>
        </MDBCol>

      </MDBRow>

      <MDBRow>

        <MDBCol md='6'>
          <MDBInput wrapperClass='mb-4' label='Birthday' size='lg' id='form3' type='date' value={bithday} onChange={(e)=>setbirthday(e.target.value)}/>
        </MDBCol>

        <MDBCol md='6' className='mb-4'>
          <h6 className="fw-bold">Gender: </h6>
          <MDBRadio name='inlineRadio'checked={Gender === "Female"} value="Female" onClick={()=>setGender("Female")}  id='inlineRadio1'  label='Female' inline />
          <MDBRadio name='inlineRadio'checked={Gender === "Male"} value="Male" onClick={()=>setGender("Male")} id='inlineRadio2'  label='Male' inline />
          <MDBRadio name='inlineRadio'checked={Gender === "Other"} value="Other" onClick={()=>setGender("Other")} id='inlineRadio3'  label='Other' inline />
        </MDBCol>

      </MDBRow>

      <MDBRow>

        <MDBCol md='6'>
          <MDBInput wrapperClass='mb-4' label='Email' size='lg' id='form4' type='email' value={email} onChange={(e)=>setemail(e.target.value)}/>
        </MDBCol>

        <MDBCol md='6'>
          <MDBInput wrapperClass='mb-4' label='Phone Number' size='lg' id='form5' type='rel' value={phone} onChange={(e)=>setphone(e.target.value)}/>
        </MDBCol>

      </MDBRow>

      {/* <MDBDropdown>
      <MDBDropdownToggle>Dropdown button</MDBDropdownToggle>
      <MDBDropdownMenu>
        <MDBDropdownItem link>Action</MDBDropdownItem>
        <MDBDropdownItem link>Another action</MDBDropdownItem>
        <MDBDropdownItem link>Something else here</MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown> */}

      {/* <MDBSelect
        label='Choose option'
        className='mb-4'
        size='lg'
        data={[
          { text: 'Choose option', value: 1, disabled: true },
          { text: 'Subject 1', value: 2 },
          { text: 'Subject 2', value: 3 },
          { text: 'Subject 3', value: 4 }
        ]}
        /> */}
      <MDBBtn className='mb-4' size='lg' onClick={handlesumit}>Submit</MDBBtn>
       <Link to = "./Loginpage"><p>You have Already Registed </p></Link>
      </form>
    </MDBCardBody>
  </MDBCard>

</MDBRow>
</MDBContainer>
    </>
  )
}

export default Registrationpage

