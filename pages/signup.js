
import Link from 'next/link'
import { useRouter } from "next/router";

export default function Signup(){
  const router = useRouter()
  const handleSubmit= async (e)=>{
    e.preventDefault()
    const res= await fetch("https://6128abbf86a213001729fa50.mockapi.io/students",
    {body: JSON.stringify({
      First_name:e.target.fname.value,
      Last_name:e.target.lname.value,
      Student_Id:e.target.studentid.value,
      Parent_Id:e.target.parentid.value,
      Teacher_Id:e.target.teacherid.value,
      Email:e.target.email.value,
      mobile:e.target.mobile.vlaue,
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
    return data;
  }
  const setPassword=()=>{
    let rlno=document.getElementById("studentid").value;
    let psd=document.getElementById("password");
    psd.value=rlno;
    psd.readonly=true;
  }
  const handleLogin=()=>{
    let stdnt=document.getElementById("student");
    let prnt=document.getElementById("parent");
    let tchr=document.getElementById("teacher");
  
    let stdntid=document.getElementById("studentid");
    let tchrid=document.getElementById("teacherid");
    let prntid=document.getElementById("parentid");
    let stdntcls=document.getElementById("studentcls");
    let tchrwrk=document.getElementById("tchrwrk");
  
    if(stdnt.checked){
      tchrid.disabled=true;prntid.disabled=true;
      tchrid.required=false;prntid.required=false;
      tchrwrk.disabled=true;tchrwrk.required=false;
      stdntcls.disabled=false;stdntcls.required=true;
      stdntid.disabled=false;stdntid.required=true;
    }
    else if(tchr.checked){
      stdntid.disabled=true;stdntid.required=false;tchrid.required=true;
      prntid.disabled=true;prntid.required=false;tchrid.disabled=false;
      tchrwrk.disabled=false;tchrwrk.required=true;
      stdntcls.disabled=true;stdntcls.required=false;
    }
    else if(prnt.checked){
      stdntid.disabled=true;stdntid.required=true;
      tchrid.disabled=true;tchrid.required=false;prntid.disabled=false;
      tchrwrk.disabled=true;tchrwrk.required=false;
      stdntcls.disabled=false;stdntcls.required=true;
    }

  }
    return(
        <>
        <div className="container-fluid bg-info">
            <header className="d-flex justify-content-center px-1 py-2 mb-0">
            <span className="d-flex align-items-center fw-bold px-2 display-6 text-decoration-none text-white">
                LOGO
            </span>
            </header>
            <button type="button" className="btn btn-outline-dark m-2" onClick={()=>router.push("/")}>Home</button>
            <button type="button" className="btn btn-outline-dark m-2" onClick={()=>router.back()}>Back</button>
        </div>
        <div className="cotainer-md">
          <h2 className="ps-5 mb-3">Sign Up</h2>
          <div className="container-md px-lg-5">
          <p className="fs-5">Select your category</p>
            <div className="d-lg-flex mb-2 border rounded">
            <div className="form-check w-25 mx-lg-auto p-lg-2">
              <input className="form-check-input" type="radio" 
              name="user" id="student"
               onChange={handleLogin} 
               defaultChecked/>
              <label className="form-check-label" htmlFor="student">Student</label>
            </div>
            <div className="form-check w-25 mx-lg-auto p-lg-2">
              <input className="form-check-input" type="radio" name="user" 
              id="teacher" 
              onChange={handleLogin} 
                 />
              <label className="form-check-label" htmlFor="teacher"> Teacher</label>
            </div>
            <div className="form-check w-25 mx-lg-auto p-lg-2">
              <input className="form-check-input" type="radio" name="user" 
              id="parent" 
              onChange={handleLogin}   
                 />
              <label className="form-check-label" htmlFor="parent">Parent</label>
            </div>
          </div>
          <form className="mt-3 fs-5 px-2" onSubmit={handleSubmit}>
            <div className="mb-1 row">
              <label htmlFor="fname" className="col-form-label col-lg-2">First Name</label>
              <div className="col-lg-10">
                <input type="text" className="form-control" name="fname" id="fname" required />
              </div>
            </div>
            <div className="mb-1 row">
              <label htmlFor="lname" className="col-form-label col-lg-2">Last Name</label>
              <div className="col-lg-10">
                <input type="text" className="form-control" name="lname" id="lname" required />
              </div>
            </div>
            <div className="mb-1 row">
              <label htmlFor="rlno" className="col-form-label col-lg-2">Student Roll No</label>
              <div className="col-lg-10">
                <input type="text" className="form-control" name="studentid" 
                id="studentid" 
                onChange={setPassword} required 
                   />
              </div>
            </div>
            <div className="mb-1 row">
              <label htmlFor="parentid" className="col-form-label col-lg-2">Parent ID</label>
              <div className="col-lg-10">
                <input type="text" className="form-control" name="parentid" id="parentid" required disabled />
              </div>
            </div>
            <div className="mb-1 row">
              <label htmlFor="teacherid" className="col-form-label col-lg-2">Teacher ID</label>
              <div className="col-lg-10">
                <input type="text" className="form-control" name="teacherid" id="teacherid" disabled required />
              </div>
            </div>
            <div className="mb-1 row">
              <label htmlFor="InputEmail1" className="col-form-label col-lg-2">Email</label>
              <div className="col-lg-10">
                <input type="email" className="form-control" name="email" id="email" required />
              </div>
            </div>
            <div className="mb-1 row">
              <label htmlFor="mobile" className="col-form-label col-lg-2">Mobile Number</label>
              <div className="col-lg-10">
                <div className="input-group">
                  <span className="btn btn-outline-dark"></span>
                  <input type="number" className="form-control" name="mobile" id="mobile" pattern="[0-9]{10}" required />
                </div>
              </div>
            </div>
            <div className="mb-1 row">
              <label htmlFor="studentcls" className="col-form-label col-lg-2">Student className</label>
              <div className="col-lg-10">
                <input type="text" className="form-control" name="studentcls" id="studentcls" required />
              </div>
            </div>
            <div className="mb-1 row">
              <label htmlFor="password" className="col-form-label col-lg-2">Password</label>
              <div className="col-lg-10">
                <input type="password" className="form-control" name="password" id="password" required />
              </div>
            </div>
            <div className="mb-1 row">
              <label htmlFor="tchrwrk" className="col-form-label col-lg-2">Work Experience</label>
              <div className="col-lg-10">
                <textarea className="form-control" name="tchrwrk" id="tchrwrk" rows="5" 
                   required placeholder="Your experience in teaching....." disabled>
                </textarea>
              </div>
            </div>
            <div className="mb-1 form-check">
              <input type="checkbox" className="form-check-input" id="Check1" required />
              <label className="form-check-label" htmlFor="Check1">Agree <Link href="/">terms and conditions</Link></label>
            </div>
            <button type="submit" className="btn btn-outline-primary px-4 fs-5">Submit</button>
          </form>
        </div>
        </div>
        </>
    )
}
