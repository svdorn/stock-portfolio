import React from "react";
import Box from "../Box";

import "./FeaturedStocks.css";

export default ({ color, placement, stock }) => (
    <Box placement={placement} color={color} className="collapse-box">
        <div className="box">
            <h3>{stock.name}</h3>
            <div style={{ color: color }}>
                {stock.ticker}
                <br />
                <b className="price">{stock.price ? <span>{stock.price}</span> : "$$$..."}</b>
            </div>
            <div className="volume">
                Volume:{" "}
                <span style={{ color: color }}>
                    {stock.volume ? <span>{stock.volume}</span> : "Loading..."}
                </span>
            </div>
        </div>
    </Box>
);
