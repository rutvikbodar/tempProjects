import React from "react";

export default function VideoDetails(props){
    if(props.video){
        const videoUrl = `https://www.youtube.com/embed/${props.video.id.videoId}`;
        return (
            <div>
                <div className="ui embed">
                    <iframe src={videoUrl} frameBorder="0"></iframe>
                </div>
                <div className="ui segment">
                    <h4 className="ui header">
                        {props.video.snippet.title}
                    </h4>
                    <p>
                        {props.video.snippet.description}
                    </p>
                </div>
            </div>
        )
    }
    else return <div></div>
}