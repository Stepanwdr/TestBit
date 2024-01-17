import React, {FC, useState} from 'react';
import styled from 'styled-components';
import {User} from "../../types/user";
import Pagination from "../Pagination/Pagination";
import {useFetchUsersQuery} from '../../hooks/queries/useFetchUsersQuery';
import {
    BodyWrapper,
    TableBody,
    TableCell,
    TableHeader,
    TableHeaderRow,
    TableRow,
    TableRowHead,
    TableWrapper
} from './TableElements';
import SvgSelector from '../SvgSelector/SvgSelector';


const UserTable: FC = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const {data, page, isLoading} = useFetchUsersQuery()
    const onPageChange = (page: number) => {
        setCurrentPage(page)
    }
    return (
        <TableWrapper>
            <TableRowHead>
                <TableHeaderRow>
                    <TableHeader>Email</TableHeader>
                    <TableHeader>Имя</TableHeader>
                    <TableHeader>Роль</TableHeader>
                    <TableHeader>Подписка</TableHeader>
                    <TableHeader>Токены</TableHeader>
                    <TableHeader>Действия</TableHeader>
                </TableHeaderRow>
            </TableRowHead>
            <TableBody>
                <BodyWrapper $height={'548px'}>
                    {data && data.length > 0 && data.slice(14).map((user: User) => (
                        <TableRow key={user.id}>
                            <TableCell>
                                <Email>
                                    {user.email}
                                </Email>
                            </TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.role === 'USER' ? 'Пользователь' : 'Администратор'}</TableCell>
                            <TableCell>{user.subscription.plan.type}</TableCell>
                            <TableCell>{user.subscription.tokens}</TableCell>
                            <TableCell>
                                <ActionButtons>
                                    <ActionButton>
                                        <SvgSelector id={'edit'}/>
                                    </ActionButton>
                                    <ActionButton>
                                        <SvgSelector id={'delete'}/>
                                    </ActionButton>
                                </ActionButtons>

                            </TableCell>
                        </TableRow>
                    ))}
                </BodyWrapper>
            </TableBody>
            <TableFooter>
                <Pagination totalPages={data.length} onPageChange={onPageChange} currentPage={currentPage}/>
            </TableFooter>
        </TableWrapper>
    );
};

export default UserTable;


const ActionButton = styled.button`
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  background-color: transparent;
`;
const TableFooter = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding-bottom: 45px;
`
const ActionButtons = styled.div`
  display: flex;
`
const Email = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  width: 170px;
  min-width: 170px;
  min-height: 22px;
  white-space: nowrap;
`
