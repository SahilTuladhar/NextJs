export default async function NotificationSlot() {
 
  await new Promise((resolve) =>{
    setTimeout(() => {
      resolve('Intentional Delay')
    } , 3000)
  })

    return <div>🔔 Notification Content</div>;
  }
  