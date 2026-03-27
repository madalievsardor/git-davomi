import React from 'react'
import img from '../assets/img1.png'
import img1 from '../assets/img2.png'


export const Section3 = () => {
    return (
        <div>
            <div>
                <img src={img} alt="logo"/>
                <img src={img1} alt="logo"/>
            </div>
            <div className='text-[#01996D]'>
                <p>Our product</p>
                <h1 className='text-5xl'>You tell us your stress,
                    We make your diary</h1>
                <p>Everyone experiences it, and in different ways.
                    Let Alivio guide you, in a personalized journal experience, to overcome your stress.</p>
                <div>
                    <button className=''>Find Your Way</button>
                </div>
            </div>
        </div>
    )
}
