
export default function Welcome({students}){
    return(
        <div className="d-flex align-items-center align-content-center justify-content-center h-100">
        <h1 className="m-5 p-2 dispaly-6">
            Welcome
        </h1>
        <h2>Your Profile is</h2>
        {students}
        </div>
    )
}
export async function getServerSideProps(){
    const res= await fetch("https://6128abbf86a213001729fa50.mockapi.io/students")
    const data = JSON.stringify(res)
    console.log(data)
    return {
        props:{
            students:data
        }
    }
}