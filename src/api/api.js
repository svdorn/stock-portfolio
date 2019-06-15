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

    return response;
}

async function getStock(ticker) {
    const intraday = await alpha.data.intraday(ticker, "compact", "json", "30min");

    const daily = await alpha.data.daily(ticker);

    const monthly = await alpha.data.monthly(ticker);

    const sma = await alpha.technical.sma(ticker, "daily", 60, "close");

    const wma = await alpha.technical.wma(ticker, "daily", 60, "close");

    return { intraday, daily, monthly, sma, wma };
}

export { getDJIA, getFeaturedStocks, getStock };
