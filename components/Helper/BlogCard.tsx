import React from 'react';
import Image from 'next/image';

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
            <Image src={`$(image)`}
            alt='blog' 
            width={300}
            height={300}
            className='object-cover w'
            />
        </div>
    </div>
  )
}

export default BlogCard