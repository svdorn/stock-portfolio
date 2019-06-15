import React from "react";
import Box from "../Box";

import "./FeaturedStocks.css";

export default ({ color, placement, stock }) => (
    <Box placement={placement} color={color} className="collapse-box">
        <div className="box">
            <h3>{stock.name}</h3>
            <div style={{ color: color }}>
                {stock.ticker} <br />
                {stock.price}
                <br />
                {stock.volume}
            </div>
        </div>
    </Box>
);
