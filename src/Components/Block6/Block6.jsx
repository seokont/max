import React from "react";
import style from "./Block6.module.css";
import Grid from "@material-ui/core/Grid";
import logo from "../../Assets/logo.png";
import Button from "@material-ui/core/Button";
import rows from "../../Assets/rows.png";
import iphone from "../../Assets/iphone.png";
import iphoneblock3 from "../../Assets/wallet-iphone.png";
import icon1 from "../../Assets/icon1.png";
import icon2 from "../../Assets/icon2.png";
import icon3 from "../../Assets/icon3.png";
import iconforblock6 from "../../Assets/iconforblock6.png";
import iconforblock62 from "../../Assets/iconforblock62.png";
import iconforblock63 from "../../Assets/iconforblock63.png";
import {makeStyles} from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import {Link} from "react-scroll";
import rowsbottom from "../../Assets/rows-bottom.png";
import ping from "../../Assets/ping.png";
import pingg from "../../Assets/pingg.png";

const StylesBlock6 = makeStyles((theme) => ({
    container: {
        width: '100%',
        maxWidth: "90%",


        [theme.breakpoints.between('lg', 'xl')]: {

            height: 'auto',
            margin: "80px auto",

        },
        [theme.breakpoints.between('md', 'lg')]: {

            height: 'auto',
            margin: "80px auto",
        },
        [theme.breakpoints.between('sm', 'md')]: {

            height: 'auto',
            margin: "0px auto",
        },
        [theme.breakpoints.between('xs', 'sm')]: {

            height: 'auto',
            margin: "0px auto",
        },


    },

    divider: {
        width: '100%',
        height: '1px',
        backgroundColor: '#516775'

    },
    divider2: {
        width: '100%',
        height: '1px',
        backgroundColor: '#30BB97'

    },
    block6__title: {
        [theme.breakpoints.between('lg', 'xl')]: {
            fontFamily: 'Century Gothic',
            color: '#fff',
            fontSize: '130px',
            textAlign: 'center'
        },
        [theme.breakpoints.between('md', 'lg')]: {
            fontFamily: 'Century Gothic',
            color: '#fff',
            fontSize: '130px',
            marginTop: '50px',
            textAlign: 'center'
        },
        [theme.breakpoints.between('sm', 'md')]: {
            fontFamily: 'Century Gothic',
            color: '#fff',
            fontSize: '60px',
            textAlign: 'center'
        },
        [theme.breakpoints.between('xs', 'sm')]: {
            fontFamily: 'Century Gothic',
            color: '#fff',
            fontSize: '60px',
            textAlign: 'center'
        },

    },
    text__h3: {
        [theme.breakpoints.between('lg', 'xl')]: {
            fontFamily: 'Century Gothic',
            color: 'white',
            fontSize: '23px',
            fontWeight: 'bold'
        },
        [theme.breakpoints.between('md', 'lg')]: {
            fontFamily: 'Century Gothic',
            color: 'white',
            fontSize: '23px',
            fontWeight: 'bold'
        },
        [theme.breakpoints.between('sm', 'md')]: {
            fontFamily: 'Century Gothic',
            color: 'white',
            fontSize: '20px',
            fontWeight: 'bold'
        },
        [theme.breakpoints.between('xs', 'sm')]: {
            fontFamily: 'Century Gothic',
            color: 'white',
            fontSize: '18px',
            fontWeight: 'bold'
        },


    },
    block6__text: {

        [theme.breakpoints.between('lg', 'xl')]: {
            color: '#fff',
            fontSize: '35px',
            fontFamily: 'Century Gothic',
            fontWeight: 'normal',
        },
        [theme.breakpoints.between('md', 'lg')]: {
            color: '#fff',
            fontSize: '35px',
            fontFamily: 'Century Gothic',
            fontWeight: 'normal',
        },
        [theme.breakpoints.between('sm', 'md')]: {
            color: '#fff',
            fontSize: '28px',
            fontFamily: 'Century Gothic',
            fontWeight: 'normal',
        },
        [theme.breakpoints.between('xs', 'sm')]: {
            color: '#fff',
            fontSize: '28px',
            fontFamily: 'Century Gothic',
            fontWeight: 'normal',
        },

    },
    dot__rowsbottom: {

        padding: '12px 0'
    },
    dot__rowsbottomn: {
        padding: '7px 0'
    },
    displaynone: {
        [theme.breakpoints.between('lg', 'xl')]: {
            marginLeft: '-40px'
        },
        [theme.breakpoints.between('md', 'lg')]: {
            marginLeft: '-40px'
        },
        [theme.breakpoints.between('sm', 'md')]: {
            display: 'none'
        },
        [theme.breakpoints.between('xs', 'sm')]: {
            display: 'none'
        },

    },


}));


