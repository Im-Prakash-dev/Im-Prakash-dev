import React from 'react'
import './home.scss'

const Home = () => {
  return (
    <div className=" lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-start">
                <h1 className="pb-7 text-4xl font-thin tracking-tight
                lg:mt-16 lg:text-5xl">Prakash Ponnusamy</h1>
                <div className="flex gap-2">
                <span className='text-2xl font-light tracking-tight'>I'm</span>
                <span className="bg-gradient-to-r from-pink-300 via-slate-500
                to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent">React Developer</span>
                
                </div>
                <p className="about my-2 max-w-xl py-6 font-light tracking-tight text-left">
                I am an IT professional with 6 years of experience in graphic design, web development, and data analysis. Specializing in frontend development, I have expertise in React.js, Next.js, and JavaScript. I also excel in data visualization and analysis using SQL, Python, and tools like D3.js and Chart.js. I thrive in collaborative settings, working closely with teams to deliver high-quality results. Passionate about continuous learning, I stay current with industry trends and technologies.
                </p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Home