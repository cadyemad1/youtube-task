import { Dispatch, SetStateAction } from "react";

export interface SearchProps{
    onSearch: (
        searchValue:string,
        prevSearchValue:string,
        setprevSearchValue:Dispatch<SetStateAction<string>>) => void
}

export interface VideoItemProps{
    id:{videoId?:string,kind:string,channelId?:string},
    snippet:{
        thumbnails:{
            medium:{
                url:string
            }
        },
        title:string,
        channelTitle:string,
        description:string
        
    } 
}

export interface VideoListProps{
    items?:Array<VideoItemProps>
}

export interface ItemProps{
    item:VideoItemProps
}

export interface totalResult{
    totalResults:number
}

export interface AppContextProps{
    videos:Array<VideoItemProps> | null,
    totalResults:number | null
}