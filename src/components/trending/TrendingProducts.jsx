// import algolia recommend
import { TrendingItems } from '@algolia/recommend-react';
import { HorizontalSlider } from '@algolia/ui-components-horizontal-slider-react';
import { useRecoilValue } from 'recoil';

// styles for Recommend HorizontalSlider
import '@algolia/ui-components-horizontal-slider-theme';

import RelatedItem from '@/components/recommend/RelatedProducts';
import { recommendClient, mainIndex } from '@/config/algoliaEnvConfig';
import { trendingConfig } from '@/config/trendingConfig';

// Trending provides a carousel of trending products, filtered if needed by any facet
const TrendingProducts = ({ facetName, facetValue }) => {
  // define the client for using Recommend

  const index = useRecoilValue(mainIndex);

  return (
    <div>
      <TrendingItems
        recommendClient={recommendClient}
        indexName={index}
        itemComponent={RelatedItem}
        maxRecommendations={trendingConfig.maxRecommendations}
        view={HorizontalSlider}
        headerComponent={() => <h3>{trendingConfig.productsTitle}</h3>}
        threshold={trendingConfig.threshold}
        facetName={facetName}
        facetValue={facetValue}
      />
    </div>
  );
};

export default TrendingProducts;
