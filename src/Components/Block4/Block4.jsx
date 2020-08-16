import React from "react";
import style from "./Block4.module.css";
import Grid from "@material-ui/core/Grid";
import logo from "../../Assets/logo.png";
import Button from "@material-ui/core/Button";
import rows from "../../Assets/rows.png";
import rowsgreeen from "../../Assets/rows-green.png";
import rea from "../../Assets/readmore.png";
import iphone from "../../Assets/iphone.png";
import iphoneblock3 from "../../Assets/wallet-iphone.png";
import icon1 from "../../Assets/icon1.png";
import icon2 from "../../Assets/icon2.png";
import icon3 from "../../Assets/icon3.png";
import icon4 from "../../Assets/icon4.png";
import {makeStyles} from "@material-ui/core/styles";
import readmore from "../../Assets/readmore.png";
import reablock from "../../Assets/readmoreblack.png";
import {Link} from "react-scroll";
import rowsbottomblack from "../../Assets/rows-bottom-black.png";
import rowsbottom from "../../Assets/rows-bottom.png";
import ping from "../../Assets/ping.png";
import pingg from "../../Assets/pingg.png";


const StylesBlock4 = makeStyles((theme) => ({
    block3: {
        [theme.breakpoints.between('lg', 'xl')]: {
            width: '100%',
            maxWidth: "90%",
            margin: "0 auto",
            height: 'auto',
            padding: '20px 0 180px 0'
        },
        [theme.breakpoints.between('md', 'lg')]: {
            width: '100%',
            maxWidth: "90%",
            margin: "0 auto",
            height: 'auto',
            padding: '20px 0 180px 0'
        },
        [theme.breakpoints.between('sm', 'md')]: {
            width: '100%',
            maxWidth: "90%",
            margin: "0 auto",
            height: 'auto',
            padding: '20px 0 180px 0'
        },
        [theme.breakpoints.between('xs', 'sm')]: {
            width: '100%',
            maxWidth: "90%",
            margin: "0 auto",
            height: 'auto',
            padding: '20px 0 180px 0'
        },
    },

    block3__span: {
        color: '#30bb97'
    },
    title__screen: {

        [theme.breakpoints.between('lg', 'xl')]: {
            fontFamily: 'HelveticaNeueCyr-Roman',
            color: '#000',
            fontSize: '40px',
            lineHeight: '40px',
            fontWeight: 'bold'
        },
        [theme.breakpoints.between('md', 'lg')]: {
            fontFamily: 'HelveticaNeueCyr-Roman',
            color: '#000',
            fontSize: '40px',
            lineHeight: '40px',
            fontWeight: 'bold'

        },
        [theme.breakpoints.between('sm', 'md')]: {
            fontFamily: 'HelveticaNeueCyr-Roman',
            color: '#000',
            fontSize: '30px',
            lineHeight: '40px',
            fontWeight: 'bold'

        },
        [theme.breakpoints.between('xs', 'sm')]: {
            fontFamily: 'HelveticaNeueCyr-Roman',
            color: '#000',
            fontSize: '30px',
            lineHeight: '40px',
            fontWeight: 'bold'

        },


    },

    block4__title: {
        [theme.breakpoints.between('lg', 'xl')]: {
            fontFamily: 'Century Gothic',
            color: '#30bb97',
            fontSize: '130px',
        },
        [theme.breakpoints.between('md', 'lg')]: {
            fontFamily: 'Century Gothic',
            color: '#30bb97',
            fontSize: '130px',
            marginTop: '50px'
        },
        [theme.breakpoints.between('sm', 'md')]: {
            fontFamily: 'Century Gothic',
            color: '#30bb97',
            fontSize: '60px',
        },
        [theme.breakpoints.between('xs', 'sm')]: {
            fontFamily: 'Century Gothic',
            color: '#30bb97',
            fontSize: '60px',
        },

    },
    block4__content__title: {
        fontFamily: 'Century Gothic',
        fontSize: '30px',
        fontWeight: 'bold',
        color: '#fff',
        padding: '20px 0'

    },
    divider: {

        width: '100%',
        height: '1px',
        backgroundColor: '#30BB97',
        marginTop: '50px'

    },


    block4__button: {
        margin: '0 auto',
        textDecoration: 'none',
        textAlign: 'center',
        border: 'none',
        fontFamily: 'Century Gothic',
        fontSize: '21px',
        fontWeight: 'bold',
        color: '#30bb97',
        backgroundImage: `url(${readmore})`,
        backgroundRepeat: 'no-repeat',

        backgroundSize: '20px auto, 100%',
        cursor: 'pointer',
        [theme.breakpoints.down('md')]: {
            fontSize: '16px',
            backgroundPosition: 'left 7.5em top 0%, 0 0',
            [theme.breakpoints.between('lg', 'xl')]: {
                padding: '0px 50px 0 0',
                backgroundPosition: 'left 6.5em top 7%, 0 0',
            },
            [theme.breakpoints.between('md', 'lg')]: {
                padding: '0px 50px 0 0',
                backgroundPosition: 'left 6.5em top 7%, 0 0',
            },
            [theme.breakpoints.between('sm', 'md')]: {
                padding: '0px 70px 0 0',
                backgroundPosition: 'left 6.5em top 8%, 0 0',
            },
            [theme.breakpoints.between('xs', 'sm')]: {
                padding: '0px 70px 0 0',
                backgroundPosition: 'left 6.5em top 8%, 0 0',
            },

        },

    },
    imgagphoneBlock3: {
        [theme.breakpoints.between('lg', 'xl')]: {
            height: 'auto',
            width: '100%',
        },
        [theme.breakpoints.between('md', 'lg')]: {
            height: 'auto',
            width: '100%',
        },
        [theme.breakpoints.between('sm', 'md')]: {
            height: 'auto',
            maxWidth: '870px',
            width: '100%',
        },
        [theme.breakpoints.between('xs', 'sm')]: {
            height: 'auto',
            maxWidth: '370px',
            width: '100%',
        },


        [theme.breakpoints.down('md')]: {
            width: '100%',
            height: 'auto',
            maxWidth: '340px',
            marginTop: '50px',
            marginLeft: '0px'
        }
    },
    text: {

        color: '#98a4ac',
        fontSize: '16px',
        fontFamily: 'HelveticaNeueCyr-Roman',
    },
    icontext: {

        [theme.breakpoints.between('lg', 'xl')]: {
            padding: '0 30px',
        },
        [theme.breakpoints.between('md', 'lg')]: {
            padding: '0 30px',
        },
        [theme.breakpoints.between('sm', 'md')]: {
            padding: '30px 30px',
        },
        [theme.breakpoints.between('xs', 'sm')]: {
            padding: '30px 30px',
        },

    },

    block4button: {
        textDecoration: 'none',
        textAlign: ' left',
        padding: ' 21px 30px',
        border: ' none',
        fontFamily: 'Century Gothic',
        fontSize: ' 21px',
        fontWeight: ' bold',
        color: ' #fff',
        backgroundImage: `url(${rea})`,
        backgroundRepeat: ' no-repeat',
        backgroundPosition: ' left 0% top 50%, 0 0',
        backgroundSize: ' 20px auto, 100%',
        cursor: ' pointer',
        '&:hover': {
            color: '#30bb97',


        },

    },
    block__button__button: {
        textDecoration: ' none',
        textAlign: ' left',
        padding: ' 21px 40px 21px 0',
        border: ' none',
        fontFamily: 'Century Gothic',
        fontSize: ' 21px',
        fontWeight: ' bold',
        color: ' #fff',
        backgroundImage: `url(${rowsgreeen})`,
        backgroundRepeat: ' no-repeat',
        backgroundPosition: ' right 0% top 50%, 0 0',
        backgroundSize: ' 13px auto, 100%',
        cursor: ' pointer',
        '&:hover': {
            color: '#30bb97',


        },

    },
    dot__rowsbottom: {

        padding:'12px 0'
    },
    dot__rowsbottomn: {
        padding:'7px 0'
    },
    displaynone: {
        [theme.breakpoints.between('lg', 'xl')]: {
marginLeft:'-40px'
        },
        [theme.breakpoints.between('md', 'lg')]: {
            marginLeft:'-40px'
        },
        [theme.breakpoints.between('sm', 'md')]: {
            display: 'none'
        },
        [theme.breakpoints.between('xs', 'sm')]: {
            display: 'none'
        },

    },
}));

