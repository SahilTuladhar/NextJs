export default async function Product(){
  
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve('intentional delay')
        } , 3000)
    })

    return (
        <div>This is the products component</div>
    )
 
}