import React, {FC, useState} from 'react';
import styled from 'styled-components';
import {User} from "../../types/user";
import Pagination from "../Pagination/Pagination";

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
import useFetchUsersQuery from '../../hooks/queries/useFetchUsersQuery';


const UserTable: FC = () => {
    const [page, setPage] = useState(1)
    const [order, setOrder] = useState<'asc' | 'desc'>('asc')
    const {data, totalPages, isLoading} = useFetchUsersQuery({order, page})
    const onPageChange = (page: number) => {
        setPage(page)
    }
    return (
        <TableWrapper>
            <TableRowHead>
                <TableHeaderRow>
                    <TableHeader>Email</TableHeader>
                    <TableHeader>Имя</TableHeader>
                    <TableHeader>Роль</TableHeader>
                    <TableHeader>Подписка</TableHeader>
                    <TableHeader>
                        Токены
                        <OrderBtn onClick={() => setOrder(order === 'asc' ? 'desc' : 'asc')}>
                            <SvgSelector id={order === 'asc' ? 'arrowTop' : 'arrowDown'}/>
                        </OrderBtn>
                    </TableHeader>
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
                <Pagination totalPages={totalPages} onPageChange={onPageChange} currentPage={page}/>
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
const OrderBtn = styled.button`
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
`
