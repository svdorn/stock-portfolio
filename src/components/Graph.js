import React from "react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

import "./Graph.css";

const Graph = ({ data, highDomain, lowDomain, color }) => {
    return (
        <div className="graph">
            {data.length === 0 ? (
                <div className="Loading">Loading...</div>
            ) : (
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={data}>
                        <XAxis dataKey="name" />
                        <YAxis domain={[lowDomain, highDomain]} />
                        <Tooltip />
                        <Line dataKey="Price" stroke={color} dot={false} />
                    </LineChart>
                </ResponsiveContainer>
            )}
        </div>
    );
};

export default Graph;
