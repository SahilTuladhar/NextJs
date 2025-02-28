import Link from "next/link";

export default async function NotificationSlot() {
 
  await new Promise((resolve) =>{
    setTimeout(() => {
      resolve('Intentional Delay')
    } , 3000)
  })

    return <div
    style={{
      display:'flex',
      flexDirection:'column'
    }}
    >

      <h1>🔔 Default Notification Content</h1>
      <Link href='/complex_dashboard/archived'>Archived Notification</Link>
    </div>;
  }
  