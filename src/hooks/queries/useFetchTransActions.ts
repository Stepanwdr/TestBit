import {useEffect, useState} from "react";
import {TransActions} from "../../types/user";
import axios from "axios";

const useFetchTransActions = ({userId}: { userId: string }) => {
    const [data, setData] = useState<TransActions[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {

        const getTransActions = async () => {
            try {
                setIsLoading(true);
                const response = await axios.get(`https://test.gefara.xyz/api/v1/user/${userId}/transactions`);
                setData(response.data);
                setIsLoading(false);
                console.log(response.data,"sdsd")
            } catch (error) {
                console.error("Error fetching users:", error);
                setError("An error occurred while fetching users.");
                setIsLoading(false);
            }
        };
        if (userId){
            getTransActions();
        }


    }, [userId]);

    console.log(data)

    return {
        data,
        isLoading,
        error,
    };
};
export default useFetchTransActions
