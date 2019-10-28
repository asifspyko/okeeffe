import React from 'react'
import { Link } from 'gatsby'

import ftrLogo from '../assets/images/ftr-logo.svg'
import submitArrow from '../assets/images/submitArrow.svg'
import twitterIcon from '../assets/images/twitter-icon.svg'
import fbIcon from '../assets/images/facebook-icon.svg'
import instaIcon from '../assets/images/insta-icon.svg'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__banner">
                <h3>100% Money Back Guarantee</h3>
                <span>Not satisfied?  Click for Details</span>
            </div>
            <div className="footer__inner">
                <div className="container">
                    <div className="logo-wrapper">
                        <Link to="/">
                            <img src={ftrLogo} alt="Site Logo" />
                        </Link>
                    </div>
                    <div className="footer-navigation">
                        <div className="col-left">
                            <div className="footer-navigation__block">
                                <span className="block-title">Products</span>
                                <ul className="footer-navigation__list">
                                    <li>
                                        <Link to="/">For Hands</Link>
                                    </li>
                                    <li>
                                        <Link to="/">For Feet</Link>
                                    </li>
                                    <li>
                                        <Link to="/">For Lips</Link>
                                    </li>
                                    <li>
                                        <Link to="/">For Lips</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer-navigation__block">
                                <span className="block-title">Account</span>
                                <ul className="footer-navigation__list">
                                    <li>
                                        <Link to="/">Manage Account</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Privacy Policy</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer-navigation__block ml-30">
                                <span className="block-title">Support</span>
                                <ul className="footer-navigation__list">
                                    <li>
                                        <Link to="/">FAQs</Link>
                                    </li>
                                    <li>
                                        <Link to="/contact">Contact Us</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer-navigation__block">
                                <span className="block-title">Company</span>
                                <ul className="footer-navigation__list">
                                    <li>
                                        <Link to="/">Press</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Careers</Link>
                                    </li>
                                    <li>
                                        <Link to="/">About Us</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-right">
                            <h3 className="block-title">Keep up with okeeffe’s</h3>
                            <p>Get Soothing Relief to your inbox.</p>
                            <form action="">
                                <input type="text" placeholder="Your Email" />
                                <button type="submit">
                                    <img src={submitArrow} alt="Site Logo" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="container footer__bottom__wrapper">
                    <div className="copyrights-text">
                        Copyright © 2019 Okeeffe’s Company.  All Rights Reserved
                    </div>
                    <div className="social-links">
                        <ul>
                            <li>
                                <Link to="">
                                    <img src={twitterIcon} alt="Twitter Icon" />
                                </Link>
                            </li>
                            <li>
                                <Link to="">
                                    <img src={fbIcon} alt="Facebook Icon" />
                                </Link>
                            </li>
                            <li>
                                <Link to="">
                                    <img src={instaIcon} alt="Instagram Icon" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer