import React from 'react'
import myImage from '../assets/maaz.jpg'
import './home.css' 

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col-reverse sm:flex-row items-center justify-center gap-10 bg-gradient-to-br from-black via-gray-900 to-gray-800 px-6 py-10"
    >
      {/* Text Content */}
      <div className="text-center sm:text-left max-w-2xl fade-in-up"> 
        <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-4">
          Hi, I'm <span className="text-red-500">Maaz</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-300 mb-8">
       I’m a passionate Flutter Developer with strong expertise in building modern, high-performance mobile applications using Flutter and Firebase. I have hands-on experience in UI/UX design, REST APIs integration, and real-time database management. Through continuous learning and practical projects, I focus on creating scalable, user-friendly, and visually appealing apps that solve real-world problems.
        </p>

        <div className="flex flex-col sm:flex-row justify-center sm:justify-start gap-4">
          <a
            href="#contact"
            className="bg-red-500 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-red-600 transition duration-300"
          >
            Hire Me
          </a>
          <a
            href="/MernCv.pdf"
            download
            className="border border-red-500 text-red-500 px-6 py-3 rounded-full font-semibold hover:bg-red-500 hover:text-white transition duration-300"
          >
            Download CV
          </a>
        </div>
      </div>

      {/* Image */}
      <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-red-500 shadow-lg fade-in-right"> {/* ✅ updated class */}
        <img
          src={myImage}
          alt="Soban"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  )
}

export default Home
