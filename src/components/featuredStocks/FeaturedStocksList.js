import React from "react";
import FeaturedStock from "./FeaturedStock";

import "./FeaturedStocks.css";

import { palette1Dark, palette3Dark, palette4Dark } from "../../colors";

const stocks = [
    {
        color: palette3Dark,
        placement: "left",
        name: "Gilead Sciences",
        ticker: "GILD",
        change: "+$10.45",
        percentChange: "+32.00%"
    },
    {
        color: palette4Dark,
        placement: "center",
        name: "Apple",
        ticker: "AAPL",
        change: "+$2.45",
        percentChange: "+2.30%"
    },
    {
        color: palette1Dark,
        placement: "right",
        name: "Skyworks Solutions",
        ticker: "SWKS",
        change: "-$3.45",
        percentChange: "-12.09%"
    }
];

console.log("stocks: ", stocks);

export default () => (
    <section className="featured-stocks-list">
        <div>
            {stocks.map(stock => (
                <FeaturedStock color={stock.color} placement={stock.placement} stock={stock} />
            ))}
        </div>
    </section>
);
