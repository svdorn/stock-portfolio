import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import LinkCard from "../components/LinkCard";
import Swirl from "../components/Swirl";
import MarketGraph from "../components/MarketGraph";
import Box from "../components/Box";

import { palette4Dark } from "../colors";

import "./Pages.css";

class Home extends React.Component {
    render() {
        return (
            <div className="container" style={{ marginTop: "90px" }}>
                <section className="section-summary">
                    <div>
                        <Box placement="left" color={palette4Dark} className="collapse-box">
                            <div className="box">
                                Chameleon companies typically make up a large portion of the
                                companies that dominate multiple markets. When the market or
                                technology changes, many companies tend to fail. However, Chameleon
                                companies are able to adapt and are the best at exploring tangential
                                markets. They typically are the companies that become big players -
                                and stay big players. Stay cautious, however, as companies that
                                become too Chameleon-like are susceptible to losing focus and
                                changing their game plans when there is no need to.
                            </div>
                        </Box>
                        <Box placement="right" color={palette4Dark} className="collapse-box">
                            <div className="box">
                                Chameleon companies typically make up a large portion of the
                                companies that dominate multiple markets. When the market or
                                technology changes, many companies tend to fail. However, Chameleon
                                companies are able to adapt and are the best at exploring tangential
                                markets. They typically are the companies that become big players -
                                and stay big players. Stay cautious, however, as companies that
                                become too Chameleon-like are susceptible to losing focus and
                                changing their game plans when there is no need to.
                            </div>
                        </Box>
                    </div>
                </section>
            </div>
        );
    }
}

export default Home;
