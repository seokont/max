import React from "react";
import style from "./Block2.module.css";
import Grid from "@material-ui/core/Grid";
import logo from "../../Assets/logo.png";
import Button from "@material-ui/core/Button";
import rowsgreen from "../../Assets/rows-green.png";
import iphone from "../../Assets/iphone.png";
import iphoneblock2 from "../../Assets/iphone-block2.png";
import {makeStyles} from "@material-ui/core/styles";
import rows from "../../Assets/rows.png";
import Divider from "@material-ui/core/Divider";
import {useTheme} from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import rowsgreeen from "../../Assets/rows-green.png";
import fonblock2 from "../../Assets/fonblock2.png";
import {Link} from "react-scroll";
import rowsbottom from "../../Assets/rows-bottom.png";
import pingg from "../../Assets/pingg.png";
import ping from "../../Assets/ping.png";

const stylesBlock2 = makeStyles((theme) => ({
    block2: {

        [theme.breakpoints.between('lg', 'xl')]: {
            width: '100%',
            maxWidth: "90%",
            margin: "0 auto",
            height: 'auto',
        },
        [theme.breakpoints.between('md', 'lg')]: {
            width: '100%',
            maxWidth: "90%",
            margin: "0 auto",
            height: 'auto',
        },
        [theme.breakpoints.between('sm', 'md')]: {
            width: '100%',
            maxWidth: "90%",
            margin: "0 auto",
            height: 'auto',
        },
        [theme.breakpoints.between('xs', 'sm')]: {
            width: '100%',
            maxWidth: "90%",
            margin: "0 auto",
            height: 'auto',
        },

    },
    intro__dot__item: {
        width: '8px',
        height: '8px',
        backgroundColor: '#30bb97',
        marginTop: '3%'
    },
    block2title: {
        [theme.breakpoints.between('lg', 'xl')]: {
            fontSize: '130px',
        },
        [theme.breakpoints.between('md', 'lg')]: {
            fontSize: '130px',
        },
        [theme.breakpoints.between('sm', 'md')]: {
            fontSize: '60px',
            marginBottom: '50px'
        },
        [theme.breakpoints.between('xs', 'sm')]: {
            fontSize: '60px',
            marginBottom: '50px'
        },
        fontFamily: 'Century Gothic',
        color: 'white',
        [theme.breakpoints.down('md')]: {}
    },
    block2__span: {
        color: '#30bb97',
    },
    imgagphoneBlock2: {

        [theme.breakpoints.between('lg', 'xl')]: {
            height: 'auto',
            width: '100%',
            maxWidth: '280px'
        },
        [theme.breakpoints.between('md', 'lg')]: {
            height: 'auto',
            width: '100%',
            maxWidth: '280px'
        },
        [theme.breakpoints.between('sm', 'md')]: {
            width: '100%',
            height: 'auto',
            maxWidth: '200px',
            marginLeft: '0px'
        },
        [theme.breakpoints.between('xs', 'sm')]: {
            width: '100%',
            height: 'auto',
            maxWidth: '200px',
            marginLeft: '0px'
        },
    },
    chat__screen: {
        fontFamily: 'HelveticaNeueCyr-Roman',
        color: '#929ba4',
    },
    text__block2: {
        color: 'white',
        fontSize: '20px',
        [theme.breakpoints.down('md')]: {
            fontSize: '16px',
            lineHeight: '35px'
        },
        fontFamily: 'HelveticaNeueCyr-Roman',
        lineHeight: '30px'
    },
    divider: {
        width: '100%',
        height: '1px',
        backgroundColor: '#30BB97',
    },
    block__button__button: {
        textDecoration: ' none',
        textAlign: ' left',
        border: ' none',
        fontFamily: 'Century Gothic',
        fontSize: ' 21px',
        fontWeight: ' bold',
        color: ' #30bb97',
        backgroundImage: `url(${rowsgreeen})`,
        backgroundRepeat: ' no-repeat',
        backgroundPosition: ' right 0% top 3%, 0 0',
        backgroundSize: ' 13px auto, 100%',
        cursor: ' pointer',
        [theme.breakpoints.between('lg', 'xl')]: {
            marginTop: '0px',
            padding: ' 0px 40px 0px 0px',
        },
        [theme.breakpoints.between('md', 'lg')]: {
            padding: ' 0px 40px 0px 0px',
            marginTop: '0px',
        },
        [theme.breakpoints.between('sm', 'md')]: {
            marginTop: '20px',
            padding: ' 0px 40px 0px 20px',
        },
        [theme.breakpoints.between('xs', 'sm')]: {
            marginTop: '20px',
            padding: ' 0px 40px 0px 20px',
        },
        '&:hover': {
            color: ' #fff',
            backgroundImage: `url(${rows})`,
        },
    },
    block2margintop: {

        [theme.breakpoints.between('lg', 'xl')]: {
            marginTop: '100px',
        },
        [theme.breakpoints.between('md', 'lg')]: {
            marginTop: '100px',
        },
        [theme.breakpoints.between('sm', 'md')]: {
            marginTop: '10px',
        },
        [theme.breakpoints.between('xs', 'sm')]: {
            marginTop: '10px',
        },

    },
    locka: {
        backgroundImage: `url(${fonblock2})`,
        backgroundRepeat: ' no-repeat',
        backgroundPosition:  'bottom center',
        backgroundSize: 'cover',
        width: '100%',
        height: 'auto'
    },
    dot__rowsbottom: {

        padding:'12px 0'
    },
    dot__rowsbottomn: {
        padding:'7px 0'
    },
    displaynone:{
        [theme.breakpoints.between('lg', 'xl')]: {
            height:'100%',
            marginTop: '-40px'
        },
        [theme.breakpoints.between('md', 'lg')]: {
            height:'100%',
            marginTop: '-40px'
        },
        [theme.breakpoints.between('sm', 'md')]: {
            display:'none'
        },
        [theme.breakpoints.between('xs', 'sm')]: {
            display:'none'
        },
    },
}));
const Block2 = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const useStylesBlock2 = stylesBlock2();
    return (

        <div className={useStylesBlock2.locka}>
            <Grid item container direction="rows"
                  justify="center"
                  alignItems="center" className={useStylesBlock2.block2} xs={12} sm={12} md={12} lg={12} xl={12}>

                <Grid item container direction="column"
                      justify="center"
                      alignItems="center" xs={12}>
                    <Grid item className={useStylesBlock2.intro__dot__item}></Grid>
                    <Grid item className={useStylesBlock2.intro__dot__item}></Grid>
                    <Grid item className={useStylesBlock2.intro__dot__item}></Grid>
                    <Grid item className={useStylesBlock2.intro__dot__item}></Grid>
                </Grid>
                <Grid item className={useStylesBlock2.block2title} id="section2">Messanger</Grid>
                <Grid item container xs={12} sm={12} md={12} lg={12} xl={12} direction='row' justify="space-between" alignItems="stretch"
                      className={useStylesBlock2.block2margintop} >
                    <Grid item xs={12} md={2} className={useStylesBlock2.block2__span}>
                        01. Messanger
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4}><img className={useStylesBlock2.imgagphoneBlock2}
                                                   src={iphoneblock2}/></Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4} container>
                        <Grid item xs={12} container spacing={matches && 6}>
                            <Grid item xs={12} className={useStylesBlock2.chat__screen}>Great chat screen</Grid>
                            <Grid item xs={12} className={useStylesBlock2.text__block2}>Grapherex is an end-to-end
                                encrypted
                                messenger that removes sensitive
                                metadata collection, and is designed
                                for people who want privacy and freedom from any forms of surveillance.
                            </Grid>
                            <Divider className={useStylesBlock2.divider}/>
                            <div item className={useStylesBlock2.block__button__button}>Read more</div>
                        </Grid>
                    </Grid>


                    <Grid item xs={12} sm={12} md={12} lg={2} xl={2} direction="column" className={useStylesBlock2.displaynone}
                          justify="flex-end"
                          alignItems="flex-end">
                        <Grid item container
                              direction="column"
                              justify="center"
                              alignItems="flex-end" xs={0} sm={0} md={10} lg={10} xl={10}  >
                            <Grid item container direction="column"
                                  justify="center"
                                  alignItems="flex-end" >
                                <Grid item className={useStylesBlock2.dot__rowsbottomn}><img src={ping}/></Grid>
                                <Grid item className={useStylesBlock2.dot__rowsbottomn}><img src={pingg}/></Grid>
                                <Grid item className={useStylesBlock2.dot__rowsbottomn}><img src={ping}/></Grid>
                                <Grid item className={useStylesBlock2.dot__rowsbottomn}><img src={ping}/></Grid>
                                <Grid item className={useStylesBlock2.dot__rowsbottomn}><img src={ping}/></Grid>
                                <Grid item className={useStylesBlock2.dot__rowsbottomn}><img src={ping}/></Grid>
                                <Grid item >  <Link
                                    activeClass="active"
                                    to="section3"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                    <img src={rowsbottom} style={{ cursor:'pointer'}}/>
                                </Link> </Grid>

                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </div>
    )
}


export default Block2;


