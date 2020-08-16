import React, {Fragment, useState} from "react";

import Block1 from "../Block1/Block1";
import Block2 from "../Block2/Block2";
import Block3 from "../Block3/Block3";
import Block4 from "../Block4/Block4";
import Block5 from "../Block5/Block5";
import Block6 from "../Block6/Block6";
import Block7 from "../Block7/Block7";

import Tryitfree from "../Tryitfree/Tryitfree";
import Header from "../Header/Header";

import Footer from "../Footer/Footer";


class AllComponents extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <Header />
                <Block1/>
                <Block2/>
                <Block3/>
                <Block4/>
                <Block5/>
                <Tryitfree/>
                <Block6/>
                <Block7/>
                <Footer/>
            </div>
        )
    }
}


export default AllComponents;


