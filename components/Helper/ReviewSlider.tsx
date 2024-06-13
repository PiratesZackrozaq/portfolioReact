import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ClientReviewCard from './ClientReviewCard';
import $ from 'jquery';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1300 },
        items: 3,
        slidesToSlide: 1
    },
    tablet: {
        breakpoint: { max: 1300, min: 764 },
        items: 2,
        slidesToSlide: 1
    },
    mobile: {
        breakpoint: { max: 764, min: 0 },
        items: 1,
        slidesToSlide: 1
    }
};



const ReviewSlider = () => {

    return (
        <Carousel
            responsive={responsive}
            additionalTransfrom={0} // means to render carousel on server-side.
            arrows={true}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={5000}
            centerMode={false}
            infinite={true}
            itemClass="item"
        >
            <ClientReviewCard />
        </Carousel>
    )
};


export default ReviewSlider