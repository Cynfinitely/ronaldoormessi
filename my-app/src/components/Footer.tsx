import React from 'react'
import "../assets/css/Footer.css"

const Footer = () => {
    return (
        <div className='footer rounded-full py-3 px-6 my-3  text-center flex flex-row items-center justify-between'>
            <a href="https://www.buymeacoffee.com/cynfinitely" className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'>Support Developer</a>
            <p>All rights reserved <sup> &#169;</sup>- 2023  </p>
        </div>
    )
}

export default Footer