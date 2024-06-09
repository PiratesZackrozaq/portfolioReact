import React from 'react';
import TypeWriterEffect from './Helper/TypeWriterEffect';

const Hero = () => {
    return (
        <div className='w-[100vw] pt-[12vh] h-[85vh] md:h-[100vh] custom-bg'>
            <div className='flex justify-center flex-col w-[80%] h-[100%] mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-[3rem] items-center'>
                    <div>
                        <h1 className='text-[#c4cfde] mb-[1.3rem]'>Welcome</h1>
                        <div>
                            <h1 className='xl:text-[50px] lg:text-[40px] sm:text-[35px] text-[25px] font-semibold leading-[2.4rem] text-white'>
                                Greetings, I am <span className='text-yellow-300'>Zaki Beard</span>
                            </h1>
                            <TypeWriterEffect />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero