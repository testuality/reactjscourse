import React from "react";

import {Paper, Typography} from "@material-ui/core";

class VideoDetail extends React.Component {
    render() {
        if (!this.props.video) return ( <div>Loading...</div>);

        const videoSrc = "https://www.youtube.com/embed/" + this.props.video.id.videoId; 
        const title = this.props.video.snippet.title;
        return (
            <React.Fragment>
                <Paper elevation={6} style={{height: "70%"}}>
                    <iframe frameBorder="0" height="100%" width="100%" title="video player" src={videoSrc}></iframe>
                </Paper>
                <Paper elevation={6} style={{padding: "15px"}}>
                    <Typography variant="subtitle1">{title}</Typography>
                    <Typography variant="subtitle2"></Typography>
                    <Typography></Typography>>
                </Paper>
            </React.Fragment>
        );
    }
}

export default VideoDetail;