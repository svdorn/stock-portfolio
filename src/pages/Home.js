import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Swirl from "../components/Swirl";
import FeaturedStocksList from "../components/featuredStocks/FeaturedStocksList";

import { backgroundLightGray } from "../colors";

import { getFeaturedStocks } from "../api/api";

import "./Pages.css";

class Home extends React.Component {
    state = {
        featuredStocks: []
    };
    componentDidMount() {
        getFeaturedStocks().then(response =>
            this.setState({ featuredStocks: response["Stock Quotes"] })
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
            </div>
        );
    }
}

export default Home;
