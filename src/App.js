import React from 'react';
import './styles/App.css'
import LoginPage from './component/LoginPage';
import Main from './component/Main';
import { Routes, Route } from 'react-router-dom';




function App2() {

    return (
        <LoginPage />
    )
}

function App() {

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </div>
    );
}

export default App;
