import { useState, useRef, useCallback } from 'react';

import Loader from './components/Loader/Loader';
import Header from './components/Header/Header';
import VideoList from './components/VideoList/VideoList';
import SecondHeader from './components/SecondHeader/SecondHeader';
import Context from './context';
import { useVideoSearch } from './customHooks/useVideoSearch';

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [limit, setLimit] = useState(10);

  const { videos, totalResults, hasMore, isLoading } = useVideoSearch(
    searchValue,
    limit
  );

  const observer = useRef<IntersectionObserver | null>(null);
  const lastVideoRef = useCallback(
    (node:HTMLElement | null) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((enteries) => {
        if (enteries[0].isIntersecting && hasMore) {
          setLimit((prevLimit) => prevLimit + 10);
        }
      });

      if (node) observer.current.observe(node);
    },
    [isLoading, hasMore]
  );

  const onSearch = (value:string) => {
    setSearchValue(value);
    setLimit(10);
  };

  return (
    <Context.Provider value={{ videos, totalResults }}>
      <div>
        <Header onSearch={onSearch} />
        {isLoading ? (
          
          <Loader />
        ) : (
          <>
            <SecondHeader />
            <VideoList lastVideoRef={lastVideoRef} />
          </>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
