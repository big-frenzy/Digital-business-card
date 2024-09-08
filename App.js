import React from "react"
import Header from "./Header"
import FirstSection from "./FirstSection"
import SecondSection from "./SecondSection"
import Footer from "./Footer"

export default function App() {
    return (
        <div className="container">
            <Header/>
            <FirstSection/>
            <SecondSection/>
            <Footer/>
        </div>
    )
}