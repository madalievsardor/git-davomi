import React from 'react'
import img from '../assets/BG.png'

const Header = () => {
    return (
        <div>
            <div
                className="w-full h-screen bg-cover bg-center"
                style={{ backgroundImage: `url(${img})` }}
            >
                <div className='w-[80%] mx-auto'>
                    <div className='w-[500px] flex flex-col gap-[30px] pt-[100px]'>
                        <p className='text-[#01996D] text-[65px]'>Be aware,
                            Manage well.</p>
                        <p className='w-[420px]'>Everyone experiences stress in different ways.
                            Let Alivio guide you, in a personalized journal experience, to overcome your stress.</p>
                        <button className='w-[227px] py-[20px] px-[40px] bg-[#01996D] text-white'>Find Your Way</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header