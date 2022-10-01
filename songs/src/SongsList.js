import { connect } from "react-redux";
import React from "react";
import {selectSong} from './actions/index';

class SongsList extends React.Component{
    list = this.props.songs.map(song => 
        <div className="item">
            <div className="right floated content">
                <div className="ui button primary" onClick={()=>this.props.selectSong(song)}>
                    Select
                </div>
            </div>
            <div className="content">
                {song.title}
            </div>
        </div>
        );

    render(){
        console.log(this.props)
        return (
            <div className="ui devided list">{this.list}</div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps,{ selectSong })(SongsList);