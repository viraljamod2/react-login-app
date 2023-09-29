import React, { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Adminpage = () => {
  const [data ,setData] =useState([])
  

 const ShowData =() =>{
    fetch("http://localhost:3030/posts").then((result)=>{
        // console.log(result);
        result.json().then((resp)=>{
            console.log(resp);
            setData(resp)
        })
        })}
  const Navigate = useNavigate()

  useEffect(()=>{
    let email = sessionStorage.getItem("email")
    let role =sessionStorage.getItem("role")
    if(email === ""|| email === null || role !=1 ){
      Navigate("/Loginpage")
    }
  },[])
  return (
    <>
   <div className='font'>
        <h1>Welcome To Admin Page</h1>

        <button onClick={ShowData}>ShowData</button>
        <br />
        <br />
        
        <table className='table' border="1" width="70%">
            <tr className='table'>
            <th>name</th>
            <th>password</th>
            <th>bithday</th>
            <th>Gender</th>
            <th>email</th>
            <th>phone</th>
            <th>role</th>
            </tr>


            {
            data.map((user)=>
                <tr className='table'>
                    <td>
                    {user.name}
                    </td>
                    <td>
                    {user.password}
                    </td>
                    <td>
                    {user.bithday}
                    </td>
                    <td>
                    {user.Gender}
                    </td>
                    <td>
                    {user.email}
                    </td>
                    <td>
                    {user.phone}
                    </td>
                    <td>
                    {user.role}
                    </td>
                    
                </tr>
            )}
        </table>
    </div>
    
    </>
  )
}

export default Adminpage