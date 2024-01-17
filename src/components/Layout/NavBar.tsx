import React, {FC} from 'react'
import styled from "styled-components";
import SvgSelector from "../SvgSelector/SvgSelector";

interface NavBarProps {
};

export const NavBar: FC<NavBarProps> = () => {
    return <Menu>
        <MenuItem>
            <IconButton><SvgSelector id={'organization'}/></IconButton>
            Моя организация
        </MenuItem>
    </Menu>;
};

const Menu = styled.ul`
  display: flex;
  align-items: center;
`

const MenuItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
  gap: 10px;
  cursor: pointer;
`
const IconButton=styled.button`
  border-radius: 4px;
  min-width: 24px;
  min-height: 24px;
  background-color: #222B44;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
`
