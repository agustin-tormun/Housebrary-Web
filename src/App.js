import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddBookPage from "./pages/AddBookPage";

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' exact element={<HomePage />} />
                    <Route path='/add-book' element={<AddBookPage />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;