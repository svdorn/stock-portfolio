import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import LinkCard from "../components/LinkCard";
import Swirl from "../components/Swirl";
import MarketGraph from "../components/MarketGraph";
import Box from "../components/Box";

import "./Pages.css";

class Home extends React.Component {
    render() {
        return (
            <div className="container">
                <MarketGraph />
                <Box variant="quantify culture" />
            </div>
        );
    }
}

export default Home;
