import React from "react";
import style from "./Footer.module.css";
import Grid from "@material-ui/core/Grid";
import rowsbottom from "../../Assets/rows.png";
import faceb from "../../Assets/faceb.png";
import tele from "../../Assets/tele.png";
import me from "../../Assets/me.png";
import inr from "../../Assets/inr.png";
import tw from "../../Assets/tw.png";
import you from "../../Assets/you.png";
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import rows from "../../Assets/rows.png";
import logo from "../../Assets/logo.png";

import rowsgreen from "../../Assets/rows-green.png";
import Divider from "@material-ui/core/Divider"
import {createMuiTheme} from '@material-ui/core/styles';
import withStyles from "@material-ui/core/styles/withStyles";


const CssTextField = withStyles({
    root: {
        '& .MuiInputBase-input': {
            padding: '15px 0',
            color: '#fff',
        },

        '& .MuiInput-underline': {
            borderBottomColor: '#26B590',
        },
        '& label.Mui-focused': {
            color: '#26B590',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#26B590',
        },
        '& .MuiInput-underline:before': {

            borderBottomColor: '#fff',

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
        '& > *': {


            color: '#fff',
            [theme.breakpoints.between('lg', 'xl')]: {
                width: '100%',
            },
            [theme.breakpoints.between('md', 'lg')]: {
                width: '100%',
            },
            [theme.breakpoints.between('sm', 'md')]: {
                width: '100%',
            },
            [theme.breakpoints.between('xs', 'sm')]: {
                width: '100%',
            },

        },
    },
}));

const useStylesButton = makeStyles((theme) => ({
    root: {
        borderRadius: "50px",
        backgroundColor: '#26B590',
        color: '#fff',
        backgroundSize: '5% 30%',
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right 2.5em top 50%, 0 0",
        fontFamily: 'Century Gothic',
        fontVariant: 'normal',
        marginLeft: 25,
        textTransform: 'none',
        height: 50,
        width: 180,
        backgroundImage: `url(${rowsbottom})`,


    },
}));


const StylesFooter = makeStyles((theme) => ({
    container: {
        width: '100%',
        maxWidth: "90%",


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
    logo: {
        width: '100%',
        height: 'auto',
        maxWidth: '100px'
    },
    nav__link: {
        textDecoration: 'none',
        color: '#fff',
        padding: '0 5px',
        fontSize: '14px',
        fontWeight: 'bold',
        fontFamily: 'Century Gothic'
    },
    copyr: {

        color: '#727d8b',
        fontSize: '12px'
    },
    divider: {
        height: '1px',
        backgroundColor: '#727d8b',
        width: '100%',
        margin: '15px 0'
    },

    text__header__footer: {
        fontFamily: 'Century Gothic',

        color: 'white',
        [theme.breakpoints.between('lg', 'xl')]: {
            fontSize: '55px',
        },
        [theme.breakpoints.between('md', 'lg')]: {
            fontSize: '55px',
        },
        [theme.breakpoints.between('sm', 'md')]: {
            fontSize: '40px',
        },
        [theme.breakpoints.between('xs', 'sm')]: {
            fontSize: '40px',
        },


    }


}));


const Footer = () => {

    const stylesForFooter = StylesFooter();
    const classes = useStyles();
    const stylesButton = useStylesButton();

    return (
        <Grid container
              item xs={12} sm={12} md={12} lg={12} xl={12} className={stylesForFooter.container} direction="column"
              justify="space-between"
              alignItems="stretch">
            <Grid item container className={style.footer} direction="row" xs={12} sm={12} md={12} lg={12} xl={12}
                  justify="flex-start"
                  alignItems="center">
                <Grid item container item xs={12} sm={12} md={6} lg={6} xl={6} direction="row"
                      justify="flex-start"
                      alignItems="center">
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={stylesForFooter.text__header__footer}>Begin
                        enjoy grapherex on today</Grid>


                    <Grid item container xs={12} sm={12} md={12} lg={12} xl={12}
                          style={{marginTop: '30px', height: 'auto'}} direction="row"
                          justify="flex-start"
                          alignItems="center">
                        <Grid item container={true} xs={12} sm={12} md={12} lg={12} xl={12}
                              style={{marginBottom: '30px', height: 'auto'}} direction="row"
                              justify="flex-start"
                              alignItems="center">
                            <Grid item className={style.follow}>Follow us</Grid>
                            <Grid item className={style.follow}><a href='#'><img src={faceb}/></a></Grid>
                            <Grid item className={style.follow}><a href='#'><img src={tele}/></a></Grid>
                            <Grid item className={style.follow}><a href='#'><img src={me}/></a></Grid>
                            <Grid item className={style.follow}><a href='#'><img src={tw}/></a></Grid>
                            <Grid item className={style.follow}><a href='#'><img src={you}/></a></Grid>
                            <Grid item className={style.follow}><a href='#'><img src={inr}/></a></Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item container direction="row"
                      justify="flex-end"
                      alignItems="flex-end" item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <form noValidate autoComplete="off" >
                        <CssTextField placeholder="Enter your E-mail"/>
                        <Button className={stylesButton.root} variant="contained">Subscribe</Button>
                    </form>
                </Grid>
            </Grid>

            <Divider className={stylesForFooter.divider}/>


            <Grid item container={true} direction="row" xs={12} sm={12} md={12} lg={12} xl={12}
                  justify="space-between"
                  alignItems="center">
                <Grid item xs={12} sm={12} md={3} lg={3} xl={3} style={{padding: '20px 0'}}><img
                    className={stylesForFooter.logo} src={logo}/>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} style={{padding: '20px 0'}} direction="row"
                      justify="flex-end"
                      alignItems="center">


                    <nav>
                        <a className={stylesForFooter.nav__link} href='#'>Terms & conditions</a>
                        <a className={stylesForFooter.nav__link} href='#'>Privacy policy</a>
                        <a className={stylesForFooter.nav__link} href='#'>Documentations</a>
                        <a className={stylesForFooter.nav__link} href='#'>support@grapherex.com</a>

                    </nav>

                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3} xl={3} className={stylesForFooter.copyr}
                      style={{padding: '20px 0'}} direction="row"
                      justify="flex-end"
                      alignItems="center">
                    Copyright 2008-2020 © seeklogo.com
                </Grid>
            </Grid>
        </Grid>


    )
}


export default Footer;


