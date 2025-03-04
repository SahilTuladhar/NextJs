

export default async function Review(){

    await new Promise((resolve) => {
        setTimeout(()=>{
            resolve('Intentional Delay');
        } , 5000)
    })

    return(
        <div>
            This is the review component
        </div>
    )
}