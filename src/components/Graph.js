import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

import "./Graph.css";

const Graph = ({ data, highDomain, lowDomain, color }) => {
    return (
        <div className="graph">
            {data.length === 0 ? (
                <div className="Loading">Loading...</div>
            ) : (
                <LineChart width={900} height={300} data={data}>
                    <XAxis dataKey="name" />
                    <YAxis domain={[lowDomain, highDomain]} />
                    <Tooltip />
                    <Line dataKey="Price" stroke={color} dot={false} />
                </LineChart>
            )}
        </div>
    );
};

export default Graph;
