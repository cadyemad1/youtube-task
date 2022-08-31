import {useContext} from "react";

import VideoItem from '../VideoItem/VideoItem';
import {VideoItemProps,AppContextProps,VideoRef} from '../../Types'
import Context from '../../context';

import './VideoList.scss';


const VideoList = ({lastVideoRef}:VideoRef) =>{
    const {videos}:AppContextProps = useContext(Context);

    const channelList = videos?.filter((item :VideoItemProps)=> item.id.kind === 'youtube#channel')
    const videosList = videos?.filter((item :VideoItemProps)=> item.id.kind === 'youtube#video')
    

    return(
        <div className="videos-container">
            <div className="videos">
            {channelList?.map((item:VideoItemProps)=><VideoItem item={item} key={item.id.channelId}/>)} 
            {videosList?.map((item:VideoItemProps,index)=>(
            index === videosList.length - 1 ?
             <div ref={lastVideoRef} key={item.id.videoId}><VideoItem item={item} /></div>
             :<VideoItem item={item} key={item.id.videoId}/>))} 

            </div>
       </div>
    ) 
}

export default VideoList;