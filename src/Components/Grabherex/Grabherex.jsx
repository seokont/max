import React from "react";
import style from "./Grabherex.module.css";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import rows from "../../Assets/rows.png";
import launchicon from "../../Assets/launch-icon.png";
import Button from "@material-ui/core/Button";
import rowsbottom from "../../Assets/rows.png";
import gpl from "../../Assets/googleplay.png";
import hr from "../../Assets/hr.png";
import gpl2 from "../../Assets/googleplay2.png";
import gpl3 from "../../Assets/googleplay3.png";

const grabherex = makeStyles((theme) => ({
    container: {
        width: '100%',
        maxWidth: "90%",
        margin: "0 auto",

        padding: '10px 0 10px 0',

        [theme.breakpoints.between('lg', 'xl')]: {

            height: '100%',
        },
        [theme.breakpoints.between('md', 'lg')]: {

            height: '100%',
        },
        [theme.breakpoints.between('sm', 'md')]: {

            height: '100%',
        },
        [theme.breakpoints.between('xs', 'sm')]: {

            height: '100%',
        },


    },

    tryitfree: {
        backgroundColor: '#30bb97',
        width: '100%',
        height: 'auto',

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


    },

    grabherexheader: {
        fontFamily: 'Century Gothic',
        fontSize: '45px',
        fontWeight: 'bold',
        color: '#fff',

    },
    text: {
        color: '#fff'
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
const useStylesButton = makeStyles((theme) => ({
    root: {
        borderRadius: "50px",
        backgroundColor: '#26B590',
        color: '#fff',
        backgroundSize: '5% 30%',
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right 1.5em top 50%, 0 0",
        fontFamily: 'Century Gothic',
        fontVariant: 'normal',
        border: '#fff solid 1px',
        boxShadow: 'none',
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
        image: {
            width: '100%',
            height: 'auto',
            maxWidth: 'auto'
        },


    },


}));

const Grabherex = () => {
    const stylesButton = useStylesButton();
    const grabherexBlock = grabherex();
    return (<Grid container={true} className={grabherexBlock.tryitfree}>
            <Grid item container className={grabherexBlock.container} direction='row' xs={12} sm={12} md={12} lg={12}
                  xl={12}>


                <Grid item container direction='column' justify='space-around' alignItems='stretch' xs={12} sm={12}
                      md={6} lg={6} xl={6}>
                    <Grid item container direction='column' className={grabherexBlock.grabherexheader}>Get Grapherex</Grid>
                    <Grid item container justify='flex-start' alignItems='stretch' direction='column'  style={{marginTop:'50px'}}>
                        <Grid item container={true} justify='flex-start' alignItems='stretch' direction='row'
                              xs={12} sm={12} md={12}
                              lg={12} xl={12} spacing={4} style={{marginBottom: '30px'}}>

                            <Grid item><a href='#'><img className={grabherexBlock.launch} src={gpl}/></a></Grid>
                            <Grid item><a href='#'><img className={grabherexBlock.imglaunchicon2}
                                                        src={hr}/></a></Grid>
                            <Grid item><a href='#'><img className={grabherexBlock.launch} src={gpl2}/></a></Grid>
                            <Grid item><a href='#'><img className={grabherexBlock.imglaunchicon2}
                                                        src={hr}/></a></Grid>
                            <Grid item><a href='#'><img className={grabherexBlock.launch} src={gpl3}/></a></Grid>

                        </Grid>
                    </Grid>
                </Grid>
                <Grid item container={true} direction='column' justify='space-around' alignItems='stretch' xs={12}
                      sm={12} md={6} lg={6} xl={6}>
                    <Grid item className={grabherexBlock.text}>Start enjoy Grapherex on iOS, Android or Web</Grid>
                    <Grid item style={{marginTop: '30px'}}><Button className={stylesButton.root} variant="contained">Download
                        now</Button></Grid>
                </Grid>

            </Grid>
        </Grid>
    )
}


export default Grabherex;

