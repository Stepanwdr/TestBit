import React, {FC} from 'react'
import styled from "styled-components";
import SvgSelector from "../SvgSelector/SvgSelector";

interface UserSearchProps {
    onChange: (value: string) => void
};

export const UserSearcher: FC<UserSearchProps> = ({onChange}) => {
    return <InputContainer>
        <SvgSelector id={'search'}/>
        <Input onChange={(ev) => onChange(ev.target.value)} placeholder={'Поиск'}/>
    </InputContainer>;
};

const InputContainer = styled.div`
  display: flex;
  padding: 14px 16px;
  align-items: center;
  gap: var(--mobile-spacer-lvl_1, 10px);
  margin: 0 34px 24px 34px;
  border-radius: var(--const-spacer-lvl_1, 8px);
  border: 1px solid var(--darktheme-Gray-scale-Gray-2, #313E62);
  background: var(--darktheme-Gray-scale-Gray-4, #121825);
`

const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  background-color: transparent;
  color: white;

  &::placeholder {
    color: var(--darktheme-Gray-scale-Gray-1, #616D8D);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
  }
`
