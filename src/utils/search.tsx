import axios from "axios";

export const search = (searchValue:string,limit:number) => {
       return axios.get(
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
}