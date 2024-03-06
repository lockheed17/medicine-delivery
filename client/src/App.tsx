import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import DrugStorePage from "./scenes/DrugStorePage.tsx";
import ShoppingCartPage from "./scenes/ShoppingCartPage.tsx";
import Nav from "./components/UI/Nav.tsx";


function App() {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/" element={<Navigate to="/shop"/>}/>
                <Route path="/shop" element={<DrugStorePage/>}/>
                <Route path="/cart" element={<ShoppingCartPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
