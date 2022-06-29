// This is in the Search Results Page for both laptop and mobile windows

// Import InstantSearch Functionality
import { connectHits } from 'react-instantsearch-dom';
import React, { useState, useEffect } from 'react';


import { Hit } from './Hits';
// TODO: Skeleton here
const CustomHits = ({ hits }) => {
  const [hitsLoaded, setHitsLoaded] = useState(false);

  useEffect(() => {
    if (hits.length > 0) {
      setHitsLoaded(true)
    }
  }, [hits]);

  const renderHitsOrSkeleton = (args) => {
    const {hit, i} = args;
    if (hitsLoaded) { 
      return <Hit hit={hit} key={i} /> 
    } else {
      return <div className="" key={i + "loader"} style={{width: "200px", height: "300px", backgroundColor: "red"}}></div>
    }
  }

  

  return (
    <div className="ais-InfiniteHits">
      <ul className="ais-InfiniteHits-list">
        {hits.map((hit, i) => {
          return renderHitsOrSkeleton({hit, i});
        })}
      </ul>
    </div>
  );
};

const CustomHitsComponent = connectHits(CustomHits);

export default CustomHitsComponent;
