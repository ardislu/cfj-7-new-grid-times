import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <Wrapper>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <Logo />
      </MainHeader>
      <SubscribeGroup>
        <Button>Subscribe</Button>
        <SubscribeLink href="#">Already a subscriber?</SubscribeLink>
      </SubscribeGroup>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  flex-direction: column;

  @media ${QUERIES.laptopAndUp} {
    max-width: min(100%,calc(1200px + 32px * 2));
    margin-inline: auto;
    flex-direction: row;
    align-items: center;
  }
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.laptopAndUp} {
    background: revert;
    color: revert;

    & ${ActionGroup}:last-of-type {
      display: none;
    }
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;
`;

const SubscribeGroup = styled(ActionGroup)`
  display: none;
  
  @media ${QUERIES.laptopAndUp} {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding-inline-end: 32px;
    align-items: center;
  }
`;

const SubscribeLink = styled.a`
  font-style: italic;
  font-weight: 400;
  text-decoration: underline;
`;

export default Header;
