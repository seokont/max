import React from "react";

import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import rows from "../../Assets/rows.png";

const modalMenu = makeStyles((theme) => ({
    container: {
        width: '100%',
        maxWidth: "90%",
        margin: "0 auto",

        padding: '80px 0 80px 0',

        [theme.breakpoints.between('lg', 'xl')]: {

            height: 'auto',
        },
        [theme.breakpoints.between('md', 'lg')]: {

            height: '100vh',
        },
        [theme.breakpoints.between('sm', 'md')]: {

            height: 'auto',
        },
        [theme.breakpoints.between('xs', 'sm')]: {

            height: 'auto',
        },


    },






}));

const ModalMenu = () => {
    const modalMenuBlock = modalMenu();
    return (
       console.log('dfdfdfd22')




    )
}


export default ModalMenu;

