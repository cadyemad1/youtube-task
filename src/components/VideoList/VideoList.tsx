import React from "react";

import VideoItem from '../VideoItem/VideoItem';
import './VideoList.scss';

const VideoList = ({items}:any) =>{
    return(
        <div className="videos-container">
            {items?.map((item:any)=><VideoItem item={item} key={item.id.videoId}/>)} 
       </div>
    ) 
}

export default VideoList;