import React from "react";
import Box from "../Box";
import { Link } from "react-router-dom";

import "./FeaturedStocks.css";

export default ({ stock }) => (
    <Link to={`/stocks/${stock.ticker}`}>
        <Box placement={stock.placement} color={stock.color} className="portfolio-box">
            <div className="box">
                <h5>{stock.name}</h5>
                <div style={{ color: stock.color }}>
                    {stock.ticker}
                    <br />
                    <b className="price">{stock.price ? <span>{stock.price}</span> : "$$$..."}</b>
                </div>
            </div>
        </Box>
    </Link>
);
