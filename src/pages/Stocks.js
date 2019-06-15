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
            daily: []
        };
    }

    componentDidMount() {
        getStock(this.state.ticker).then(response =>
            this.setState({
                intraday: response.intraday,
                daily: response.daily
            })
        );
    }

    render() {
        const { intraday, ticker } = this.state;

        return (
            <div className="container">
                <div className="first-frame-container home-first-frame">
                    <Swirl fill={backgroundLightGray} />
                    {ticker}
                </div>
                <Graph data={intraday} />
            </div>
        );
    }
}

export default Stocks;
