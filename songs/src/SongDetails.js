import React from "react";
import {connect } from 'react-redux';

function SongDetails(props){

    console.log("from song details");
    console.log(props.selectedSong);
    return <div>
                {(props.selectedSong)?<ul>
                    <li>{props.selectedSong.title}</li>
                    <li>{props.selectedSong.duration}</li>
                </ul>:<></>}
            </div>
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(SongDetails);