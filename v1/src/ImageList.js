import React from "react";
import './ImageList.css';
import ImageCard from './ImageCard';

export default function ImageList(props){
    const images = props.images.map(image => <ImageCard image={image} key={image.urls.regular} ></ImageCard>)
    return (
        <div className="image-list">
            {images}
        </div>
    )
}