import React from 'react';
import './App.css';
import Footer from "./Components/Footer/Footer";
import AllComponents from "./Components/AllComponents/AllComponents";

import Contacts from "./Components/Contacts/Contacts";
import About from "./Components/About/About";
import Messager from "./Components/Messager/Messager";
import Wallet from "./Components/Wallet/Wallet";
import Exchange from "./Components/Exchange/Exchange";
import Features from "./Components/Features/Features";
import PrivateRoute from 'react-private-route';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Redirect } from "react-router-dom";
import Login from "./Components/Login/Login";
import Logincontainer from "./Components/Login/Logincontainer";

function App(props) {
    return (
        <div className="App">
<Logincontainer/>

            {/*<Switch>*/}
            {/*    <Route exact path='/' component={AllComponents} />*/}
            {/*    <Route path='/contacts' component={Contacts} />*/}
            {/*    <Route path='/about' component={About} />*/}
            {/*    <Route path='/messager' component={Messager} />*/}
            {/*    <Route path='/wallet' component={Wallet} />*/}
            {/*    <Route path='/exchange' component={Exchange} />*/}
            {/*    <Route path='/features' component={Features} />*/}
            {/*</Switch>*/}






        </div>
    );
}

export default App;
