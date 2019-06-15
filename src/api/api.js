const API_KEY = "weJqvzzJetukXnG6VJYj";

/**
 * Init Alpha Vantage with your API key.
 *
 * @param {String} key
 *   Your Alpha Vantage API key.
 */
const alpha = require("alphavantage")({ key: API_KEY });

function getData(data) {
    let arr = [];
    let newData = [];
    for (let i in data) {
        if (i.toString() !== "Meta Data") {
            for (let j in data[i]) {
                if (j !== undefined) {
                    arr.push({ name: j, data: parseFloat(data[i][j]["1. open"]) });
                }
            }
        }
    }
    for (let i = arr.length - 1; i >= 0; i--) {
        newData.push(arr[i]);
    }

    return newData;
}

async function getDJIA() {
    const response = await alpha.data.daily("DJIA", 1);

    return response;
}

async function getFeaturedStocks() {
    const response = await alpha.data.batch(["GILD", "AAPL", "SWKS"]);

    return response;
}

async function getStock(ticker) {
    const intraday = await getIntraday(ticker);
    const daily = await getDaily(ticker);

    return { intraday, daily: getData(daily) };
}

async function getIntraday(ticker) {
    let intraday = await alpha.data.intraday(ticker, "compact", "json", "5min");

    const today = new Date();
    const date = today.getDate();
    let intra = [];
    intraday = getData(intraday);
    for (let i = 0; i < intraday.length; i++) {
        const day = new Date(intraday[i].name);
        if (day.getDate() === date) {
            intra.push(intraday[i]);
        }
    }

    return intra;
}

async function getDaily(ticker) {
    const daily = await alpha.data.daily(ticker);

    return daily;
}

async function getMonthly(ticker) {
    const monthly = await alpha.data.monthly(ticker);

    return monthly;
}

async function getSma(ticker) {
    const sma = await alpha.technical.sma(ticker, "daily", 60, "close");

    return sma;
}

async function getWma(ticker) {
    const wma = await alpha.technical.wma(ticker, "daily", 60, "close");

    return wma;
}

export { getDJIA, getFeaturedStocks, getIntraday, getDaily, getMonthly, getSma, getWma, getStock };
