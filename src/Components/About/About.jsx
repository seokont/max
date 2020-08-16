import React, {useState} from "react";

import Grid from "@material-ui/core/Grid";
import rowsbottom from "../../Assets/rows.png";

import {makeStyles} from '@material-ui/core/styles';

import gerl from "../../Assets/imagegerl.jpg";


import rowsgreen from "../../Assets/rows-green.png";
import rowsgreyleft from "../../Assets/rows-gray-left.png";

import Headerforpages from "../Headerforpages/Headerforpages";
import {compose} from "redux";
import {connect} from "react-redux";

import {actionAboutSlider, actionAboutSliderPrev} from "../../Redux/about-reducer";
import Grabherex from "../Grabherex/Grabherex";
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

const About = (props) => {


    let clickSlider = () => {
        props.actionAboutSlider(true)
    }
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

    return (
        <div>
            <Headerforpages/>
            <Grid item container
                  xs={12} sm={12} md={12} lg={12} xl={12} className={stylesForAbout.container} direction="column"
                  justify="space-between"
                  alignItems="stretch">

                <Grid item container xs={12} sm={12} md={12} lg={12} xl={12}
                      className={stylesForAbout.container__contacts}>


                    <Grid item container xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <Grid item className={stylesForAbout.text__h}>Who we are?</Grid>
                            <Grid item className={stylesForAbout.phone}>Grapherex is an end-to-end encrypted
                                messenger
                                that removes sensitive metadata collection</Grid>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>

                        </Grid>

                    </Grid>
                    <Grid item container xs={12} sm={12} md={12} lg={12} xl={12} style={{marginBottom: '20px'}}>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <Grid item className={stylesForAbout.details}>
                                <p>Advanced features for </p>
                                <p>professionals and institutions</p>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <Grid item className={stylesForAbout.details}>
                                <img className={stylesForAbout.gerl} src={gerl}/>
                            </Grid>
                            <Grid item className={stylesForAbout.text__h}>Our app</Grid>
                            <Grid item>Grapherex is an end-to-end encrypted messenger that removes sensitive
                                metadata
                                collection, and is designed for people who want privacy and freedom from any forms
                                of
                                surveillance.</Grid>
                        </Grid>
                    </Grid>
                    <Grid item container={true}>
                        <Grid item container={true} justify='space-between'>
                            <Grid item className={stylesForAbout.phone}>They created the grapherex</Grid>

                            <Grid item><img src={rowsgreyleft} onClick={clickSlider}
                                            style={{
                                                padding: '0 17px',
                                                cursor: 'pointer'
                                            }}/><img src={rowsgreen}
                                                     onClick={clickSlider}
                                                     style={{
                                                         padding: '0 17px',
                                                         cursor: 'pointer'
                                                     }}/></Grid>

                        </Grid>
                        <Grid item container direction='row' xs={12} sm={12} md={12} lg={12} xl={12}
                              justify='space-between' style={{marginTop: '20px'}}>


                            {aboutPersona}

                        </Grid>


                        <Grid item container style={{padding: '50px 0'}}>
                            <Grid item className={stylesForAbout.phone}>Users can send messages and exchange photos,
                                videos, stickers, audio, and files,
                                as well as react to other users messages</Grid>
                            <Grid item>Entirely open source and made by contributors around the world. Developers,
                                designers, creators, educators, enthusiasts, and more have free and open access to
                                the
                                repos, assets, and information.</Grid>
                        </Grid>

                    </Grid>

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

export default compose(
    connect(mapStateToProps, {actionAboutSlider, actionAboutSliderPrev}),
)(About);

