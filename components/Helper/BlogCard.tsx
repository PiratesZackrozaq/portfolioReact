import React from 'react';
import Image from 'next/image';
import { CalendarIcon } from '@heroicons/react/20/solid';

interface Props {
    title:string;
    comment:string;
    date:string;
    image:string;
}

const BlogCard = ({title,comment,date,image}:Props) => {
  return (
    <div>
        <div>
            <Image src={`${image}`}
            alt='blog' 
            width={300}
            height={300}
            className='object-cover w-[100%] h-[100%]'
            />
        </div>
        <div className='p-4'>
            <div className='mt-'>
                <CalendarIcon />
            </div>
        </div>
    </div>
  )
}

export default BlogCard