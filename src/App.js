import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

import Loader from './components/Loader/Loader';
import Header from './components/Header/Header';
import VideoList from './components/VideoList/VideoList';

function App() {
  const [videos, setVideos] = useState();
  const [isLoading, setIsLoading] = useState();

  const onSearch = async (searchValue, prevSearchValue, setprevSearchValue) => {
    if (searchValue === prevSearchValue) return;
    setIsLoading(true);
    try {
      const response = await axios.get(
        'https://youtube.googleapis.com/youtube/v3/search',
        {
          params: {
            part: 'snippet',
            maxResults: 5,
            key: 'AIzaSyAU4n4ivlTIZ6gHIew_uDxAbFjVlzUoD2g',
            q: searchValue,
          },
        }
      );
      setIsLoading(false);
      setprevSearchValue(searchValue);
      console.log('response', response);
      setVideos(response.data.items);
    } catch (error) {
      console.log('error');
      setIsLoading(false);
    }
  };

  return (
    <>
      <Header onSearch={onSearch} />
      {isLoading ? <Loader /> : <VideoList items={videos} />}
    </>
  );
}

export default App;
