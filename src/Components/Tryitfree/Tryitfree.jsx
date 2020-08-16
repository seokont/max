import React from "react";
import style from "./Tryitfree.module.css";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import rows from "../../Assets/rows.png";
import rowsgreen from "../../Assets/rows-green.png";

const tryitfree = makeStyles((theme) => ({
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

    tryitfree: {
        backgroundColor: '#30bb97',
        width: '100%',
        height: 'auto',
        display: 'grid'
    },
    tryitfree__button: {
        textDecoration: 'none',
        textAlign: 'center',
        padding: '21px 0',
        border: 'none',
        fontFamily: 'Century Gothic',
        fontSize: '45px',
        fontWeight: 'bold',
        color: '#fff',
        backgroundImage: `url(${rows})`,
        backgroundRepeat: 'no-repeat',

        backgroundSize: '20px auto, 100%',
        cursor: 'pointer',
        [theme.breakpoints.between('lg', 'xl')]: {
            backgroundPosition: 'right 10% top 55%, 0 0',
        },
        [theme.breakpoints.between('md', 'lg')]: {
            backgroundPosition: 'right 40% top 55%, 0 0',
        },
        [theme.breakpoints.between('sm', 'md')]: {
            backgroundPosition: 'right 20% top 55%, 0 0',
        },
        [theme.breakpoints.between('xs', 'sm')]: {
            backgroundPosition: 'right 20% top 55%, 0 0',
        },
        '&:hover': {
            color: ' #26B590',
            backgroundColor: '#D5D5D5',
            backgroundImage: `url(${rowsgreen})`,
            transition: '1.5s linear '
        },


    },




}));

const Tryitfree = () => {
    const tryitfreeBlock = tryitfree();
    return (<Grid container={true} className={tryitfreeBlock.tryitfree}>
            <Grid item className={tryitfreeBlock.tryitfree__button}>Try it free</Grid>
        </Grid>
    )
}


export default Tryitfree;

