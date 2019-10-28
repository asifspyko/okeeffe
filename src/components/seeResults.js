import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";

import beforeThumbnail from "../assets/images/showcase-img.png";
import afterThumbnail from "../assets/images/showcase-img-after.png";
const seeResults = () => {
    return (
        <div className="see-results">
            <div className="container-lg">
                <Tabs>
                    <div className="tabs-wrapper">
                        <div className="see-results-content">
                            <h3>Results You Can See, Guaranteed.</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            <TabList>
                                <Tab className="react-tabs__tab react-tabs__tab--green">Hand</Tab>
                                <Tab className="react-tabs__tab react-tabs__tab--blue">Foot</Tab>
                                <Tab className="react-tabs__tab react-tabs__tab--orange">Lip</Tab>
                                <Tab className="react-tabs__tab react-tabs__tab--yellow">body</Tab>
                            </TabList>
                        </div>

                        <div className="before-after-tabs">
                            <TabPanel>
                                <div className="before-after-showcase colored-green">
                                    <Tabs>
                                        <TabList>
                                            <Tab className="react-tabs__tab">Before</Tab>
                                            <Tab className="react-tabs__tab">After</Tab>
                                        </TabList>
                                        <TabPanel>
                                            <div className="showcase-image showcase-image--before">
                                                <img src={beforeThumbnail} alt="" />
                                            </div>
                                        </TabPanel>
                                        <TabPanel>
                                            <div className="showcase-image showcase-image--after">
                                                <img src={afterThumbnail} alt="" />
                                            </div>
                                        </TabPanel>
                                    </Tabs>
                                </div>
                            </TabPanel>

                            <TabPanel>
                            <div className="before-after-showcase colored-blue">
                                    <Tabs>
                                        <TabList>
                                            <Tab className="react-tabs__tab">Before</Tab>
                                            <Tab className="react-tabs__tab">After</Tab>
                                        </TabList>
                                        <TabPanel>
                                            <div className="showcase-image showcase-image--before">
                                                <img src={beforeThumbnail} alt="" />
                                            </div>
                                        </TabPanel>
                                        <TabPanel>
                                            <div className="showcase-image showcase-image--after">
                                                <img src={afterThumbnail} alt="" />
                                            </div>
                                        </TabPanel>
                                    </Tabs>
                                </div>
                            </TabPanel>

                            <TabPanel>
                            <div className="before-after-showcase colored-orange">
                                    <Tabs>
                                        <TabList>
                                            <Tab className="react-tabs__tab">Before</Tab>
                                            <Tab className="react-tabs__tab">After</Tab>
                                        </TabList>
                                        <TabPanel>
                                            <div className="showcase-image showcase-image--before">
                                                <img src={beforeThumbnail} alt="" />
                                            </div>
                                        </TabPanel>
                                        <TabPanel>
                                            <div className="showcase-image showcase-image--after">
                                                <img src={afterThumbnail} alt="" />
                                            </div>
                                        </TabPanel>
                                    </Tabs>
                                </div>
                            </TabPanel>

                            <TabPanel>
                            <div className="before-after-showcase colored-yellow">
                                    <Tabs>
                                        <TabList>
                                            <Tab className="react-tabs__tab">Before</Tab>
                                            <Tab className="react-tabs__tab">After</Tab>
                                        </TabList>
                                        <TabPanel>
                                            <div className="showcase-image showcase-image--before">
                                                <img src={beforeThumbnail} alt="" />
                                            </div>
                                        </TabPanel>
                                        <TabPanel>
                                            <div className="showcase-image showcase-image--after">
                                                <img src={afterThumbnail} alt="" />
                                            </div>
                                        </TabPanel>
                                    </Tabs>
                                </div>
                            </TabPanel>
                        </div>
                    </div>
                </Tabs>
            </div>
        </div>
    )
}

export default seeResults
