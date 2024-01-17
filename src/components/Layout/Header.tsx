import React, {FC} from 'react'
import styled from "styled-components";
import {NavBar} from './NavBar';

interface HeaderProps {
};

export const Header: FC<HeaderProps> = () => {
    return <Wrapper>
        <Logo>BitTest</Logo>
        <NavBar/>
    </Wrapper>;
};
const Wrapper = styled.div`
  display: flex;
  gap: 70px;
  margin-bottom: 34px;
  width: 100%;
  background: var(--darktheme-Gray-scale-Gray-4, #121825);
  border-radius: 17px;
  padding: 26.5px 24px;
`
const Logo = styled.p`
  font-size: 22px;
  font-weight: 600;
  line-height: 29px; /* 131.818% */
  color: #FFFFFF;
  border-radius: 17px;
`
