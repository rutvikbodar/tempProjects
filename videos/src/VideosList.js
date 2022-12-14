import React from "react";
import VideoItem from "./VideoItem";

export default function VideosList(props){
    const ModifiedVideos = props.videos.map(
        vid => <VideoItem onVideoSelect={props.onVideoSelect} video={vid}/>
    )
    return (
        <div className="ui relaxed devided list">
            {ModifiedVideos}
        </div>
    );
}