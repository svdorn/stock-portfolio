import React from "react";
import Swirl from "../components/Swirl";
import TextField from "@material-ui/core/TextField";

import { backgroundLightGray, palette3Dark } from "../colors";

import { search } from "../api/api";

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            results: [],
            keyword: ""
        };
    }

    handleChange = name => event => {
        const value = event.target.value;
        console.log("value: ", value);
        search(value).then(response => this.setState({ [name]: value, results: response }));
    };

    render() {
        console.log("results: ", this.state.results);
        return (
            <div>
                <TextField
                    id="standard-search"
                    label="Search"
                    variant="outlined"
                    className="text-field"
                    type="search"
                    name="keyword"
                    value={this.state.keyword}
                    onChange={this.handleChange("keyword")}
                />
            </div>
        );
    }
}

export default Search;
