import React from "react";

import './VideoItem.scss';
import {ItemProps} from '../../Types'

const VideoItem = ({item}:ItemProps) =>{
    
    const {snippet:{thumbnails,title,channelTitle}} = item;
    return(
        <div className="video-item">
 
     <img className="thumbnail" src={thumbnails.medium.url}/>
    
    <div>
        <h5 className="title">{title}</h5>
        <p className="title">{channelTitle}</p>
    </div>
    </div>
    )

}

export default VideoItem;