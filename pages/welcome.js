
export default function Welcome({results}){
    return(
        <div className="justify-content-center h-100">
        <h1 className="m-5 p-2 dispaly-6">
            Welcome
        </h1>
        <h3>Your Profile is</h3>
        <div className="my-2 border p-2 fs-5">
        {results.map(result=>{
            return (
                <ul className="list-group" key={result.id}>
                    <li className="list-group-item">{result.User_Id}</li>
                </ul>
            )
        })}
        </div>
        </div>
    )
}
export const getServerSideProps = async (context) => {

    const res= await fetch(`https://6128abbf86a213001729fa50.mockapi.io/students`)
    const result = await res.json()
    console.log(result)
  return {
    props: {
      results: result,
    }
  }
}
