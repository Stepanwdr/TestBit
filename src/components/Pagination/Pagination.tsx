import React, {FC} from 'react';
import styled from 'styled-components';
import SvgSelector from "../SvgSelector/SvgSelector";

interface PaginationProps {
    totalPages: number
    currentPage: number
    onPageChange: (page: number) => void
}

const Pagination: FC<PaginationProps> = ({totalPages, currentPage, onPageChange}) => {
    const pagesArray = Array.from({length: totalPages}, (_, index) => index + 1);

    const renderPageButtons = () => {
        const pageButtons = [];

        for (let i = 0; i < pagesArray.length; i++) {
            const page = pagesArray[i];

            if (i === 0 || i === pagesArray.length - 1 || Math.abs(page - currentPage) <= 2) {
                // Показываем первую, последнюю страницу и соседние с текущей +- 2
                pageButtons.push(
                    <PageButton
                        key={page}
                        onClick={() => onPageChange(page)}
                        $active={page === currentPage}
                    >
                        {page}
                    </PageButton>
                );
            } else if (Math.abs(page - currentPage) === 3) {
                pageButtons.push(<Dots key={`dots${i}`}>....</Dots>);
            }
        }

        return pageButtons;
    };

    return (
        <PaginationWrapper>
            <ArrowBtn onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
                <SvgSelector id={'prev'}/>
            </ArrowBtn>

            {renderPageButtons()}

            <ArrowBtn onClick={() => onPageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}>
                <SvgSelector id={'next'}/>
            </ArrowBtn>
        </PaginationWrapper>
    );
};

export default Pagination;

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PageButton = styled.button<{ $active: boolean }>`
  padding: 8px 12px;
  margin: 0 5px;
  background-color: ${({$active}) => ($active ? '#1C64F2' : 'transparent')};
  color: ${({$active}) => ($active ? '#ffffff' : '#ffffff')};
  border-radius: 8px;
  cursor: pointer;
  outline: none;
  border: none;

  &:hover {
    background-color: #007bff;
    color: #ffffff;
  }
`;

const ArrowBtn = styled.button`
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
`
const Dots = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`
