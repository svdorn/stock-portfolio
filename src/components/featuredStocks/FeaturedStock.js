import React from "react";
import Box from "../Box";
import { Link } from "react-router-dom";

import "./FeaturedStocks.css";

export default ({ stock }) => (
    <Link to={`/stocks/${stock.ticker}`}>
        <Box placement={stock.placement} color={stock.color} className="collapse-box">
            <div className="box">
                <h3>{stock.name}</h3>
                <div style={{ color: stock.color }}>
                    {stock.ticker}
                    <br />
                    <b className="price">{stock.price ? <span>{stock.price}</span> : "$$$..."}</b>
                </div>
                <div className="volume">
                    Volume:{" "}
                    <span style={{ color: stock.color }}>
                        {stock.volume ? <span>{stock.volume}</span> : "Loading..."}
                    </span>
                </div>
            </div>
        </Box>
    </Link>
);
