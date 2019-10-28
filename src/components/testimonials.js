import React from 'react'

import TestimonialsSlider from 'react-slick'

const testimonialArray = [
    {   key: 'testimonial-1',
        name: '-  Martin',
        testimonial: 'Just works! Only thing that works for dry cracking hands! Better than most more expensive brands.'
    }, {
        key: 'testimonial-2',
        name: '-  Martin',
        testimonial: 'Just works! Only thing that works for dry cracking hands! Better than most more expensive brands.'
    }, {
        key: 'testimonial-3',
        name: '-  Martin',
        testimonial: 'Just works! Only thing that works for dry cracking hands! Better than most more expensive brands.'
    }, {
        key: 'testimonial-4',
        name: '-  Martin',
        testimonial: 'Just works! Only thing that works for dry cracking hands! Better than most more expensive brands.'
    }, {
        key: 'testimonial-5',
        name: '-  Martin',
        testimonial: 'Just works! Only thing that works for dry cracking hands! Better than most more expensive brands.'
    }, {
        key: 'testimonial-6',
        name: '-  Martin',
        testimonial: 'Just works! Only thing that works for dry cracking hands! Better than most more expensive brands.'
    }
]

const testimonials = () => {
    const settings = {
        accessibility: false,
        nav: true,
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
    };
    return (
        <div className="testimonials">
            <div className="container-lg">
                <TestimonialsSlider {...settings}>
                    {testimonialArray.map((t) =>
                        <div key={t.key} className="item testimonial">
                            <div className="testimonial--content">
                                <p>{t.testimonial}</p>
                                <span className="testimonial--content__by">{t.name}</span>
                            </div>
                        </div>
                    )}
                </TestimonialsSlider>
            </div>
        </div>
    )
}

export default testimonials
