import React from "react";
import FeaturedStock from "./FeaturedStock";

import "./FeaturedStocks.css";

import { palette1Dark, palette2Dark, palette3Dark, palette4Dark } from "../../colors";

const predefinedStocks = [
    {
        color: palette3Dark,
        placement: "left",
        name: "Constellation Brands",
        ticker: "STZ"
    },
    {
        color: palette4Dark,
        placement: "center",
        name: "TransDigm",
        ticker: "TDG"
    },
    {
        color: palette1Dark,
        placement: "right",
        name: "Facebook",
        ticker: "FB"
    },
    {
        color: palette2Dark,
        placement: "left",
        name: "Boeing",
        ticker: "BA"
    },
    {
        color: palette3Dark,
        placement: "center",
        name: "Mastercard",
        ticker: "MA"
    },
    {
        color: palette4Dark,
        placement: "right",
        name: "Charles Schwab",
        ticker: "SCHW"
    },
    {
        color: palette1Dark,
        placement: "left",
        name: "Altaba",
        ticker: "AABA"
    },
    {
        color: palette2Dark,
        placement: "center",
        name: "Microsoft",
        ticker: "MSFT"
    },
    {
        color: palette3Dark,
        placement: "right",
        name: "Amazon",
        ticker: "AMZN"
    },
    {
        color: palette4Dark,
        placement: "left",
        name: "Alphabet",
        ticker: "GOOGL"
    },
    {
        color: palette1Dark,
        placement: "center",
        name: "Apple",
        ticker: "AAPL"
    },
    {
        color: palette2Dark,
        placement: "right",
        name: "PayPal",
        ticker: "PYPL"
    },
    {
        color: palette3Dark,
        placement: "left",
        name: "Charter",
        ticker: "CHTR"
    },
    {
        color: palette4Dark,
        placement: "center",
        name: "Netflix",
        ticker: "NFLX"
    },
    {
        color: palette1Dark,
        placement: "right",
        name: "Salesforce",
        ticker: "CRM"
    },
    {
        color: palette2Dark,
        placement: "left",
        name: "Disney",
        ticker: "DIS"
    },
    {
        color: palette3Dark,
        placement: "center",
        name: "Visa",
        ticker: "V"
    },
    {
        color: palette4Dark,
        placement: "right",
        name: "Credit Acceptance",
        ticker: "CACC"
    },
    {
        color: palette1Dark,
        placement: "left",
        name: "PTC Inc",
        ticker: "PTC"
    },
    {
        color: palette2Dark,
        placement: "center",
        name: "Box",
        ticker: "BOX"
    },
    { color: palette3Dark, placement: "right", name: "Gilead Sciences", ticker: "GILD" }
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
