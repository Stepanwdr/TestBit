import React, {FC} from 'react'
import Drawer from 'react-modern-drawer'
import styled from "styled-components";
import SvgSelector from "../SvgSelector/SvgSelector";
import 'react-modern-drawer/dist/index.css';
import useFetchTransActions from "../../hooks/queries/useFetchTransActions";
import {User} from "../../types/user";
import {TransActionsChart} from "./TransActionsChart";
import { HistoryTable } from './HistoryTable';

interface EditUserDrawerProps {
    user: User
    toggleDrawer: () => void
    isOpen: boolean
};

export const EditUserDrawer: FC<EditUserDrawerProps> = ({user, toggleDrawer, isOpen}) => {
    const {data: transactionsData, isLoading} = useFetchTransActions({userId: user?.id})

    return <Drawer
        size={470}
        open={isOpen}
        onClose={toggleDrawer}
        direction='right'
        style={{background: "#121825", padding: "56px 20px"}}
    >
        <DrawerHeader>
            <Text>{user?.email}</Text>
            <CloseBtn onClick={toggleDrawer}>
                <SvgSelector id={'close'}/>
            </CloseBtn>
        </DrawerHeader>
        <DrawerBody>
            <Text>Использование токенов</Text>
            <TransActionsChart data={transactionsData}/>
            <Email>
                <Chip/>{user?.email}
            </Email>
            <Text>История операций</Text>
            <HistoryTable data={transactionsData}/>
        </DrawerBody>
    </Drawer>;
};

const CloseBtn = styled.button`
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
`
const DrawerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Text = styled.p`
  font-size: 20px;
  line-height: 26px;
  color: white;
`
const DrawerBody = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  margin-top: 20px;
`
const Chip = styled.div`
  width: 12px;
  height: 12px;
  background: #1C64F2;
  border-radius: 2px;
`
const Email = styled.div`
  display: flex;
  color: #616D8D;
  gap: 8px;
  align-items: center;
  text-align: center;
  width: 100%;
  justify-content: center;
  border-bottom: 2px solid #222B44;
  padding-bottom: 20px;

`