const Block4 = () => {
    const stylesForBlock4 = StylesBlock4();
    return (
        <Grid container={true} className={stylesForBlock4.block3__div}>
            <Grid item container={true}
                  justify="center"
                  alignItems="flex-start" className={stylesForBlock4.block3}>

                <Grid item className={stylesForBlock4.block4__title} id='section4'>Exchange</Grid>


                <Grid item container={true}>


                    <Grid item container={true} xs={12} sm={12} md={12} lg={12} xl={12}>

                        <Grid item className={stylesForBlock4.block3__span} xs={12} sm={12} md={12} lg={12} xl={12}>03. Exchange</Grid>


                        <Grid item container={true} direction="row" xs={12} sm={12} md={12} lg={12} xl={12}>


                            <Grid item container xs={12} sm={12} md={6} lg={5} xl={5} direction='column'
                                  justify="space-between" className={stylesForBlock4.icontext}
                                  alignItems="flex-start">
                                <Grid item><img src={icon4}/></Grid>
                                <Grid item className={stylesForBlock4.block4__content__title}> Access decentralized
                                </Grid>
                                <Grid item className={stylesForBlock4.text}>Grapherex is an end-to-end encrypted
                                    messenger that removes sensitive metadata collection, and is designed for people who
                                    want privacy and freedom</Grid>
                                <Grid item className={stylesForBlock4.divider}></Grid>
                                <div className={stylesForBlock4.block4button}>Install Grapherex</div>
                            </Grid>


                            <Grid item container xs={12} sm={12} md={6} lg={5} xl={5} direction='column'
                                  justify="space-between" className={stylesForBlock4.icontext}
                                  alignItems="flex-start">
                                <Grid item><img src={icon3}/></Grid>
                                <Grid item className={stylesForBlock4.block4__content__title}> Install Grapherex
                                </Grid>
                                <Grid item className={stylesForBlock4.text}>As the home of professional trading, we
                                    understand the unique and complex requirements of professionals and
                                    institutions</Grid>
                                <Grid item className={stylesForBlock4.divider}></Grid>
                                <div item className={stylesForBlock4.block__button__button}>Read more</div>

                            </Grid>
                            <Grid item container xs={12} sm={12} md={12} lg={2} xl={2}>
                                <Grid item container={true}  xs={12} sm={12} md={12} lg={12} xl={12} className={stylesForBlock4.displaynone}   >

                                    <Grid item container direction="column"
                                          justify="center"
                                          alignItems="flex-end" >
                                        <Grid item className={stylesForBlock4.dot__rowsbottomn}><img src={ping}/></Grid>
                                        <Grid item className={stylesForBlock4.dot__rowsbottomn}><img src={ping}/></Grid>
                                        <Grid item className={stylesForBlock4.dot__rowsbottomn}><img src={ping}/></Grid>
                                        <Grid item className={stylesForBlock4.dot__rowsbottomn}><img src={pingg}/></Grid>
                                        <Grid item className={stylesForBlock4.dot__rowsbottomn}><img src={ping}/></Grid>
                                        <Grid item className={stylesForBlock4.dot__rowsbottomn}><img src={ping}/></Grid>
                                        <Grid item >  <Link
                                            activeClass="active"
                                            to="section5"
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


                    <Grid item container={true} direction="column" xs={12} sm={12} md={12} lg={12} xl={12}>

                        <Grid item></Grid>

                    </Grid>

                </Grid>

            </Grid>
        </Grid>
    )
}


export default Block4;


