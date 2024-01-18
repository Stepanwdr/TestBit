import React, {FC, useState} from 'react'
import UserTable from "../components/Table/UsersTable";
import styled from "styled-components";
import {UserSearcher} from "../components/UserSearcher/UserSearcher";
import useDebounce from "../hooks/custom/useDebounce";
import useFetchUsersQuery from "../hooks/queries/useFetchUsersQuery";
import {User} from "../types/user";
import useFetchTransActions from "../hooks/queries/useFetchTransActions";
import {EditUserDrawer} from "../components/EditUserDrawer/EditUserDrawer";


export const Home: FC = () => {
    const [page, setPage] = useState(1)
    const [order, setOrder] = useState<'asc' | 'desc'>('asc')
    const [searchValue, setSearchValue] = useState('')
    const [userToEdit,setUserToEdit]=useState<User | null>(null)
    const debouncedSearch = useDebounce(searchValue, 500);
    const {data, totalPages, isLoading} = useFetchUsersQuery({order, page, searchValue: debouncedSearch})

    const [isOpen,setIsOpen]=useState(false)


    const toggleDrawer = () => {
        setIsOpen(prevState => !prevState)
    }

    const onPageChange = (page: number) => {
        setPage(page)
    }

   const onUserEdit=(user:User)=>{
       setUserToEdit(user)
       setIsOpen(prevState => !prevState)
   }

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
        <UserSearcher onChange={setSearchValue}/>
        <TableContainer>
            <UserTable
                onPageChange={onPageChange}
                data={data}
                page={page}
                totalPages={totalPages}
                isLoading={isLoading}
                order={order}
                setOrder={setOrder}
                onUserEdit={onUserEdit}
            />
           <EditUserDrawer user={userToEdit!} toggleDrawer={toggleDrawer} isOpen={isOpen}/>
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
const TableContainer = styled.div`
  margin: 0 34px;
`
