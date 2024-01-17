import React, {FC, ReactNode} from 'react'
import {Header} from "./Header";
import styled from "styled-components";

interface LayoutProps {
    children: ReactNode
};

export const Layout: FC<LayoutProps> = ({children}) => {
    return <Container>
        <Header/>
        {children}
    </Container>;
};
const Container = styled.div`
  padding: 34px 25px;
  background-color: #0E0C15;
  height: 100vh;
`
