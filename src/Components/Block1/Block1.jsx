import React from "react";
import style from "./Block1.module.css";
import Grid from "@material-ui/core/Grid";
import logo from "../../Assets/logo.png";
import Button from "@material-ui/core/Button";
import rowsbottom from "../../Assets/rows-bottom.png";
import rows from "../../Assets/rows.png";
import gpl from "../../Assets/googleplay.png";
import gpl2 from "../../Assets/googleplay2.png";
import gpl3 from "../../Assets/googleplay3.png";
import ping from "../../Assets/ping.png";
import pingg from "../../Assets/pingg.png";
import iphone from "../../Assets/iphone.png";
import launch from "../../Assets/launch-icon.png";
import Container from "@material-ui/core/Container";
import {makeStyles} from '@material-ui/core/styles';
import shadow from "../../Assets/shadow.png";
import {useTheme} from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {ScrollTo} from "react-scroll-to";
import {Link, animateScroll as scroll} from "react-scroll";
import Box from "@material-ui/core/Box";


const useStylesContainer = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: "90%",
        margin: "0 auto",
        height: '80vh',

        [theme.breakpoints.down('md')]: {
            height: 'auto',
        }
    },
    item: {
        marginTop: 130
    },
    launch: {
        width: '100%',
        maxWidth: '106px',
        height: 'auto',
    },
    title: {
        fontFamily: 'Century Gothic',
        color: 'white',
        fontSize: '60px',
        lineHeight: '80px',
        marginTop: '20px',
        [theme.breakpoints.down('md')]: {
            fontSize: '38px',
            lineHeight: '42px',
        }
    },
    imgiphone: {
        [theme.breakpoints.between('lg', 'xl')]: {
            height: 'auto',
            width: '100%',
            maxWidth: '650px',
            marginTop: '0px',
            marginLeft: '200px'
        },
        [theme.breakpoints.between('md', 'lg')]: {
            width: '100%',
            height: 'auto',
            maxWidth: '500px',
            marginTop: '50px',
        },
        [theme.breakpoints.between('sm', 'md')]: {
            width: '100%',
            height: 'auto',
            maxWidth: '340px',
            marginTop: '-20px',
            marginLeft: '0px'
        },
        [theme.breakpoints.between('xs', 'sm')]: {
            width: '100%',
            height: 'auto',
            maxWidth: '340px',
            marginTop: '-20px',
            marginLeft: '0px'
        },
    },
    displaynone: {

        [theme.breakpoints.between('lg', 'xl')]: {
            marginTop: '20%',
        },
        [theme.breakpoints.between('md', 'lg')]: {
            marginTop: '20%',
        },
        [theme.breakpoints.between('sm', 'md')]: {
            display: 'none'
        },
        [theme.breakpoints.between('xs', 'sm')]: {
            display: 'none'
        },
    },
    block1subtitle: {
        fontFamily: 'HelveticaNeueCyr-Roman',
        color: '#929ba4',
        fontSize: '24px',
        lineHeight: '34px',

        [theme.breakpoints.down('md')]: {
            fontSize: '18px'
        }
    },
    dot__rowsbottom: {

        padding: '12px 0'
    },
    dot__rowsbottomn: {
        padding: '7px 0'
    },


}));

const contactsButtonBlock1 = makeStyles((theme) => ({
    root: {
        borderRadius: "50px",
        backgroundColor: '#26B590',
        color: '#fff',
        backgroundSize: '7% 35%',
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right 1.5em top 55%, 0 0",
        fontFamily: 'Century Gothic',
        fontVariant: 'normal',
        textTransform: 'none',
        fontSize: '21px',
        position:'relative',
        zIndex:'0',
        [theme.breakpoints.between('lg', 'xl')]: {
            height: 70,
            width: 200,
            backgroundImage: `url(${rows})`,
        },
        [theme.breakpoints.between('md', 'lg')]: {
            height: 70,
            width: 200,
            backgroundImage: `url(${rows})`,
        },
        [theme.breakpoints.between('sm', 'md')]: {
            height: 70,
            width: 200,
            backgroundImage: `url(${rows})`,
        },
        [theme.breakpoints.between('xs', 'sm')]: {
            height: 70,
            width: 200,
            backgroundImage: `url(${rows})`,
        },
    },


}));


const Block1 = () => {
    const contactsB = contactsButtonBlock1();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    const stylesContainer = useStylesContainer();

    return (
        <div className={stylesContainer.grid}>

            <Grid item={true} container className={stylesContainer.root} xs={12}>
                <Grid item container spacing={6} direction="column"
                      justify={matches ? "flex-start" : "center"}
                      alignItems="flex-start"
                      xs={12} sm={12} md={6} lg={4} xl={4}>
                    <Grid item className={stylesContainer.title}>Private, Secure Communication</Grid>
                    <Grid item className={stylesContainer.block1subtitle}>Secure messaging app, crypto wallet, and Web3
                        browser
                        built with state of the art technology.</Grid>
                    <Grid item>

                            <Button className={contactsB.root} variant="contained" zIndex="tooltip">Try it free</Button>




                    </Grid>
                    <Grid item container direction="column"
                          justify="flex-end"
                          alignItems="flex-start">
                        <Grid item container={true} justify='space-between' xs={12} sm={12} md={12} lg={12} xl={12}>
                            <Grid item><a href='#'><img className={stylesContainer.launch} src={gpl}/></a></Grid>
                            <Grid item><a href='#'><img className={stylesContainer.launch} src={gpl2}/></a></Grid>
                            <Grid item><a href='#'><img className={stylesContainer.launch} src={gpl3}/></a></Grid>
                        </Grid>
                    </Grid>
                </Grid>


                <Grid item container direction="column"
                      justify={matches && "flex-start"}
                      alignItems="flex-start" xs={12} sm={12} md={6} lg={4} xl={4}>
                    <div><img className={stylesContainer.imgiphone} src={iphone} style={{marginTop:'20px'}}/></div>
                </Grid>


                <Grid item container className={stylesContainer.displaynone}
                      direction="column"
                      justify="center"
                      alignItems="flex-end" xs={12} sm={12} md={12} lg={4} xl={4}>
                    <Grid item container={true} direction="column" justify="flex-end" alignItems="flex-end">
                        <Grid item className={stylesContainer.dot__rowsbottomn}><img src={pingg}/></Grid>
                        <Grid item className={stylesContainer.dot__rowsbottomn}><img src={ping}/></Grid>
                        <Grid item className={stylesContainer.dot__rowsbottomn}><img src={ping}/></Grid>
                        <Grid item className={stylesContainer.dot__rowsbottomn}><img src={ping}/></Grid>
                        <Grid item className={stylesContainer.dot__rowsbottomn}><img src={ping}/></Grid>
                        <Grid item className={stylesContainer.dot__rowsbottomn}><img src={ping}/></Grid>
                        <Grid item> <Link
                            activeClass="active"
                            to="section2"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            <img src={rowsbottom} style={{marginLeft: '0px', cursor: 'pointer'}}/>
                        </Link> </Grid>

                    </Grid>
                </Grid>


            </Grid>
        </div>

    )
}


export default Block1;


