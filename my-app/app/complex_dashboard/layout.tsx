import Card from "../_components/card";


// complex_dashboard/layout.tsx
export default function complexDashboardLayout({
  children,
  users,
  revenue,
  notifications,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
}) {
  return (
    <div className="dashboard-container"
    style={{
        display: "flex",
        flexDirection:'column',
        // border:'1px solid black'
    }}>
      {children}
      <div className="dashboard-slots"
      style={{
        display: "flex",
        // border:'1px solid red'
      }}>
        <div className="left" 
        style={{
            display: "flex",
            flex: '1',
            flexDirection: "column",
            position: 'relative'
            // border:'1px solid blue',
        }}> 
        <Card >{users}</Card>
        <Card >{revenue}</Card></div>
        <div className="right" style={{
            display: "flex",
            justifyContent: 'center',
            flex : '2',
            position: 'relative'

        }}>
        <Card >{notifications}</Card>
        </div>
       
        
      </div>
    </div>
  )
}