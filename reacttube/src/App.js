import React from "react";
import { Grid } from "@material-ui/core";
import youtube from "./api/youtube";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";

// https://youtu.be/VPVzx1ZOVuw?list=PLd6Igc0Cu9vUwgcEdFOfQN1m4nq6pU3iX&t=2664

class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    }

    handleSubmit = async (searchTerm) => {
        console.log("Searching....");
        const response = await youtube.get('search', {params: {
            q: searchTerm,
            part: "snippet",
            maxResults: 5,
            key: "AIzaSyCSOC0SOKrihw5-VZXKeT0JFBSm4L9XOTs"
        }});
        console.log(response.data.items);

        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0] 
        });
    }

    render() {
        return (
            <Grid container spacing={10} justify="center">
                <Grid item xs={12}>
                    <Grid container spacing={10}>
                        <Grid item xs={12}>
                            <SearchBar onFormSubmit={this.handleSubmit}/>
                        </Grid>
                        <Grid item xs={8}>
                            <VideoDetail video={this.state.selectedVideo}/>
                        </Grid>
                        <Grid item xs={4}>
                            <VideoList />
                        </Grid>
                    </Grid>

                </Grid>

            </Grid>
        )
    }
}

export default App;