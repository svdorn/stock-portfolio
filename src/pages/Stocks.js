import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Swirl from "../components/Swirl";
import Graph from "../components/Graph";
import FeaturedStocksList from "../components/featuredStocks/FeaturedStocksList";

import { backgroundLightGray } from "../colors";

import { getStock } from "../api/api";

import "./Pages.css";

class Stocks extends React.Component {
    constructor(props) {
        super(props);

        // get ticker from url
        const { ticker } = props.match.params;

        this.state = {
            ticker,
            intraday: [],
            daily: [],
            lowDomain: 0,
            highDomain: 200
        };
    }

    componentDidMount() {
        getStock(this.state.ticker).then(response =>
            this.setState({
                intraday: response.intraday.intraday,
                lowDomain: response.intraday.lowDomain,
                highDomain: response.intraday.highDomain,
                daily: response.daily
            })
        );
    }

    render() {
        const { highDomain, lowDomain, intraday, ticker } = this.state;

        return (
            <div className="container">
                <div className="first-frame-container home-first-frame">
                    <Swirl fill={backgroundLightGray} />
                    {ticker}
                </div>
                <Graph data={intraday} lowDomain={lowDomain} highDomain={highDomain} />
            </div>
        );
    }
}

export default Stocks;
