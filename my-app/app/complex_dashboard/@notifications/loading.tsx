
export default function notiLoader(){

    
// CSS styles for the spinner
const spinnerStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  }
  
  const spinnerAnimation = {
    border: '8px solid #f3f3f3',
    borderTop: '8px solid #3498db',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    animation: 'spin 2s linear infinite',
  }

    return(
        <>
         <div style={spinnerStyles}>
    <div style={spinnerAnimation}></div>
  </div>
        </>
    )
}