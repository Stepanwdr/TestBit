import {useEffect, useState} from "react";
import axios from "axios";
import {User} from "../../types/user";

interface useFetchUsersQueryProps {
    order: 'asc' | 'desc'
    page: number
    searchValue: string
}

const useFetchUsersQuery = ({order, page, searchValue}: useFetchUsersQueryProps) => {
    const [data, setData] = useState<User[]>([]);
    const [totalPages, setTotalPages] = useState(page);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const getUsers = async () => {
            try {
                setIsLoading(true);
                const response = await axios.get<{
                    data: User[],
                    pages: number
                }>(`https://test.gefara.xyz/api/v1/user/list?page=${page}&search=${searchValue}&orderBy=tokens%3A${order}`);
                setData(response.data.data);
                setTotalPages(response.data.pages);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching users:", error);
                setError("An error occurred while fetching users.");
                setIsLoading(false);
            }
        };

        getUsers();
    }, [page, order, searchValue]);

    return {
        data,
        isLoading,
        error,
        setTotalPages,
        totalPages
    };
};
export default useFetchUsersQuery;
