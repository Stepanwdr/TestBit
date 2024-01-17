import { useEffect, useState } from "react";
import axios from "axios";
import { User } from "../../types/user";

export const useFetchUsersQuery = () => {
    const [data, setData] = useState<User[]>([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const getUsers = async () => {
            try {
                setIsLoading(true);
                const response = await axios.get<{ data: User[],pages:number }>(`https://test.gefara.xyz/api/v1/user/list?page=${page}`);
                setData(response.data.data);
                setPage(response.data.pages);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching users:", error);
                setError("An error occurred while fetching users.");
                setIsLoading(false);
            }
        };

        getUsers();
    }, [page]);

    return {
        data,
        isLoading,
        error,
        setPage,
        page
    };
};
