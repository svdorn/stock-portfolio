"use strict";
import React, { Component } from "react";
import { withTheme } from "@material-ui/core/styles";
import "./ShiftArrow.css";
import Arrow from "./icons/Arrow";

class ShiftArrow extends Component {
    render() {
        const style = typeof this.props.style === "object" ? this.props.style : {};
        const disabledStyle = this.props.disabled ? "disabled" : "";
        return (
            <Arrow
                width={this.props.width ? this.props.width : "10px"}
                color={"#000"}
                style={style}
                className={`${this.props.reversed ? "reverse-" : ""}shift-arrow ${disabledStyle} ${
                    this.props.nested ? "nested-in-div" : ""
                }`}
            />
        );
    }
}

export default withTheme()(ShiftArrow);
