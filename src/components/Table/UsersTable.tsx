import React, {Dispatch, FC, useState} from 'react';
import styled from 'styled-components';
import {User} from "../../types/user";
import Pagination from "../Pagination/Pagination";

import {
    BodyWrapper,
    NotData,
    TableBody,
    TableCell,
    TableHeader,
    TableHeaderRow,
    TableRow,
    TableRowHead,
    TableWrapper
} from './TableElements';
import SvgSelector from '../SvgSelector/SvgSelector';

interface UserTableProps {
    order: 'asc' | 'desc'
    isLoading: boolean
    totalPages: number
    data: User[]
    page: number
    onPageChange: (page: number) => void
    setOrder:Dispatch<'asc' | 'desc'>
    onUserEdit:(user:User)=>void
}

const UserTable: FC<UserTableProps> = ({
                                           order,
                                           setOrder,
                                           isLoading,
                                           totalPages,
                                           data, page, onPageChange,onUserEdit
                                       }) => {

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
                    {data && data.length > 0 ? data.slice(0, 6).map((user: User) => (
                        <TableRow key={user.id}>
                            <TableCell>
                                <Email>
                                    {user.email}
                                </Email>
                            </TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.role === 'USER' ? 'Пользователь' : 'Администратор'}</TableCell>
                            <TableCell>{user.subscription.plan.type}</TableCell>
                            <TableCell>{user.subscription.tokens} TKN</TableCell>
                            <TableCell>
                                <ActionButtons>
                                    <ActionButton onClick={()=>onUserEdit(user)}>
                                        <SvgSelector id={'edit'}/>
                                    </ActionButton>
                                    <ActionButton>
                                        <SvgSelector id={'delete'}/>
                                    </ActionButton>
                                </ActionButtons>

                            </TableCell>
                        </TableRow>
                    )) : <NotData>Данные не найдены </NotData>}
                </BodyWrapper>
            </TableBody>
            <TableFooter>
                {totalPages > 1 ?
                    <Pagination totalPages={totalPages} onPageChange={onPageChange} currentPage={page}/> : ""}
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
