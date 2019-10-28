import React from 'react'
import { Link } from 'gatsby'

import Slider from 'react-slick'
import ProdImage from '../assets/images/product-hero.png'
import ProdImageLady from '../assets/images/slider-thumb-2.png'
import heroProduct from '../assets/images/hero-product.png'

const heroSlider = () => {

    const settings = {
        accessibility: false,
        nav: true,
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="hero">
            <Slider {...settings}>
                <div className="slide__inner">
                    <div className="container pos-rel">
                        <div className="slide__inner--content">
                            <span>All new look, same</span>
                            <h1>Guaranteed Results.  <span>Seriously.</span></h1>
                            <Link to="/" className="btn btn--primary btn--sm">Learn More</Link>
                        </div>
                    </div>
                    <img className="prod-thumbnail-lg" src={ProdImage} alt="" />
                </div>
                <div className="slide__inner slide--2">
                    <div className="container pos-rel">
                        <div className="slide__inner--content">
                            <h1>hard working relief for DRY hands</h1>
                            <span>All new look, but same Guaranteed Relief</span>
                            <Link to="/" className="btn btn--primary btn--sm">Learn More</Link>
                        </div>
                        <img className="hero-product" src={heroProduct} alt="" />
                    </div>
                    <img className="prod-thumbnail-lady" src={ProdImageLady} alt="" />
                </div>
            </Slider>
        </div>
    )
}

export default heroSlider
