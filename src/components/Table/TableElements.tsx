import styled from 'styled-components';

export const TableWrapper = styled.div<{ $tableHeight?: string }>`
  height: ${({$tableHeight}) => `calc(100vh - ${$tableHeight})`};
  width: 100%;
  border-radius: 15px;
  background: #121825;
`;

export const TableBody = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const TableRowHead = styled.div`
  background-color: transparent;
  width: 100%;
  display: flex;
`;

export const TableRow = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--darktheme-Gray-scale-Gray-3, #222B44);

  .date {
    display: flex;
    flex-direction: column;
    line-height: 18px;
  }
`;

export const TableHeader = styled.div`
  background-color: #0E0C15;
  color: #9CA3AF;
  text-align: center;
  width: 100%;
  min-height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:first-child {
    border-bottom-left-radius: 8px;
    border-top-left-radius: 8px;
  }

  &:last-child {
    border-bottom-right-radius: 8px;
    border-top-right-radius: 8px;
  }
`;

export const TableCell = styled.div`
  font-size: 14px;
  line-height: normal;
  display: flex;
  color: white;
  text-align: center;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 60px;
`;

export const TableHeaderRow = styled(TableRow)`
  border-bottom: none;
`

export const BodyWrapper = styled.div<{ $height?: string }>`
  overflow-y: auto;
  height: ${({$height}) => `calc(100vh - ${$height})`};
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const NotData = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`