const Block6 = () => {
    const stylesForBlock6 = StylesBlock6();
    return (
        <Grid container={true} className={stylesForBlock6.container}
              justify="center"
              alignItems="stretch" spacing={5}>
            <Grid item className={stylesForBlock6.block6__title} xs={12} sm={12} md={12} lg={12} xl={12}
                  id='section6'>Features</Grid>
            <Grid item container xs={12} sm={12} md={12} lg={11} xl={11}>
                <Grid item container={true}
                      xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}
                          className={style.block4__span}>04. Features</Grid>

                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6} container={true} style={{marginBottom: '100px'}}>

                        <Grid item container={true}>
                            <Grid item className={style.block6__header} style={{marginBottom: '20px'}}>Graphical trading
                                experience</Grid>
                            <Divider className={stylesForBlock6.divider} style={{marginBottom: '30px'}}/>
                            <Grid item className={stylesForBlock6.block6__text}>Advanced features for professionals and
                                institutions</Grid>

                        </Grid>
                    </Grid>
                </Grid>


                <Grid item container={true} xs={12} sm={12} md={12} lg={12} xl={12} direction="row"
                      justify="space-between"
                      alignItems="stretch">


                    <Grid item container={true} xs={12} sm={12} md={4} lg={4} xl={4} direction="row" justify="center"
                          alignItems="stretch">
                        <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                            <img src={iconforblock6}/>
                        </Grid>
                        <Grid item container={true} xs={12} sm={12} md={9} lg={9} xl={9}>
                            <Grid item className={stylesForBlock6.text__h3}>Secure messenger</Grid>
                            <Grid item className={style.text__text}>Partnering with Market Synergy, corporate accounts
                                and
                                professional traders can take
                                advantage
                            </Grid>
                        </Grid>
                    </Grid>


                    <Grid item container={true} xs={12} sm={12} md={4} lg={4} xl={4} direction="row" justify="center"
                          alignItems="stretch">
                        <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                            <img src={iconforblock62}/>
                        </Grid>
                        <Grid item container={true} xs={12} sm={12} md={9} lg={9} xl={9}>
                            <Grid item className={stylesForBlock6.text__h3}>Crypto wallet</Grid>
                            <Grid item className={style.text__text}>We have developed a suite
                                of advanced features to meet the highest of demands
                            </Grid>
                        </Grid>
                    </Grid>


                    <Grid item container={true} xs={12} sm={12} md={4} lg={4} xl={4} direction="row" justify="center"
                          alignItems="stretch">
                        <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                            <img src={iconforblock63}/>
                        </Grid>
                        <Grid item container={true} xs={12} sm={12} md={9} lg={9} xl={9}>
                            <Grid item className={stylesForBlock6.text__h3}>Exchange</Grid>
                            <Grid item className={style.text__text}>As the home of professional trading, we understand
                                the
                                unique
                                and complex
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>


            </Grid>
            <Grid item container xs={12} sm={12} md={12} lg={1} xl={1}>

                <Grid item container={true} xs={12} sm={12} md={12} lg={12} xl={12}
                      className={stylesForBlock6.displaynone}>

                    <Grid item container direction="column"
                          justify="center"
                          alignItems="flex-end">
                        <Grid item className={stylesForBlock6.dot__rowsbottomn}><img src={ping}/></Grid>
                        <Grid item className={stylesForBlock6.dot__rowsbottomn}><img src={ping}/></Grid>
                        <Grid item className={stylesForBlock6.dot__rowsbottomn}><img src={ping}/></Grid>
                        <Grid item className={stylesForBlock6.dot__rowsbottomn}><img src={ping}/></Grid>
                        <Grid item className={stylesForBlock6.dot__rowsbottomn}><img src={ping}/></Grid>
                        <Grid item className={stylesForBlock6.dot__rowsbottomn}><img src={pingg}/></Grid>

                        <Grid item> <Link
                            activeClass="active"
                            to="section7"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            <img src={rowsbottom}
                                 style={{ cursor: 'pointer'}}/>
                        </Link> </Grid>

                    </Grid>
                </Grid>

            </Grid>
            <Grid item direction='column' alignItems='stretch' container spacing={5}>
                <Divider className={stylesForBlock6.divider2} style={{width: '90%'}}></Divider>
                <Grid item justify="center" alignItems="center" className={style.block6__button}>Show more</Grid>
            </Grid>

        </Grid>


    )
}


export default Block6;








