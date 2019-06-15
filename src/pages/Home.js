import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Swirl from "../components/Swirl";
import MarketGraph from "../components/MarketGraph";
import FeaturedStocksList from "../components/featuredStocks/FeaturedStocksList";

import { palette1Dark, palette3Dark, palette4Dark } from "../colors";

import "./Pages.css";

class Home extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="first-frame-container">
                    <h1>Featured Stocks</h1>
                    <FeaturedStocksList />
                </div>
            </div>
        );
    }
}

export default Home;
