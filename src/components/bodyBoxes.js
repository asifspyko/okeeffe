import React from 'react'
import { Link } from "gatsby";

import HandImage from '../assets/images/hand.png'
import LipImage from '../assets/images/lip.png'
import BodyImage from '../assets/images/body.png'
import FootImage from '../assets/images/foot.png'
const bodyBoxes = () => {
    return (
        <div className="body-boxes">
            <div className="boxes-wrapper">
                <div className="boxes-inner">
                    <div className="w-33">
                        <div className="body-block-outer">
                            <div className="body-block body-block--green">
                                <img src={HandImage} alt="" className="img-fluid" />
                                <div className="block-inner">
                                    <div className="block-content">
                                        <h3>HAND</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                        <Link to="/" className="btn btn--dark btn--sm">Learn More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-33 has-two-blocks">
                        <div className="body-block-outer">
                            <div className="body-block body-block--orange">
                                <img src={LipImage} alt="" className="img-fluid" />
                                <div className="block-inner">
                                    <div className="block-content">
                                        <h3>Lip</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                        <Link to="/" className="btn btn--dark btn--sm">Learn More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="body-block-outer">
                            <div className="body-block body-block--yellow">
                                <img src={BodyImage} alt="" className="img-fluid" />
                                <div className="block-inner">
                                    <div className="block-content">
                                        <h3>body</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                        <Link to="/" className="btn btn--dark btn--sm">Learn More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-33">
                        <div className="body-block-outer">
                            <div className="body-block body-block--blue">
                                <img src={FootImage} alt="" className="img-fluid" />
                                <div className="block-inner">
                                    <div className="block-content">
                                        <h3>foot</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                        <Link to="/" className="btn btn--dark btn--sm">Learn More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default bodyBoxes
