import React from "react";
import style from "./Block7.module.css";
import Grid from "@material-ui/core/Grid";
import logo from "../../Assets/logo.png";
import Button from "@material-ui/core/Button";
import rows from "../../Assets/rows.png";
import rowsgreen from "../../Assets/rows-green.png";
import iphone from "../../Assets/iphone.png";
import iphoneblock3 from "../../Assets/wallet-iphone.png";
import icon1 from "../../Assets/icon1.png";
import icon2 from "../../Assets/icon2.png";
import icon3 from "../../Assets/icon3.png";
import iconforblock6 from "../../Assets/iconforblock6.png";
import iconforblock62 from "../../Assets/iconforblock62.png";
import launchicon2 from "../../Assets/launch-icon2.png";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import gpl from "../../Assets/googleplay.png";
import gpl2 from "../../Assets/googleplay2.png";
import gpl3 from "../../Assets/googleplay3.png";
import hr from "../../Assets/hr.png";

const StylesBlock7 = makeStyles((theme) => ({
    container: {
        width: '100%',
        maxWidth: "90%",
        margin: "0 auto",

        [theme.breakpoints.between('lg', 'xl')]: {

            height: '500px',
        },
        [theme.breakpoints.between('md', 'lg')]: {

            height: '500px',
        },
        [theme.breakpoints.between('sm', 'md')]: {

            height: '500px',
        },
        [theme.breakpoints.between('xs', 'sm')]: {

            height: '900px',
        },


    },
    intro: {
        backgroundColor: 'white',
    },

    item__l: {
        [theme.breakpoints.between('lg', 'xl')]: {
            backgroundColor: '#26b590',
            padding: '50px',
            height: 'auto',
        },
        [theme.breakpoints.between('md', 'lg')]: {
            backgroundColor: '#26b590',
            padding: '40px',
            height: 'auto',
        },
        [theme.breakpoints.between('sm', 'md')]: {
            backgroundColor: '#26b590',
            padding: '30px',
            height: 'auto',
        },
        [theme.breakpoints.between('xs', 'sm')]: {
            backgroundColor: '#26b590',
            padding: '20px',
            height: '100%',
            marginBottom: '30px'
        },
    },
    item__k: {
        [theme.breakpoints.between('lg', 'xl')]: {
            padding: '50px',
            height: 'auto',
        },
        [theme.breakpoints.between('md', 'lg')]: {
            padding: '50px ',
            height: 'auto',
        },
        [theme.breakpoints.between('sm', 'md')]: {
            padding: '50px 0 0 0',
            height: 'auto',
        },
        [theme.breakpoints.between('xs', 'sm')]: {
            padding: '10px 0 10px 0',
            height: '100%',
        },
    },
    imglaunchicon2: {

        width: '100%',
        height: 'auto',
        maxWidth: '1px'

    },
    block7__text: {
        [theme.breakpoints.between('lg', 'xl')]: {
            fontFamily: 'Century Gothic',
            fontSize: '50px',
            color: '#fff',
            fontWeight: 'bold'
        },
        [theme.breakpoints.between('md', 'lg')]: {
            fontFamily: 'Century Gothic',
            fontSize: '50px',
            color: '#fff',
            fontWeight: 'bold'
        },
        [theme.breakpoints.between('sm', 'md')]: {
            fontFamily: 'Century Gothic',
            fontSize: '30px',
            color: '#fff',
            fontWeight: 'bold'
        },
        [theme.breakpoints.between('xs', 'sm')]: {
            fontFamily: 'Century Gothic',
            fontSize: '30px',
            color: '#fff',
            fontWeight: 'bold'
        },
    },
    block7__button: {
        textDecoration: ' none',
        textAlign: ' center',
        padding: ' 21px 46px 21px 16px',
        border: ' 1px solid #fff',
        borderRadius: ' 50px',
        fontFamily: 'Century Gothic',
        fontSize: ' 21px',
        fontWeight: ' bold',
        color: ' #ffffff',
        backgroundColor: ' #30bb97',
        backgroundImage: ` url(${rows})`,
        backgroundRepeat: ' no-repeat',
        backgroundPosition: ' right 1.5em top 50%, 0 0',
        backgroundSize: ' 13px auto, 100%',
        cursor: ' pointer',
        width: '270px',

    },

    launch: {
        width: '100%',
        maxWidth: '106px',
        height: 'auto',
        '&:hover': {
            filter: 'invert(100%)'


        },

    },


}));

