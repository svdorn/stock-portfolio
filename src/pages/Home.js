import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Swirl from "../components/Swirl";
import FeaturedStocksList from "../components/stocks/FeaturedStocksList";
import Portfolio from "../components/stocks/Portfolio";

import { backgroundLightGray } from "../colors";

import { getFeaturedStocks, getPortfolioStocks } from "../api/api";

import "./Pages.css";

class Home extends React.Component {
    state = {
        featuredStocks: [],
        portfolio: []
    };
    componentDidMount() {
        getFeaturedStocks().then(response =>
            this.setState({ featuredStocks: response["Stock Quotes"] })
        );

        getPortfolioStocks().then(response =>
            this.setState({ portfolio: response["Stock Quotes"] })
        );
    }
    render() {
        return (
            <div className="container">
                <div className="first-frame-container home-first-frame">
                    <Swirl fill={backgroundLightGray} />
                    <h1>Featured Stocks</h1>
                    <FeaturedStocksList stocks={this.state.featuredStocks} />
                </div>
                <div>
                    <h1>Portfolio</h1>
                    <Portfolio stocks={this.state.portfolio} />
                </div>
            </div>
        );
    }
}

export default Home;
