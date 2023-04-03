import React from 'react'
import styled from 'styled-components'
import Octicon from 'react-octicon'
import Search from './Search';
import "./style.css";
function Header() {
  return (
    <Wrapper>
      <Search />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  color: #ffffff;
  z-index: 32;
  font-size: 14px;
  line-height: 1.5;
  display: flex;
  align-items: center;
`;

export default Header
