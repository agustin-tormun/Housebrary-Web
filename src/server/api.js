import axios from "axios";

export const FetchBooksAPI = async (bookInfo) => {
    try {
        const response = await axios.get(
            'https://www.googleapis.com/books/v1/volumes', 
            {params: {q: bookInfo}});
        return response.data;
    } catch (error) {
        console.log(error);
        return error;
    }
}