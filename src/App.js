import React, { useState, useRef, useEffect } from 'react';
import './App.css';

import Loader from './components/Loader/Loader';
import Header from './components/Header/Header';
import VideoList from './components/VideoList/VideoList';
import { search } from './utils/search';

function App() {
  const [videos, setVideos] = useState();
  const [isLoading, setIsLoading] = useState();
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [limit]);

  const handleScroll = async () => {
    let userScrollHeight = window.innerHeight + window.scrollY;
    let windowBottomHeight = document.documentElement.offsetHeight;
    if (userScrollHeight >= windowBottomHeight) {
      try {
        const response = await search('spongebob', limit);
        setVideos(response.data.items);
        setLimit((limit) => limit + 10);
      } catch (error) {
        console.log('error', error.message);
      }
    }
  };

  const onSearch = async (searchValue, prevSearchValue, setprevSearchValue) => {
    if (searchValue === prevSearchValue) return;
    setIsLoading(true);
    try {
      const response = await search(searchValue, limit);
      setIsLoading(false);
      setprevSearchValue(searchValue);
      setVideos(response.data.items);
      setLimit((limit) => limit + 10);
    } catch (error) {
      console.log('error', error.message);
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
