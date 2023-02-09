import '../styles/Table.css'
import {useState} from "react";
function Table({data, onDetails}) {
    const [openDetails, setOpenDetails] = useState(false);

    const renderedData = data.map((value) => {
        return <tr key={value.id}>
            <td><img src={value.volumeInfo['imageLinks'] ? value.volumeInfo['imageLinks']['thumbnail'] :
                'https://res.cloudinary.com/ds6bnmwii/image/upload/v1675981272/Housebrary/No-Image-Placeholder_o5czev.svg'}
                     width="60%" /></td>
            <td>{value.volumeInfo['title'] ?? 'NA'}</td>
            <td>{value.volumeInfo['authors'] ? value.volumeInfo['authors'][0] : 'NA'}</td>
            {/*<td><img src="" width="25px" onClick={handleClick}/></td>*/}
        </tr>
    })

    const handleDetails = () => {
        setOpenDetails(true);
        onDetails(openDetails)
    }

    return(
        <table className="table">
            <thead className="tableHead">
            <tr>
                <th>Thumbnail</th>
                <th>Title</th>
                <th>Author</th>
            </tr>
            </thead>
            <tbody onClick={handleDetails}>{renderedData}</tbody>
        </table>
    );
}

export default Table;