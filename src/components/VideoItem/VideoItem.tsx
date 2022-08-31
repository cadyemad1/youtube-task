
import './VideoItem.scss';
import {ItemProps} from '../../Types'

const VideoItem = ({item}:ItemProps) =>{
    
    const {snippet:{thumbnails,title,channelTitle,description}} = item;
    return(
    <div className="video-item">
        <div className="thumbnail-container">
            <img className="thumbnail" src={thumbnails.medium.url}/>
        </div>

    
         <div className="video-details">
            <h5 className="title">{title}</h5>
            <p className="title">{channelTitle}</p>
            <p className="description">{description}</p>
        </div>
    </div>
    )

}

export default VideoItem;