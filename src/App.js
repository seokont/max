import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header/Header";
import Content from "./Components/Content/Content";
import Footer from "./Components/Footer/Footer";


function App() {
    return (

        <div className="App">
            <div className="content">

                <Header/>
                <Content/>
            </div>

            <Footer/>
        </div>

    );
}

export default App;
