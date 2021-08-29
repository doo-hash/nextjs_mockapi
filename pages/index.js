import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function Home() {
  const router=useRouter();
  return (
    <>
        <div className="container-fluid header-content mb-4 p-3">
            <header className="d-flex justify-content-center px-1 py-2 mb-0">
            <span className="d-flex align-items-center fw-bold px-2 display-2 text-decoration-none text-white">
                LOGO
            </span>
            </header>
        </div>
      <div className="main-content">
      <nav className="navbar m-2 text-white nav-1">
        <span className="display-6 p-1 float-start">Home</span>
        <div className="float-end">
        <button type="button" onClick={()=>router.push('/signup')} className="btn btn-lg btn-outline-dark text-white px-3 m-2">Sign Up</button>
        <button type="button" className="btn btn-lg btn-outline-dark px-3 m-2 text-white"><Link href="/signin">Sign In</Link></button>
      </div>
      </nav>
      <nav className="navbar m-2 text-white nav-2">
        <span className="display-6 p-1 float-start">Home</span>
        <div className="float-end">
        <button type="button" onClick={()=>router.push('/signup')} className="btn btn-lg btn-outline-dark text-white px-3 m-2">Sign Up</button>
        <button type="button" className="btn btn-lg btn-outline-dark px-3 m-2 text-white"><Link href="/signin">Sign In</Link></button>
      </div>
      </nav>
      <nav className="navbar m-2 text-white nav-3">
        <span className="display-6 p-1 float-start">Home</span>
        <div className="float-end">
        <button type="button" onClick={()=>router.push('/signup')} className="btn btn-lg btn-outline-dark text-white px-3 m-2">Sign Up</button>
        <button type="button" className="btn btn-lg btn-outline-dark px-3 m-2 text-white"><Link href="/signin">Sign In</Link></button>
      </div>
      </nav>
      <nav className="navbar m-2 text-white nav-4">
        <span className="display-6 p-1 float-start">Home</span>
        <div className="float-end">
        <button type="button" onClick={()=>router.push('/signup')} className="btn btn-lg btn-outline-dark text-white px-3 m-2">Sign Up</button>
        <button type="button" className="btn btn-lg btn-outline-dark px-3 m-2 text-white"><Link href="/signin">Sign In</Link></button>
      </div>
      </nav>
      <nav className="navbar m-2 text-white nav-5">
        <span className="display-6 p-1 float-start">Home</span>
        <div className="float-end">
        <button type="button" onClick={()=>router.push('/signup')} className="btn btn-lg btn-outline-dark text-white px-3 m-2">Sign Up</button>
        <button type="button" className="btn btn-lg btn-outline-dark px-3 m-2 text-white"><Link href="/signin">Sign In</Link></button>
      </div>
      </nav>
      <nav className="navbar m-2 text-white nav-6">
        <span className="display-6 p-1 float-start">Home</span>
        <div className="float-end">
        <button type="button" onClick={()=>router.push('/signup')} className="btn btn-lg btn-outline-dark text-white px-3 m-2">Sign Up</button>
        <button type="button" className="btn btn-lg btn-outline-dark px-3 m-2 text-white"><Link href="/signin">Sign In</Link></button>
      </div>
      </nav>
      <nav className="navbar m-2 text-white nav-7">
        <span className="display-6 p-1 float-start">Home</span>
        <div className="float-end">
        <button type="button" onClick={()=>router.push('/signup')} className="btn btn-lg btn-outline-dark text-white px-3 m-2">Sign Up</button>
        <button type="button" className="btn btn-lg btn-outline-dark px-3 m-2 text-white"><Link href="/signin">Sign In</Link></button>
      </div>
      </nav>
      <nav className="navbar m-2 text-white nav-8">
        <span className="display-6 p-1 float-start">Home</span>
        <div className="float-end">
        <button type="button" onClick={()=>router.push('/signup')} className="btn btn-lg btn-outline-dark text-white px-3 m-2">Sign Up</button>
        <button type="button" className="btn btn-lg btn-outline-dark px-3 m-2 text-white"><Link href="/signin">Sign In</Link></button>
      </div>
      </nav>
      <nav className="navbar m-2 text-white nav-9">
        <span className="display-6 p-1 float-start">Home</span>
        <div className="float-end">
        <button type="button" onClick={()=>router.push('/signup')} className="btn btn-lg btn-outline-dark text-white px-3 m-2">Sign Up</button>
        <button type="button" className="btn btn-lg btn-outline-dark px-3 m-2 text-white"><Link href="/signin">Sign In</Link></button>
      </div>
      </nav>
      <nav className="navbar m-2 text-white nav-10">
        <span className="display-6 p-1 float-start">Home</span>
        <div className="float-end">
        <button type="button" onClick={()=>router.push('/signup')} className="btn btn-lg btn-outline-dark text-white px-3 m-2">Sign Up</button>
        <button type="button" className="btn btn-lg btn-outline-dark px-3 m-2 text-white"><Link href="/signin">Sign In</Link></button>
      </div>
      </nav>
      <nav className="navbar m-2 text-white nav-11">
        <span className="display-6 p-1 float-start">Home</span>
        <div className="float-end">
        <button type="button" onClick={()=>router.push('/signup')} className="btn btn-lg btn-outline-dark text-white px-3 m-2">Sign Up</button>
        <button type="button" className="btn btn-lg btn-outline-dark px-3 m-2 text-white"><Link href="/signin">Sign In</Link></button>
      </div>
      </nav>
      </div>
      <footer className="bottom-0 mt-auto text-center">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </>
  )
}
