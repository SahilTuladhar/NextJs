import React from "react"

export default function photoLayout({
    children,
    modal,
} : { 
    children : React.ReactNode;
    modal : React.ReactNode;
}) {
    return(
        <>
        {modal}
        {children}
        </>
    )
}