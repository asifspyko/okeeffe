import React from 'react'

import InstaSlider from 'react-slick'
import { Link } from "gatsby";
import instaIcon from "../assets/images/instagram-icon.svg"
import instaFeed1 from "../assets/images/instafeed-1.png"
import instaFeed2 from "../assets/images/instafeed-2.png"
import instaFeed3 from "../assets/images/instafeed-3.png"
import instaFeed4 from "../assets/images/instafeed-4.png"

const images = [instaFeed1, instaFeed2, instaFeed3, instaFeed4,instaFeed1,instaFeed2]

const instagramFeed = () => {
    const settings = {
        accessibility: false,
        nav: true,
        dots: true,
        arrows: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
    };
    return (
        <div className="instagram-feed">
            <div className="container">
                <div className="insta-icon">
                    <img src={instaIcon} alt="" />
                </div>
                <h3>Helping Thousands and Counting</h3>
                <div className="link-wrapper">
                    <Link to="/" className="link link--green">@okeeffescompany</Link>
                </div>

                <div className="insta-grid">
                    <InstaSlider {...settings}>
                        { images.map((t) =>
                            <div className="insta-feed-block">
                                <img src={t} alt="" />
                            </div>
                        )}
                    </InstaSlider>
                </div>
                <div className="btn-wrapper">
                    <Link to="/" className="btn btn--green btn--sm">Share Your Story</Link>
                </div>
            </div>
        </div>
    )
}

export default instagramFeed
