import React from "react";
import style from "./Messager.module.css";
import Grid from "@material-ui/core/Grid";
import rowsbottom from "../../Assets/rows.png";

import {makeStyles} from '@material-ui/core/styles';




import {connect} from "react-redux";

import {actionAboutSlider, actionAboutSliderPrev} from "../../Redux/about-reducer";
import Grabherex from "../Grabherex/Grabherex";
import Headerforpages from "../Headerforpages/Headerforpages";
import Footer from "../Footer/Footer";

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

const useStyles2 = makeStyles((theme) => ({
    root: {
        '& > *': {
            borderBottom: "2px solid #fff",

            color: '#1c2631',
            [theme.breakpoints.between('lg', 'xl')]: {
                width: '400px',
            },
            [theme.breakpoints.between('md', 'lg')]: {
                width: '400px',
            },
            [theme.breakpoints.between('sm', 'md')]: {
                width: '400px',
            },
            [theme.breakpoints.between('xs', 'sm')]: {
                width: '300px',
            },

        },
    },
}));


const StylesAbout = makeStyles((theme) => ({
    container: {
        width: '100%',

        backgroundColor: '#fff',

        padding: '50px 0',
        [theme.breakpoints.between('lg', 'xl')]: {

            height: '100%',
            margin: "0 auto",
        },
        [theme.breakpoints.between('md', 'lg')]: {
            margin: "0 auto",
            height: '100%',
        },
        [theme.breakpoints.between('sm', 'md')]: {
            margin: "0 auto",
            height: '100%',
        },
        [theme.breakpoints.between('xs', 'sm')]: {
            margin: "0 auto",
            height: '100%',
        },


    },
    container__contacts: {
        width: '90%',
        margin: "0 auto",

    },

    text__h: {
        [theme.breakpoints.between('lg', 'xl')]: {
            fontFamily: 'Century Gothic',
            fontSize: '50px',
            color: '#1c2631',
            fontWeight: 'bold'
        },
        [theme.breakpoints.between('md', 'lg')]: {
            fontFamily: 'Century Gothic',
            fontSize: '50px',
            color: '#1c2631',
            fontWeight: 'bold'
        },
        [theme.breakpoints.between('sm', 'md')]: {
            fontFamily: 'Century Gothic',
            fontSize: '30px',
            color: '#1c2631',
            fontWeight: 'bold'
        },
        [theme.breakpoints.between('xs', 'sm')]: {
            fontFamily: 'Century Gothic',
            fontSize: '30px',
            color: '#1c2631',
            fontWeight: 'bold'
        },

    },
    supportservice: {
        color: '#8b9aa6',
        fontSize: '16px'
    },

    phone: {
        fontFamily: 'Century Gothic',
        fontSize: '30px',
        color: '#1c2631',
        fontWeight: 'bold'

    },

    mail: {
        fontFamily: 'Century Gothic',
        fontSize: '20px',
        color: '#3dc6af',
        fontWeight: 'bold'

    },
    readmore: {
        fontFamily: 'Century Gothic',
        fontSize: '18px',
        color: '#3dc6af',
        fontWeight: 'bold'

    },
    details: {
        color: '#8b9aa6',
        fontSize: '16px'
    },
    p: {
        fontFamily: 'Century Gothic',
        fontSize: '20px',
        color: '#1c2631',
        fontWeight: 'bold'
    },
    hours: {
        color: '#1c2631',
        fontSize: '16px'

    },
    gerl: {
        width: '100%',
        height: 'auto'
    },

}));

const contactsButton = makeStyles((theme) => ({
    root: {
        borderRadius: "50px",
        backgroundColor: '#26B590',
        color: '#fff',
        backgroundSize: '5% 30%',
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right 1.5em top 50%, 0 0",
        fontFamily: 'Century Gothic',
        fontVariant: 'normal',
        textTransform: 'none',

        [theme.breakpoints.between('lg', 'xl')]: {
            height: 50,
            width: 180,
            backgroundImage: `url(${rowsbottom})`,
        },
        [theme.breakpoints.between('md', 'lg')]: {
            height: 50,
            width: 180,
            backgroundImage: `url(${rowsbottom})`,
        },
        [theme.breakpoints.between('sm', 'md')]: {
            height: 50,
            width: 180,
            backgroundImage: `url(${rowsbottom})`,
        },
        [theme.breakpoints.between('xs', 'sm')]: {
            height: 50,
            width: 180,
            backgroundImage: `url(${rowsbottom})`,
        },


    },
}));


const Messager = (props) => {
    const contactsB = contactsButton();
    const stylesForAbout = StylesAbout();
    const classes = useStyles();
    const classes2 = useStyles2();
    let aboutPersona = props.aboutstate.map((ab) => {
            return (
                <Grid item container direction='column' spacing={3} xs={12} sm={12} md={4} lg={4} xl={4}>
                    <Grid item>
                        <img src={require(`./../../Assets/${ab.avatar}.png`)}/>
                    </Grid>
                    <Grid item className={stylesForAbout.phone}>{ab.name}</Grid>
                    <Grid item>{ab.description}</Grid>
                    <Grid item className={stylesForAbout.readmore}>{ab.link}</Grid>
                </Grid>)
        }
    );


    return (<div>
            <Headerforpages/>
            <Grid container
                  xs={12} sm={12} md={12} lg={12} xl={12} className={stylesForAbout.container} direction="column"
                  justify="space-between"
                  alignItems="stretch">
                <Grid item container xs={12} sm={12} md={12} lg={12} xl={12}
                      className={stylesForAbout.container__contacts}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </Grid>
            </Grid>
            <Grabherex/>
            <Footer/>
        </div>

    )
}


let mapStateToProps = (store) => ({
    aboutstate: store.AboutState.persona,
})

export default connect(mapStateToProps, {actionAboutSlider, actionAboutSliderPrev})(Messager);

