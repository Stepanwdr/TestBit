import React, {FC} from 'react'
import UserTable from "../components/Table/UsersTable";
import styled from "styled-components";
import {UserSearcher} from "../components/UserSearcher/UserSearcher";


export const Home: FC = () => {
    return <Container>
        <PageTitle>
            <Title>
                Моя организация
            </Title>
        </PageTitle>
        <TableTitle>
            <Title>
                Пользователи
            </Title>
        </TableTitle>
        <UserSearcher/>
         <TableContainer>
             <UserTable/>
         </TableContainer>
    </Container>;
};
const Container = styled.div`
  background-color: #121825;
  border-radius: var(--tablet-spacer-lvl_2, 18px);
`
const Title = styled.h1`
  color: var(--darktheme-base-white, #FFF);
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: 29px;
`
const Row = styled.div`
  height: 77px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #222B44;
  padding: 24px 34px;
`
const PageTitle = styled(Row)``

const TableTitle = styled(Row)`
  border-bottom: none;
`
const TableContainer=styled.div`
margin:  0 34px;
`
