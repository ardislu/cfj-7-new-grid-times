import React from 'react';
import styled from 'styled-components/macro';
import { QUERIES } from '../../constants';

import {
  MAIN_STORY,
  OPINION_STORIES,
  SECONDARY_STORIES,
} from '../../data';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <StoryWrapper key={story.id}>
              <SecondaryStory {...story} />
            </StoryWrapper>
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <OpinionStoryList>
          {OPINION_STORIES.map((story, index) => (
            <OpinionStoryWrapper key={story.id}>
              <OpinionStory {...story} />
            </OpinionStoryWrapper>
          ))}
        </OpinionStoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    grid-template-areas:
      'main-story main-story main-story secondary-stories'
      'advertisement advertisement advertisement advertisement'
      'opinion-stories opinion-stories opinion-stories opinion-stories';
  }

  @media ${QUERIES.laptopAndUp} {
    background: var(--color-gray-100);
    grid-template-areas:
      'main-story secondary-stories opinion-stories'
      'main-story advertisement advertisement';
    grid-template-columns: 40% 30% 1fr;
  }
`;

const MainStorySection = styled.section`
  height: 100%;
  grid-area: main-story;
  margin-block-end: 57px;

  @media ${QUERIES.tabletAndUp} {
    padding-inline: 16px;
    border-inline-end: 1px solid var(--color-gray-300);
  }
`;

const StoryWrapper = styled.div`
  &:not(:last-of-type) {
    padding-block-end: 16px;
    margin-block-end: 16px;
    border-block-end: 1px solid var(--color-gray-300);
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;

  @media ${QUERIES.tabletAndUp} {
    padding-inline: 16px;
  }

  @media ${QUERIES.laptopAndUp} {
    border-inline-end: 1px solid var(--color-gray-300);
  }
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;
`;

const OpinionStoryList = styled(StoryList)`
  @media ${QUERIES.tabletOnly} {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(153px, 100%), 1fr));
    gap: 32px;
  }
`;

const OpinionStoryWrapper = styled.div`
  &:not(:last-of-type) {
    padding-block-end: 16px;
    margin-block-end: 16px;
    border-block-end: 1px solid var(--color-gray-300);
  }
  
  @media ${QUERIES.tabletOnly} {
    && {
      border-block-end: revert;
    }
  }
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;
  margin-block: 48px;

  @media ${QUERIES.tabletAndUp} {
    margin-block: revert;
  }
  
  @media ${QUERIES.laptopAndUp} {
    padding-inline: 16px;
  }
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;

  @media ${QUERIES.tabletAndUp} {
    margin-block: 48px;
  }

  @media ${QUERIES.laptopAndUp} {
    padding: 16px 16px 0 16px;

    & > * {
        padding-block-start: 16px;
        border-block-start: 1px solid var(--color-gray-300);
    }
  }
`;

export default MainStoryGrid;
