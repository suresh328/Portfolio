import React from 'react'
import { Link } from 'react-router-dom'

const ProjectsDone = () => {
  return (
    <>
        

    <div class="projects-section">
        
        <h2>My Projects</h2>
        <ul>
            <li>
                <Link to="https://calculator-mu-liart.vercel.app/">Calculator</Link>
                <p>A simple yet powerful calculator app that performs basic arithmetic operations. It includes a clean design, easy-to-use buttons, and support for both integer and decimal calculations.</p>
            </li>
            <li>
                <Link to="https://qrcode-generator-wine.vercel.app/">QR Code Generator</Link>
                <p>An application that generates QR codes from user input. It supports various including URLs, Size information, and provides high-quality QR code images for download.</p>
            </li>
            <li>
                <Link to="https://basicsquizapp.vercel.app/">Quiz App </Link>
                <p>An interactive web application that allows users to take quizzes on various topics. It features a user-friendly interface, real-time scoring, and customizable question sets.</p>
            </li>
        </ul>
    </div>
    </>
  )
}

export default ProjectsDone
