import React from "react"

export default function Main() {
    return (
        <div className="container">
            <img className="photo" src="../tom.jpg"/>
            <div className="informations">
                <h1>Tomasz Szydłowski</h1>
                <h2>Frontend Developer</h2>
                <h3>t.szydlowski19@gmail.com</h3>
            </div>
            <div className="links">
                <button className="email">E-mail</button>
                <button className="linkedin">LinkedIn</button>
            </div>
            <div className="mainText">
                <span className="titleText">
                 About
                </span>
                <span className="simpleText">
                 I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.
                </span>
                
                <span className="titleText">
                Interest
                </span>
                <span className="simpleText">
                Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
                </span>     
            </div>
        </div>
    )
}