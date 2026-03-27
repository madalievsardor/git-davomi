import React from 'react'

const Navbar = () => {
    return (
        <div className="flex items-center justify-between px-25 py-5">

            <p className="text-2xl font-bold text-green-700">
                Alivio
            </p>

            <ul className="flex gap-8 text-gray-700 font-medium">
                <li className="hover:text-green-600 cursor-pointer transition">Why Alivio</li>
                <li className="hover:text-green-600 cursor-pointer transition">Solutions</li>
                <li className="hover:text-green-600 cursor-pointer transition">Community</li>
                <li className="hover:text-green-600 cursor-pointer transition">Pricing</li>
            </ul>

            <div className="flex items-center gap-4">
                <button className="text-gray-700 ">
                    Sign in
                </button>

                <button className="bg-green-600 text-white py-3 px-7 rounded-lg hover:bg-green-500 hover:text-black">
                    Start Trial
                </button>
            </div>

        </div>
    )
}

export default Navbar