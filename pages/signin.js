import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Login({result})  {
  const router = useRouter()
  const [userid,setUserid] = useState('')
  const [mobile,setMobile] = useState('')
  const [password,setPassword] = useState('')
  const [loginErr, setLoginErr] = useState(false)

  const handleSubmit=(e)=>{
    e.preventDefault();
    const User= `${result.User_Id}`
    console.log(User)
    console.log("User ID: "+`${result.User_Id}`+" Mobile: "+`${result.Mobile}`+
    " Password: "+`${result.Password}`)
    if(userid===`${result.User_Id}` && password===`${result.Password}`){
      console.log("User ID: "+`${result.User_Id}`+" Mobile: "+`${result.Mobile}`+
      " Password: "+`${result.Password}`)
      router.push("/welcome")
    }
    else{
    setLoginErr(true)
    router.push("/")
  }
  }

return (
  <div className="signin-layout">
    <div className="container-fluid header-content">
      <header className="d-flex justify-content-center px-1 py-2 mb-0 border-bottom">
        <span className="d-flex align-items-center fw-bold px-2 display-6 text-decoration-none text-white">
        LOGO</span>
      </header>
      <div className ="d-flex flex-row">
        <button type="button" className="btn m-2" onClick={()=>router.push("/")}>Home</button>
        <button type="button" className="btn m-2" onClick={()=>router.back()}>Back</button>
        <h2 className="m-2 text-center text-bold w-100 signup-head">Sign in</h2>
      </div>
    </div>
    <div className="p-5 signin-body">
      <div className="fs-5 text-danger text-bold shadow">{loginErr?'User Id or Password is wrong':''}</div>
        <form className="mt-3 fs-5" onSubmit={handleSubmit}>
          <div className="mb-1">
            <label htmlFor="rlno" className="form-label">Student Roll No/Parent ID/Teacher ID</label>
            <input type="text" className="form-control" name="rlno" 
             onChange={(e)=>{setUserid(e.target.value)}} id="rlno"
              autoComplete="userid"
             placeholder="admin/teacher/parent" required />
          </div>
          <div className="mb-1">
            <label htmlFor="mobile" className="form-label">Mobile Number</label>
            <div className="input-group">
              <span className="btn btn-outline-dark"></span>
              <input type="number" className="form-control" name="mobile" 
               onChange={(e)=>{setMobile(e.target.value)}} id="mobile"
               pattern="[0-9]{10}" autoComplete="mobile"
                placeholder="9874561230" required />
            </div>
          </div>
          <div className="mb-1">
            <label htmlFor="InputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" name="InputPassword1" 
               onChange={e=>{setPassword(e.target.value)}} id="InputPassword1"
              autoComplete="InputPassword1" 
              placeholder="admin/teacher/parent" required />
          </div>
          <div className="mb-1 form-check">
            <input type="checkbox" className="form-check-input" name="Check1" 
            id="Check1" defaultChecked />
            <label htmlFor="Check1" className="form-label">Remember me</label>
          </div>
          <button type="submit" className="btn btn-outline-primary px-4 fs-5">Login</button>
        </form>
    </div>
    <div>
    </div>
    <footer className="bottom-0 mt-auto text-center">
      <a href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank" rel="noopener noreferrer">Powered by{' '}
      <span>
      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      </span>
      </a>
    </footer>
  </div>
)
}
export const getServerSideProps = async (context) => {
    const res= await fetch(`https://6128abbf86a213001729fa50.mockapi.io/students`)
    const result = await res.json()
  return {
    props: {
      result
    }
  }
}

