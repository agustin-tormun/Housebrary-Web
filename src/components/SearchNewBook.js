import {useState} from "react";
import '../styles/SearchNewBook.css'

function SearchNewBook({onSearch}) {
    const [bookInfo, setBookInfo] = useState('');

    const handleChange = (event) => {
        setBookInfo(event.target.value);
    }

    const handleSearch = (event) => {
        event.preventDefault();
        onSearch(bookInfo.trim());
        setBookInfo("");
    }

    return(<div>
        <form className="search-book-form">
            <label>Search for a new book</label>
            <input value={bookInfo} onChange={handleChange}/>
            <button className="btn-search" onClick={handleSearch}>
                Find my Book
            </button>
        </form>
    </div>);
}

export default SearchNewBook;