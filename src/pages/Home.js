import React from "react";
import Swirl from "../components/Swirl";
import FeaturedStocksList from "../components/stocks/FeaturedStocksList";
import Graph from "../components/Graph";
import Portfolio from "../components/stocks/Portfolio";
import Search from "../components/Search";

import { backgroundLightGray, backgroundGray, palette3Dark } from "../colors";

import { getFeaturedStocks, getPortfolioStocks, getIntraday } from "../api/api";

import "./Pages.css";

class Home extends React.Component {
    state = {
        featuredStocks: [],
        portfolio: [],
        intraday: [],
        lowDomain: 0,
        highDomain: 200
    };

    componentDidMount() {
        getFeaturedStocks().then(response =>
            this.setState({ featuredStocks: response["Stock Quotes"] })
        );

        getPortfolioStocks().then(response =>
            this.setState({ portfolio: response["Stock Quotes"] })
        );

        getIntraday("SPY").then(response =>
            this.setState({
                intraday: response.intraday,
                lowDomain: response.lowDomain,
                highDomain: response.highDomain
            })
        );
    }

    render() {
        const { intraday, lowDomain, highDomain, featuredStocks, portfolio } = this.state;

        return (
            <div className="container">
                <div className="first-frame-container frame-container">
                    <Swirl fill={backgroundLightGray} />
                    <h1>Featured Stocks</h1>
                    <FeaturedStocksList stocks={featuredStocks} />
                </div>
                <div className="market-graph frame-container">
                    <Swirl fill={backgroundGray} />
                    <h1>Market Portfoilo</h1>
                    <Graph
                        data={intraday}
                        lowDomain={lowDomain}
                        highDomain={highDomain}
                        color={palette3Dark}
                    />
                </div>
                <div className="portfolio-container frame-container">
                    <Swirl fill={backgroundLightGray} />
                    <h1>Portfolio</h1>
                    <div className="portfolio">
                        <Portfolio stocks={portfolio} />
                    </div>
                </div>
                <div className="value-props last-frame">
                    <div>
                        <img src="/images/StarGreen.png" alt="Stocks" height={40} />
                        <h3>Invest for Free</h3>
                        <p>
                            Everyone should be able to invest for free. Enjoy our investment
                            community with no fees, ever.
                        </p>
                    </div>
                    <div>
                        <img src="/images/StarPurple.png" alt="Stocks" height={40} />
                        <h3>Donate if you want</h3>
                        <p>
                            Donate whatever portion of your investment profits that you deem fit, or
                            donate nothing at all!
                        </p>
                    </div>
                    <div>
                        <img src="/images/StarRed.png" alt="Stocks" height={40} />
                        <h3>Share with the Community</h3>
                        <p>
                            Share your finance experiences with your community. Help other members
                            out.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
