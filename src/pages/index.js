import React from 'react'


import Layout from "../components/layout";
import HeroSlider from "../components/heroSlider";
import ChatPopup from "../components/chatPopup";
import BodyBoxes from "../components/bodyBoxes";
import Testimonials from "../components/testimonials";
import SeeResults from "../components/seeResults";
import InstagramFeed from "../components/instagramFeed";
const IndexPage = () => {

    return (
        <Layout>
            <ChatPopup />
            <HeroSlider />
            <BodyBoxes />
            <Testimonials />
            <SeeResults />
            <InstagramFeed />
        </Layout>
    )
}

export default IndexPage