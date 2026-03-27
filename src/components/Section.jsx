import React from 'react'


const Section = () => {
  return (
    <div className='bg-gray-100 text-gray-800 py-16 px-6'>
      <div className='max-w-6xl mx-auto'>

        
        <div className='grid md:grid-cols-2 gap-10 items-center'>
          <div>
            <p className='text-sm text-gray-500'>How it works</p>
            <h1 className='text-5xl font-bold text-green-700 mt-2 w-[500px]'>
              Understand & Release  the stress in 3 steps
            </h1>
          </div>
          <div>
            <p className='text-gray-600 w-[540px]'>
              Alivio offers as many journals it takes, tackling different areas such as anxiety, overwhelmedness, sadness, or anger, and a variety of personal causes, to help you become aware of your emotions, and guide you in how to manage stress.
            </p>
          </div>
        </div>

        
        <div className='flex gap-[95px] mt-[52px]'>

          
          <div className='bg-white p-6 rounded-2xl shadow '>
            <div className='text-5xl text-green-200 font-bold'>01</div>
            <h3 className='text-lg font-semibold mt-2 text-center'>Personalize</h3>
            <p className='text-sm text-gray-500 mt-2 w-[260px] pl-[20px] pt-[10px]'>
              Answer a quick survey about how you express yourself, what causes you stress, and what area would you like to work on. This way, we can fully personalize your journal!
            </p>
            <img className="pt-[60px]" src='https://vibrant-jang-bc8deb.netlify.app/ali11.png' alt="img" />
          </div>

         
          <div className='bg-white p-6 rounded-2xl shadow mt-30'>
            <div className='text-5xl text-green-200 font-bold'>02</div>
            <h3 className='text-lg font-semibold mt-2 text-center'>Write & Understand</h3>
            <p className='text-sm text-gray-500 mt-2 w-[270px] pt-[10px]'>
              Write, draw, reflect, understand. Alivio will guide you through the prompts and will help you manage your stress!
            </p>
            <img className="pt-[60px]" src="https://vibrant-jang-bc8deb.netlify.app/ali12.png" alt="rasm" />
          </div>

          <div className='bg-white p-6 rounded-2xl shadow'>
            <div className='text-5xl text-green-200 font-bold'>03</div>
            <h3 className='text-lg font-semibold mt-2 text-center'>Alivio!</h3>
            <p className='text-sm text-gray-500 mt-2 w-[260px]'>
              Now you are aware, and have a way to manage and overcome your own stress.
              What are you waiting for? Alivio today!
            </p>
            <img className="pt-[60px]" src="https://vibrant-jang-bc8deb.netlify.app/ali33.png" alt="img" />
          </div>

        </div>

      </div>
    </div>
  )
}

export default Section