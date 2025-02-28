import Link from "next/link"

 export default async function archivedNotificationPage(){

    await new Promise ((resolve) => {
        setTimeout(()=>{
            resolve('Intentional Delay')
        } , 3000)
    })

    return(
        <div style={{
            display:'flex',
            flexDirection:'column'
          }}>
            <h1> Archived Notification Page</h1>
            <Link href='/complex_dashboard'>Default Notifications</Link>
        </div>
    )
}
