import React from "react";

import "./Box.css";

const lineTypes = {
    left: ["L-top", "L-left", "L-right", "L-bottom"],
    right: ["R-top", "R-right", "R-left", "R-bottom"],
    center: ["C-top", "C-left", "C-right", "C-bottom-left", "C-bottom-right"]
};

export default ({ style, className, children, placement, color }) => (
    <div className={"box-container " + className || ""} style={style || {}}>
        <div className="borders">
            {lineTypes[placement].map(lineType => (
                <div className={lineType} key={lineType} style={{ background: color }} />
            ))}
        </div>
        {children}
    </div>
);
