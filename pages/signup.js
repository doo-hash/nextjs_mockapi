import { useRouter } from "next/router";
import { useState } from "react";

export default function Signup(){
  const router = useRouter()
  const [isAdmnActive, setIsAdmnActive]= useState(true)
  const [isTchrActive, setIsTchrActive]= useState(false)
  const [isPrntActive, setIsPrntActive]= useState(false)

  const handleSubmit= async (e)=>{
    e.preventDefault()
    const res= await fetch("https://6128abbf86a213001729fa50.mockapi.io/students",
    {body: JSON.stringify({
      First_name:e.target.fname.value,
      Last_name:e.target.lname.value,
      User_Id:e.target.userid.value,
      Email:e.target.email.value,
      Mobile:e.target.mobile.value,
      Student_Class:e.target.studentcls.value,
      Password:e.target.password.value,
      Work_Experience:e.target.tchrwrk.value,
    }),
    headers:{
      "Content-Type":"application/json"
    },
    method:"POST",
  }
    )
    const data = await res.json()
    router.push("/welcome");
    console.log(data)
    return data;
  }

  const setPassword=()=>{
    let rlno=document.getElementById("userid").value;
    let psd=document.getElementById("password");
    psd.value=rlno;
  }

  const handleAdminLogin=()=>{
    setIsPrntActive(false)
    setIsTchrActive(false)
    setIsAdmnActive(true)
  }

  const handleTeacherLogin=()=>{
    setIsPrntActive(false)
    setIsTchrActive(true)
    setIsAdmnActive(false)
    let psd=document.getElementById("password");
    psd.placeholder="";
  }

  const handleParentLogin=()=>{
    setIsPrntActive(true)
    setIsTchrActive(false)
    setIsAdmnActive(false)
    let psd=document.getElementById("password");
    psd.readOnly=true;
    psd.placeholder="PASSWORD IS STUDENT ID";
  }

    return(
        <>
        <div className="container-fluid header-content">
            <header className="d-flex justify-content-center px-1 py-2 mb-0 border-bottom">
            <span className="d-flex align-items-center fw-bold px-2 display-6 text-decoration-none text-white">
                LOGO
            </span>
            </header>
            <div className ="d-flex flex-row">
            <button type="button" className="btn m-2" onClick={()=>router.push("/")}>Home</button>
            <button type="button" className="btn m-2" onClick={()=>router.back()}>Back</button>
            <h2 className="m-2 text-center text-bold w-100 signup-head">Sign Up</h2>
            </div>
        </div>
        <div className="cotainer-md p-2 form-body">
          <div className="container-md px-lg-5">
          <p>Select your category</p>
            <div className="d-lg-flex mb-2 border rounded">
            <div className="form-check w-25 mx-lg-auto p-lg-2">
              <input className="form-check-input" type="radio" 
              name="user" id="admin"
               onChange={handleAdminLogin} 
               defaultChecked/>
              <label className="form-check-label" htmlFor="admin">Admin</label>
            </div>
            <div className="form-check w-25 mx-lg-auto p-lg-2">
              <input className="form-check-input" type="radio" name="user" 
              id="teacher" 
              onChange={handleTeacherLogin} 
                 />
              <label className="form-check-label" htmlFor="teacher"> Teacher</label>
            </div>
            <div className="form-check w-25 mx-lg-auto p-lg-2">
              <input className="form-check-input" type="radio" name="user" 
              id="parent" 
              onChange={handleParentLogin}   
                 />
              <label className="form-check-label" htmlFor="parent">Parent</label>
            </div>
          </div>
          <form className="mt-3 px-2" onSubmit={handleSubmit}>
          <div className="mb-1 row">
              <div className="col-lg-10">
                <input type="text" className="form-control" name="formid" 
                defaultValue={Math.floor(Math.random() * 1000)} 
                id="formid" hidden />
              </div>
            </div>
            <div className="mb-1 row">
              <label htmlFor="fname" className="col-form-label col-lg-3">First Name</label>
              <div className="col-lg-9">
                <input type="text" className="form-control" name="fname" id="fname"
                 minLength="5" maxLength="20" required />
              </div>
            </div>
            <div className="mb-1 row">
              <label htmlFor="lname" className="col-form-label col-lg-3">Last Name</label>
              <div className="col-lg-9">
                <input type="text" className="form-control" name="lname" id="lname" 
                minLength="5" maxLength="20" required />
              </div>
            </div>
            <div className="mb-1 row">
              <label htmlFor="userid" className="col-form-label col-lg-3">
              {`${isAdmnActive ? "Admin ID" : ""} 
            ${isTchrActive ? "Teacher ID" : ""} 
            ${isPrntActive ? "Parent ID/Student ID" : ""}`}</label>
              <div className="col-lg-9">
                <input type="text" className="form-control" name="userid" 
                id="userid" minLength="10" 
                onChange={setPassword}  
                   />
              </div>
            </div>
            <div className="mb-1 row">
              <label htmlFor="InputEmail1" className="col-form-label col-lg-3">Email</label>
              <div className="col-lg-9">
                <input type="email" className="form-control" name="email" id="email" minLength="10" required />
              </div>
            </div>
            <div className="mb-1 row">
              <label htmlFor="mobile" className="col-form-label col-lg-3">Mobile Number</label>
              <div className="col-lg-9">
                <div className="input-group">
                  <span></span>
                  <input type="number" className="form-control" name="mobile" 
                  id="mobile" pattern="[-+]?[0-9]{10}" minLength="10" required />
                </div>
              </div>
            </div>
            <div className={
              `${isAdmnActive ? "mb-1 row hide" : ""} 
              ${isTchrActive ? "mb-1 row hide" : ""} 
              ${isPrntActive ? "mb-1 row" : ""}`
            }>
              <label htmlFor="studentcls" className="col-form-label col-lg-3">Student className</label>
              <div className="col-lg-9">
                <input type="text" className="form-control" name="studentcls" id="studentcls" maxLength="20" />
              </div>
            </div>
            <div className="mb-1 row">
              <label htmlFor="password" className="col-form-label col-lg-3">Password</label>
              <div className="col-lg-9">
                <input type="password" className="form-control" name="password"
                id="password" minLength="10" maxLength="15" readOnly required />
              </div>
            </div>
            <div className={
              `${isAdmnActive ? "mb-1 row" : ""} 
              ${isTchrActive ? "mb-1 row" : ""} 
              ${isPrntActive ? "mb-1 row hide" : ""}`
            }>
              <label htmlFor="tchrwrk" className="col-form-label col-lg-3">Education</label>
              <div className="col-lg-9">
                <textarea className="form-control" name="education" id="education" rows="5" 
                   placeholder="Your education details here.....">
                </textarea>
              </div>
            </div>
            <div className={
              `${isAdmnActive ? "mb-1 row" : ""} 
              ${isTchrActive ? "mb-1 row" : ""} 
              ${isPrntActive ? "mb-1 row hide" : ""}`
            }>
              <label htmlFor="tchrwrk" className="col-form-label col-lg-3">Work Experience</label>
              <div className="col-lg-9">
                <textarea className="form-control" name="tchrwrk" id="tchrwrk" rows="5" 
                   placeholder="Your experience in teaching.....">
                </textarea>
              </div>
            </div>
            <div className="mb-1 form-check fs-5">
              <input type="checkbox" className="form-check-input" id="Check1" required />
              <label className="form-check-label" htmlFor="Check1"><small>Agree <a href="/">terms and conditions</a></small></label>
            </div>
            <button type="submit" className="btn px-4">Submit</button>
          </form>
        </div>
        </div>
        </>
    )
}
