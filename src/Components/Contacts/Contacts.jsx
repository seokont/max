import React, {useState} from "react";
import style from "./Contacts.module.css";
import Grid from "@material-ui/core/Grid";
import rowsbottom from "../../Assets/rows.png";

import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import Button from "@material-ui/core/Button";
import Grabherex from "../Grabherex/Grabherex";
import Headerforpages from "../Headerforpages/Headerforpages";
import withStyles from "@material-ui/core/styles/withStyles";
import Footer from "../Footer/Footer";


const CssTextField = withStyles({
    root: {
        '& .MuiInputBase-input': {
            padding: '15px 0',
            color: '#26B590',
        },

        '& .MuiInput-underline': {},
        '& label.Mui-focused': {color: '#26B590'},
        '& .MuiInput-underline:after': {
            borderBottomColor: '#26B590',
            color: '#26B590'
        },
        '& .MuiInput-underline:before': {
            color: '#26B590'


        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'red',
            },
            '&:hover fieldset': {
                borderColor: 'yellow',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'green',
            },
        },
    },
})(TextField);

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

const StylesContacts = makeStyles((theme) => ({
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


const Contacts = () => {

    const contactsB = contactsButton();
    const stylesForContacts = StylesContacts();

    const classes = useStyles();

    const classes2 = useStyles2();

    return (
        <div>
            <Headerforpages/>
            <Grid container
                  xs={12} sm={12} md={12} lg={12} xl={12} className={stylesForContacts.container} direction="column"
                  justify="space-between"
                  alignItems="stretch">

                <Grid item container xs={12} sm={12} md={12} lg={12} xl={12}
                      className={stylesForContacts.container__contacts}>


                    <Grid item>
                        <Grid item className={stylesForContacts.text__h}
                              style={{marginBottom: '50px'}}> Contacts</Grid>
                        <Grid></Grid>
                    </Grid>
                    <Grid item container={true}>
                        <Grid item container={true} direction='column' xs={12} sm={12} md={6} lg={6} xl={6}>

                            <Grid item className={stylesForContacts.supportservice}>Support service</Grid>
                            <Grid item className={stylesForContacts.phone}>+98 775 342-32-23</Grid>
                            <Grid item className={stylesForContacts.mail}>info@payllar.com</Grid>
                            <Grid item></Grid>
                            <Grid item className={stylesForContacts.details} style={{marginTop: '50px'}}>Company
                                details</Grid>
                            <Grid item>
                                <p className={stylesForContacts.p}>13th Baker Ave,</p>
                                <p className={stylesForContacts.p}>Delaware, 19900, USA</p>
                                <p className={stylesForContacts.p}>Swift BIC: YYRUENDJFCMRM</p>
                            </Grid>
                            <Grid item className={stylesForContacts.hours}>Mon - Fri: 9am to 6pm</Grid>

                        </Grid>
                        <Grid item container={true} xs={12} sm={12} md={6} lg={6} xl={6}>
                            <Grid item className={stylesForContacts.phone}> Say Hello</Grid>
                            <Grid item container>
                                <form className={classes.root} noValidate autoComplete="off">
                                    <div>
                                        <CssTextField required id="standard-required" className={classes2.root}
                                                      defaultValue="Your Name"/>
                                    </div>
                                    <div>
                                        <CssTextField required id="standard-required" className={classes2.root}
                                                      defaultValue="E-mail address"/>
                                    </div>
                                    <div>
                                        <CssTextField className={classes2.root}
                                                      id="standard-multiline-flexible"
                                                      label="Message"
                                                      multiline
                                                      rowsMax={4}

                                        />
                                    </div>
                                    <div>
                                        <Button className={contactsB.root} variant="contained"
                                                style={{marginTop: '25px'}}>Send Message</Button>

                                    </div>
                                </form>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grabherex/>
            <Footer/>
        </div>


    )
}


export default Contacts;