const contactsButtonBlock7 = makeStyles((theme) => ({
    root: {
        borderRadius: "50px",
        border: '1px solid #26B590',
        backgroundColor: '#fff',
        color: '#26B590',
        backgroundSize: '5% 35%',
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right 1.5em top 55%, 0 0",
        fontFamily: 'Century Gothic',
        fontVariant: 'normal',
        textTransform: 'none',
        fontSize: '21px',
        padding: '0 0px',
        '&:hover': {
            color: ' #fff',
            backgroundColor: '#26B590',
            backgroundImage: `url(${rows})`,
        },
        [theme.breakpoints.between('lg', 'xl')]: {
            height: 70,
            width: 250,
            backgroundImage: `url(${rowsgreen})`,
        },
        [theme.breakpoints.between('md', 'lg')]: {
            height: 70,
            width: 250,
            backgroundImage: `url(${rowsgreen})`,
        },
        [theme.breakpoints.between('sm', 'md')]: {
            height: 70,
            width: 250,
            backgroundImage: `url(${rowsgreen})`,
        },
        [theme.breakpoints.between('xs', 'sm')]: {
            height: 70,
            width: 250,
            backgroundImage: `url(${rowsgreen})`,
        },
    },

    secondary: {
        borderRadius: "50px",
        border: '1px solid #fff',
        backgroundColor: '#26B590',
        color: '#fff',
        backgroundSize: '5% 35%',
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right 1.5em top 55%, 0 0",
        fontFamily: 'Century Gothic',
        fontVariant: 'normal',
        textTransform: 'none',
        fontSize: '21px',
        padding: '0 0px',
        '&:hover': {
            color: ' #26B590',
            backgroundColor: '#D5D5D5',
            backgroundImage: `url(${rowsgreen})`,
        },
        [theme.breakpoints.between('lg', 'xl')]: {
            height: 70,
            width: 290,
            backgroundImage: `url(${rows})`,
        },
        [theme.breakpoints.between('md', 'lg')]: {
            height: 70,
            width: 290,
            backgroundImage: `url(${rows})`,
        },
        [theme.breakpoints.between('sm', 'md')]: {
            height: 70,
            width: 290,
            backgroundImage: `url(${rows})`,
        },
        [theme.breakpoints.between('xs', 'sm')]: {
            height: 70,
            width: 290,
            backgroundImage: `url(${rows})`,
        },
    },



}));


const Block7 = () => {
    const contactsB = contactsButtonBlock7();
    const theme = useTheme();
    const matches_lg_xl = useMediaQuery(theme.breakpoints.between('lg', 'xl'));
    const matches_md_lg = useMediaQuery(theme.breakpoints.between('md', 'lg'));
    const matches_sm_md = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    const matches_xs_sm = useMediaQuery(theme.breakpoints.between('xs', 'sm'));
    const stylesForBlock7 = StylesBlock7();
    return (
        <Grid container={true} className={stylesForBlock7.intro}>
            <Grid item container={true} className={stylesForBlock7.container}>

                <Grid item container={true} id='section7' xs={12} sm={12} md={6} lg={6} xl={6} direction="column"
                      justify={matches_lg_xl || matches_md_lg ? "space-around" : "flex-start"}
                      alignItems="flex-start">
                    <Grid item container={true} className={stylesForBlock7.item__k}>
                        <h3 className={style.text__h3} style={{marginBottom: '30px'}}>An open source project</h3>
                        <Grid item className={style.text__text} style={{marginBottom: '30px'}}>Entirely open source and
                            made by contributors around the
                            world. Developers, designers, creators, educators, enthusiasts, and more have free and
                            open access to the repos, assets, and information.
                        </Grid>
                        <Grid item>

                            <Button className={contactsB.root} variant="contained">Read more</Button>
                        </Grid>
                    </Grid>
                </Grid>


                <Grid item container={true} xs={12} sm={12} md={6} lg={6} xl={6}
                      direction="column"
                      justify={matches_lg_xl || matches_md_lg ? "space-around" : "flex-start"}
                      alignItems="flex-start">
                    <Grid item container={true} className={stylesForBlock7.item__l}>
                        <Grid item container={true} xs={12} sm={12} md={12} lg={12} xl={12}>
                            <Grid item className={style.block7__text} xs={12} sm={12} md={12} lg={12} xl={12}
                                  style={{marginBottom: '30px'}}>Get
                                Grapherex</Grid>
                            <Grid item className={style.block7__text__text} xs={12} sm={12} md={12} lg={12} xl={12}
                                  style={{marginBottom: '30px'}}>Start
                                enjoy Grapherex on iOS, Android or
                                Web</Grid>
                            <Grid item container={true} justify='space-between' direction='row' xs={12} sm={12} md={12}
                                  lg={12} xl={12} style={{marginBottom: '30px'}}>

                                <Grid item><a href='#'><img className={stylesForBlock7.launch} src={gpl}/></a></Grid>
                                <Grid item><a href='#'><img className={stylesForBlock7.imglaunchicon2}
                                                            src={hr}/></a></Grid>
                                <Grid item><a href='#'><img className={stylesForBlock7.launch} src={gpl2}/></a></Grid>
                                <Grid item><a href='#'><img className={stylesForBlock7.imglaunchicon2}
                                                            src={hr}/></a></Grid>
                                <Grid item><a href='#'><img className={stylesForBlock7.launch} src={gpl3}/></a></Grid>

                            </Grid>


                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{marginBottom: '30px'}}>
                                {/*<button className={stylesForBlock7.block7__button}>Download now</button>*/}
                                <Button className={contactsB.secondary} variant="contained">Download now</Button>
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>


            </Grid>
        </Grid>
    )
}


export default Block7;

