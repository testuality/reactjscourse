import React from "react";
import { Paper, TextField } from "@material-ui/core";

class SearchBar extends React.Component {

    state = {
        searchTerm: ""
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { searchTerm } = this.state;
        this.props.onFormSubmit(searchTerm);
    }

    handleChange = (event) => {
        if (event.target.value === "") return;
        this.setState({
            searchTerm: event.target.value
        }, () => {
            console.log(this.state.searchTerm);
        });
    }
    // onSubmit={this.handleSubmit}
    render() {
        return (
            <Paper elevation={6} style={{ padding: "25px" }}>
                <form onSubmit={this.handleSubmit}>
                    <TextField fullWidth label="Search..." onChange={this.handleChange}></TextField>
                    <button type="submit" value="Buscar" />
                </form>
            </Paper>
        );
    }
}

export default SearchBar;