import React, {FC} from 'react'
import styled from "styled-components";
import {NavBar} from './NavBar';
import SvgSelector from "../SvgSelector/SvgSelector";

interface HeaderProps {
};

export const Header: FC<HeaderProps> = () => {
    return <Wrapper>
        <Logo>BitTest</Logo>
        <NavBar/>
        <AdminNav>
            <SvgSelector id={'user'}/>
            <Auth>
                Вы авторизованы
                <Role>Администратор</Role>
            </Auth>
        </AdminNav>
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
  align-items: center;
`
const Logo = styled.p`
  font-size: 22px;
  font-weight: 600;
  line-height: 29px; /* 131.818% */
  color: #FFFFFF;
  border-radius: 17px;
`
const AdminNav = styled.div`
  border: 1px solid #222B44;
  minWidth: 178px;
  padding: 8px 14px;
  display: flex;
  align-items: center;
  border-radius: 6px;
  gap: 12px;
  margin-left: auto;
  cursor: pointer;
`
const Role = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: white;
`
const Auth = styled.p`
  color: #616D8D;
  font-weight: 400;
  line-height: 18px;
  white-space: nowrap;
`
