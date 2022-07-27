import NewsCardList from "../NewsCardList/NewsCardList";
import NewsCard from "../NewsCard/NewsCard";

function CardsSection() {
  return (
    <div className="cards-section">
      <h2 className="cards-section__title">Search results</h2>
      <NewsCardList>
        <li className="news-card-list__card">
          <NewsCard
            date="November 4, 2020"
            title="Everyone Needs a Special 'Sit Spot' in Nature"
            description={`Ever since I read Richard Louv's influential book, 'Last Child in the Woods,' the idea of having a special 'sit spot' has stuck with me. This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find...`}
            type="treehugger"
          />
        </li>
        <li className="news-card-list__card">
          <NewsCard
            date="February 19, 2019"
            title="Nature makes you better"
            description={`We all know how good nature can make us feel. We have known it for millennia: the sound of the ocean, the scents of a forest, the way dappled sunlight dances through leaves.`}
            type="national geographic"
          />
        </li>
        <li className="news-card-list__card">
          <NewsCard
            date="October 19, 2020"
            title="Grand Teton Renews Historic Crest Trail"
            description={`“The linking together of the Cascade and Death Canyon trails, at their heads, took place on October 1, 1933, and marked the first step in the realization of a plan whereby the hiker will be...`}
            type="National parks traveler"
          />
        </li>
      </NewsCardList>
      <button className="cards-section__button">Show more</button>
    </div>
  );
}

export default CardsSection;
