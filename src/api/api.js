const API_KEY = "weJqvzzJetukXnG6VJYj";

/**
 * Init Alpha Vantage with your API key.
 *
 * @param {String} key
 *   Your Alpha Vantage API key.
 */
const alpha = require("alphavantage")({ key: API_KEY });

async function getDJIA() {
    const response = await alpha.data.daily("DJIA", 1);

    return response;
}

async function getFeaturedStocks() {
    const response = await alpha.data.batch(["GILD", "AAPL", "SWKS"]);

    console.log("featured: ", response);

    return response;
}

export { getDJIA, getFeaturedStocks };
