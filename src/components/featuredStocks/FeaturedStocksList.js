import React from "react";
import FeaturedStock from "./FeaturedStock";

import "./FeaturedStocks.css";

import { palette1Dark, palette3Dark, palette4Dark } from "../../colors";

const predefinedStocks = [
    {
        color: palette3Dark,
        placement: "left",
        name: "Gilead Sciences",
        ticker: "GILD"
    },
    {
        color: palette4Dark,
        placement: "center",
        name: "Apple",
        ticker: "AAPL"
    },
    {
        color: palette1Dark,
        placement: "right",
        name: "Skyworks Solutions",
        ticker: "SWKS"
    }
];

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default ({ stocks }) => {
    for (let i = 0; i < stocks.length; i++) {
        let stock = stocks[i];
        const found = predefinedStocks.find(
            st => st.ticker.toString() === stock["1. symbol"].toString()
        );

        if (found) {
            found.price = "$" + parseFloat(stock["2. price"]).toFixed(2);
            found.volume = numberWithCommas(stock["3. volume"]);
        }
    }

    return (
        <section className="featured-stocks-list">
            <div>
                {predefinedStocks.map(stock => (
                    <FeaturedStock key={stock.ticker} stock={stock} />
                ))}
            </div>
        </section>
    );
};
