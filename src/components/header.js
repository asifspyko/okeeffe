import React from 'react'
import { Link } from 'gatsby'
import Logo from '../assets/images/site-logo.svg'
import searchMag from '../assets/images/search-mag.svg'
const Header = () => {
    return (
        <header>
            <div className="header-inner">
                <div className="logo">
                    <Link to="/">
                        <img src={Logo} alt="Site Logo" />
                    </Link>
                </div>
                <nav className="site-nav">
                    <ul>
                        <li className="has-dropdown">
                            <Link to="/products">Products</Link>
                            {/* <div className="dropdown-menu">
                                <div className="links-block">
                                    <h3>WORKING HANDS</h3>
                                    <ul>
                                        <li><Link to="/">Hand Creem</Link></li>
                                        <li><Link to="/">Night Treatment</Link></li>
                                    </ul>
                                </div>
                                <div className="links-block">
                                    <h3>HEALTHY FEET</h3>
                                    <ul>
                                        <li><Link to="/">Foot Creem</Link></li>
                                        <li><Link to="/">Exfoliating</Link></li>
                                        <li><Link to="/">Night Treatment</Link></li>

                                    </ul>
                                </div>
                                <div className="links-block">
                                    <h3>LIP REPAIR</h3>
                                    <ul>
                                        <li><Link to="/">Unscented</Link></li>
                                        <li><Link to="/">Cooling Relief</Link></li>
                                        <li><Link to="/">SPF 35</Link></li>
                                        <li><Link to="/">Night Treatment</Link></li>
                                    </ul>
                                </div>
                                <div className="links-block">
                                    <h3>SKIN REPAIR</h3>
                                    <ul>
                                        <li><Link to="/">48 hr Body Lotion</Link></li>
                                        <li><Link to="/">Soothing & Calming</Link></li>
                                    </ul>
                                </div>
                                <div className="links-block">
                                    <img src="" alt="" />
                                </div>
                            </div> */}
                        </li>
                        <li>
                            <Link to="/results">Results</Link>
                        </li>
                        <li>
                            <Link to="/contact">100% Money Back Guarantee</Link>
                        </li>
                        <li>
                            <Link to="/ourStory">Our Story</Link>
                        </li>
                    </ul>
                </nav>
                <div className="search-wrap">
                    <div className="language-picker">
                        <Link to="/">Español</Link>
                    </div>
                    <form>
                        <input type="text" name="search" />
                        <button type="submit">
                            <img src={searchMag} alt="Site Logo" />
                        </button>
                    </form>
                </div>
            </div>
        </header>
    )
}

export default Header