import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ScrollToTop from "react-router-scroll-top";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
// import Header and Footer components
import Header from "./components/Header";
import Footer from "./components/Footer";
// import all pages
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Stocks from "./pages/Stocks";

import "./App.css";

const typography = { fontFamily: '"Muli", sans-serif', useNextVariants: true };
const palette = {
    primary: {
        main: "#ffe289"
    },
    secondary: {
        main: "#000000"
    }
};

const theme = createMuiTheme({ palette, typography });

const App = () => (
    <Router>
        <ScrollToTop>
            <MuiThemeProvider theme={theme}>
                <Header />

                <div className="App">
                    <Route path="/" exact component={Home} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/stocks/:ticker" component={Stocks} />
                </div>

                <Footer />
            </MuiThemeProvider>
        </ScrollToTop>
    </Router>
);

export default App;
