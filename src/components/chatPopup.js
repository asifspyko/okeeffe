import React from 'react'

import chatIcon from "../assets/images/chat-icon.svg";
const chatPopup = () => {
    return (
        <div className="chat-popup">
            <div className="chat-area"></div>
            <button className="chat-toggler">
                <span><img src={chatIcon} alt=""/></span>
                Chat With Us
            </button>
        </div>
    )
}

export default chatPopup
