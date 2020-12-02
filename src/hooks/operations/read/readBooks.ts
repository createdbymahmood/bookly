import { useQuery } from "react-query";
import API_URLS from "constants/apiUrls";
import apiService, { ApiServiceError } from "services/api/apiService";
import { Book } from "types/book";

export const readBooks = async () => {
    const { data } = await apiService.get(API_URLS.book);
    return data;
};

export const useBooks = () => {
    return useQuery<Book.Query.Result, ApiServiceError>(
        API_URLS.book,
        readBooks
    );
};
