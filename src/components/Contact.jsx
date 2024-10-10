import React from 'react'

function Contact() {
    return (
        <>
            <div id='contact' className='min-h-[100vh] py-6 px-6 bg-gradient-to-b from-black to-gray-800 flex flex-col mx-auto justify-center items-center text-gray-400'>

                <div className='flex flex-col items-center'>
                    <h2 className='text-center font-bold text-3xl text-white  w-[150px] p-2'>Contact</h2>
                    <p>Submit the form below to get in touch with me</p>
                </div>

                <div className="flex justify-center items-center mt-14 ">
                    <form action="https://getform.io/f/bgdykpra" method="POST" className=' flex flex-col gap-3 '>
                        <input
                            type="text"
                            name='name'
                            placeholder='Enter your name'
                            className='p-2 bg-black border rounded-md'
                        />
                        <input
                            type="text"
                            name='email'
                            placeholder='Enter your Email'
                            className='p-2 bg-black border rounded-md'

                        />
                        <textarea
                            name="message"
                            id=""
                            placeholder='Enter your message'
                            rows="10"
                            className='bg-black border rounded-md p-2'
                        ></textarea>
                        <button
                        className='p-2 rounded-md bg-gradient-to-b from-cyan-400 to-blue-400 text-white font-bold hover:scale-110'
                        type='submit'
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact
