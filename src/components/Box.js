import React from "react";

import Button from "./Button";
import ShiftArrow from "./ShiftArrow";

import "./Box.css";

export default ({ variant, png, onClick }) => {
    const i = info[variant];
    return (
        <div styleName="box" onClick={onClick}>
            <img src={`/images/home/Star${i.starColor}.png`} styleName="star" style={i.starStyle} />
            {i.hasCornerOutline
                ? [
                      <div key={`${variant} top`} styleName="outline-top" style={i.topStyle} />,
                      <div
                          key={`${variant} starter side`}
                          styleName="outline-side-starter"
                          style={i.starterSideStyle}
                      />,
                      <div
                          key={`${variant} bottom`}
                          styleName="outline-bottom"
                          style={i.bottomStyle}
                      />,
                      <div
                          key={`${variant} follower side`}
                          styleName="outline-side-follower"
                          style={i.followerSideStyle}
                      />
                  ]
                : [
                      <div key="top" styleName="outline-c-top" style={i.topStyle} />,
                      <div key="left" styleName="outline-c-left" style={i.colorStyle} />,
                      <div key="right" styleName="outline-c-right" style={i.colorStyle} />,
                      <div key="bl" styleName="outline-c-bottom-left" style={i.colorStyle} />,
                      <div key="br" styleName="outline-c-bottom-right" style={i.colorStyle} />
                  ]}
            <h2 styleName="title">{i.title}</h2>
            <h4>{i.subtext}</h4>
            <div styleName="cta" style={{ color: i.color }}>
                <b styleName="cta-text">{i.cta}</b>
                <ShiftArrow color={i.color} width="12px" style={{ marginBottom: "3px" }} nested />
            </div>
        </div>
    );
};

const colors = {
    "quantify culture": "#fe7774",
    "assess applicants": "#28d5d4",
    hire: "#9369fe"
};
const info = {
    "quantify culture": {
        img: `/images/home/1`,
        title: "Quantify your culture",
        subtext:
            "Your employees complete a four-minute culture questionnaire to build a profile for your unique company culture.",
        cta: "Take Culture Quiz",
        color: colors["quantify culture"],
        topStyle: {
            left: 0,
            transformOrigin: "top left",
            backgroundColor: colors["quantify culture"]
        },
        starterSideStyle: {
            left: 0,
            transformOrigin: "top left",
            backgroundColor: colors["quantify culture"]
        },
        bottomStyle: {
            left: 0,
            transformOrigin: "bottom left",
            backgroundColor: colors["quantify culture"]
        },
        followerSideStyle: {
            right: 0,
            transformOrigin: "top right",
            backgroundColor: colors["quantify culture"]
        },
        hasCornerOutline: true,
        starColor: "Red",
        starStyle: { bottom: 0, right: "0", transform: "translate(29%, 25%)" }
    },
    "assess applicants": {
        img: `/images/home/2`,
        title: "Assess job applicants",
        subtext:
            "Job applicants complete a short assessment so you can quickly identify their future performance.",
        cta: "Try Assessment",
        color: "#28d5d4",
        topStyle: {
            left: 0,
            transformOrigin: "top center",
            backgroundColor: colors["assess applicants"]
        },
        colorStyle: { backgroundColor: colors["assess applicants"] },
        starColor: "Green",
        starStyle: { bottom: 0, left: "50%", transform: "translate(-50%,50%) rotate(46deg)" }
    },
    hire: {
        img: `/images/home/3`,
        title: "Hire for culture and values",
        subtext: "View job applicants in the context of their future success at your company.",
        cta: "See Applicant Reports",
        color: "#9369fe",
        topStyle: { right: 0, transformOrigin: "top right", backgroundColor: colors["hire"] },
        starterSideStyle: {
            right: 0,
            transformOrigin: "top right",
            backgroundColor: colors["hire"]
        },
        bottomStyle: { right: 0, transformOrigin: "bottom right", backgroundColor: colors["hire"] },
        followerSideStyle: {
            left: 0,
            transformOrigin: "top left",
            backgroundColor: colors["hire"]
        },
        hasCornerOutline: true,
        starColor: "Purple",
        starStyle: { bottom: 0, left: "0", transform: "translate(-29%, 25%)" }
    }
};
