import { Margarine } from "next/font/google"


export default function Card({
    children
} : {
    children : React.ReactNode
}){

    const cardStyle = {
        padding: '100px',
        margin : '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: ' 0px 4px 8px 0px rgba(0 , 0 , 0 , 0.2',
        border: '1px solid black',
        width: '98%',
        height: '96%'

    }

    return(
        <div style={cardStyle}>{children}</div>
    );

}