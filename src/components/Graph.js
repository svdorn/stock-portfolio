import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from "recharts";

const Graph = ({ data, highDomain, lowDomain }) => {
    return (
        <div
            header={<h1>Dow Jones Industrial Average (4 Months)</h1>}
            className="MarketGraph-Panel"
        >
            {data.length === 0 ? (
                <div className="Loading">Loading...</div>
            ) : (
                <LineChart
                    width={900}
                    height={300}
                    data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                    <XAxis dataKey="name" />
                    <YAxis domain={[lowDomain, highDomain]} />
                    <Tooltip />
                    <Legend />
                    <Line dataKey="Price" stroke="black" dot={false} />
                </LineChart>
            )}
        </div>
    );
};

export default Graph;
