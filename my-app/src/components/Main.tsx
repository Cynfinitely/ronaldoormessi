import React from 'react'
import "../assets/css/Main.css"
import Ronaldo from "../assets/images/Ronaldo.jpg"
import Messi from "../assets/images/Messi.jpg"
import type { RootState } from '../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../redux/slices/counterSlice'

const Main = () => {
    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div className='h-full'>
            <div className='compare flex flex-row justify-evenly h-full'>
                <div className='py-2 m-2'>
                    <img src={Ronaldo} alt="Ronaldo" />
                    <button className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'
                        onClick={() => dispatch(increment())}>Support Ronaldo</button>
                    <p> Ronaldo Supported {count} time</p>

                </div>
                <div className='py-2 m-2'>
                    <img src={Messi} alt="Messi" />
                    <button className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded' onClick={() => dispatch(increment())}>Support Messi</button>
                    <p> Messi Supported {count} time</p>

                </div>


            </div>
        </div>
    )
}

export default Main