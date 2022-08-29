import { Dispatch, SetStateAction } from "react";

export interface SearchProps{
    onSearch: (
        searchValue:string,
        prevSearchValue:string,
        setprevSearchValue:Dispatch<SetStateAction<string>>) => void
}

export interface VideoItemProps{
    id:{videoId:string},
    snippet:{
        thumbnails:{
            medium:{
                url:string
            }
        },
        title:string,
        channelTitle:string,
        
    } 
}

export interface VideoListProps{
    items:Array<VideoItemProps>
}

export interface ItemProps{
    item:VideoItemProps
}