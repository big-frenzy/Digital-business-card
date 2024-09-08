import React from "react"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope, faLinkedin } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
    return (
        <header>
        <img src="./img/Snap-pic.jpeg"/>
        <h1>David Babatunde</h1>
        <h3>Frontend Developer</h3>
        <button className="btn">Email</button>
        <button className="btn btn-primary">LinkedIn</button>
        </header>
    )
}