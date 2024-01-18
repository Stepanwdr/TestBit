import React, {FC} from 'react'
import {
    BodyWrapper, NotData,
    TableBody, TableCell,
    TableHeader,
    TableHeaderRow,
    TableRow,
    TableRowHead,
    TableWrapper
} from "../Table/TableElements";
import {TransActions} from "../../types/user";
import {NormalDate} from "../../utils/formatDate";

interface HistoryTableProps {
    data: TransActions[]
};

export const HistoryTable: FC<HistoryTableProps> = ({data}) => {
    return <TableWrapper>
        <TableRowHead>
            <TableHeaderRow>
                <TableHeader>Тип</TableHeader>
                <TableHeader>Сумма</TableHeader>
                <TableHeader>Дата</TableHeader>
            </TableHeaderRow>
        </TableRowHead>
        <TableBody>
            <BodyWrapper $height={'600px'}>
                {data && data.length > 0 ? data.map((trans: TransActions) => (
                    <TableRow key={trans.id}>
                        <TableCell>{trans.type === 'REPLENISH' ? "Пополнение" : "Списание"}</TableCell>
                        <TableCell
                            style={{color: trans.type === 'REPLENISH' ? "#1ABB34" : "#FE4242"}}>{trans.type === 'REPLENISH' ? "+" : "-"}{trans.amount} BTKN</TableCell>
                        <TableCell
                            className={'date'}><p>{NormalDate(trans.created_at).date},</p> <p>{NormalDate(trans.created_at).time}</p></TableCell>
                    </TableRow>
                )) : <NotData>Данные не найдены </NotData>}
            </BodyWrapper>
        </TableBody>
    </TableWrapper>;
};
