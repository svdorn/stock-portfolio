import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Swirl from "../components/Swirl";
import MarketGraph from "../components/MarketGraph";
import FeaturedStocksList from "../components/featuredStocks/FeaturedStocksList";

import { backgroundLightGray } from "../colors";

import { getFeaturedStocks } from "../api/api";

import "./Pages.css";

class Stocks extends React.Component {
    constructor(props) {
        super(props);

        // get ticker from url
        const { ticker } = props.match.params;

        this.state = {
            ticker
        };
    }

    render() {
        return (
            <div className="container">
                <div className="first-frame-container home-first-frame">
                    <Swirl fill={backgroundLightGray} />
                    {this.state.ticker}
                </div>
            </div>
        );
    }
}

export default Stocks;
