import React from 'react';
import styled from 'styled-components'

const border = 'border: 2px dashed #1890ff'

const Wrapper = styled.div`
  max-width: 820px;
  margin: 32px auto;
  padding: 16px;
  background-color: #fff;
`;

const Header = styled.header`
  line-height: 2em;
  font-size: 2em;
  text-align: center;
  margin-bottom: 16px;
  ${border}
`;

const Main = styled.main`
  min-height: 320px;
  padding: 16px;
  text-align: center;
  ${border}
`;


export const Layout = ({ children }) => (
  <Wrapper>
    <Header>Crew applications app</Header>
    <Main>{children}</Main>
  </Wrapper>
);