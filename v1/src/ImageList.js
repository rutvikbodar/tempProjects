import React from "react";
import './ImageList.css';

export default function ImageList(props){
    const images = props.images.map(image => <img src={image.urls.regular} alt="Loading...." key={image.urls.regular}></img>)
    return (
        <div className="image-list">
            {images}
        </div>
    )
}