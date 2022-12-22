import React from 'react'
import "../assets/css/Main.css"
import Ronaldo from "../assets/images/Ronaldo.jpg"
import Messi from "../assets/images/Messi.jpg"

const Main = () => {
    return (
        <div>
            <div className='flex flex-row justify-evenly'>
                <div className='py-2 m-2'>
                    <img src={Ronaldo} alt="Ronaldo" />
                    <button className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'>Support Ronaldo</button>

                </div>
                <div className='py-2 m-2'>
                    <img src={Messi} alt="Messi" />
                    <button className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'>Support Messi</button>

                </div>


            </div>
        </div>
    )
}

export default Main