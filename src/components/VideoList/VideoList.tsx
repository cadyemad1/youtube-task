import React from "react";

import VideoItem from '../VideoItem/VideoItem';
import {VideoItemProps,VideoListProps} from '../../Types'

import './VideoList.scss';

const VideoList = ({items}:VideoListProps) =>{
    return(
        <div className="videos-container">
            {items?.map((item:VideoItemProps)=><VideoItem item={item} key={item.id.videoId}/>)} 
       </div>
    ) 
}

export default VideoList;