import { useEffect, useState } from "react";

import axios from "axios";

export function useVideoSearch(searchValue:string,limit:number){
   const[isLoading,setIsLoading] = useState(false);
   const [videos,setVideos] = useState([]);
   const [totalResults, setTotalResult] = useState(0);
   const[ hasMore,setHasMore] = useState(false);


    const getVideos = async() => {
       if(!searchValue) return;
       if(videos.length === 0 ) setIsLoading(true);
    try{
        const res = await axios.get(
            'https://youtube.googleapis.com/youtube/v3/search',
            {
              params: {
                part: 'snippet',
                maxResults: limit,
                key: 'AIzaSyAU4n4ivlTIZ6gHIew_uDxAbFjVlzUoD2g',
                q: searchValue,
              },
            }
          );

          setVideos((prevVideos):any => {return [...prevVideos,...res.data.items]});
          setTotalResult(res.data.pageInfo.totalResults);
          setHasMore(res.data.items.length < 50);
          setIsLoading(false);
    }catch(error){
        console.log(`error: ${error}`)
    }
    }

useEffect(()=>{setVideos([])},[searchValue])

    useEffect(() => {
        getVideos()       
        },[searchValue,limit]);

    return {videos,totalResults,hasMore,isLoading}
}