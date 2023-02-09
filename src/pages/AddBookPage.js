import React, {useState} from "react";
import SearchNewBook from "../components/SearchNewBook";
import {FetchBooksAPI} from "../server/api";
import {parseStringForParam} from "../utils/utils";
import Table from "../components/Table";

function AddBookPage() {
    const [searchResult, setSearchResult] = useState([]);


    const searchBook = async (bookInfo) => {
        const result = await FetchBooksAPI(parseStringForParam(bookInfo));
        setSearchResult(result.items);
    }

    const launchDetails = (detailsClicked) => {
        console.log(detailsClicked);
    }


    return(<div>
        <SearchNewBook onSearch={searchBook}/>
        {searchResult.length !== 0 && <Table data={searchResult} onDetails={launchDetails}/>}

    </div>);
}

export default AddBookPage;