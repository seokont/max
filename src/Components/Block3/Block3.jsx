import React from "react";
import style from "./Block3.module.css";
import Grid from "@material-ui/core/Grid";
import logo from "../../Assets/logo.png";
import Button from "@material-ui/core/Button";
import rows from "../../Assets/rows.png";
import readmore from "../../Assets/readmore.png";
import iphone from "../../Assets/iphone.png";
import iphoneblock3 from "../../Assets/wallet-iphone.png";
import icon1 from "../../Assets/icon1.png";
import icon2 from "../../Assets/icon2.png";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import rowsgreen from "../../Assets/rows-green.png";
import rea from "../../Assets/readmore.png";
import reablock from "../../Assets/readmoreblack.png";
import {Link} from "react-scroll";
import rowsbottomblack from "../../Assets/rows-bottom-black.png";
import ping from "../../Assets/ping.png";
import pingg from "../../Assets/pingg.png";
import pingb from "../../Assets/pingb.png";

const stylesBlock3 = makeStyles((theme) => ({
    block3: {
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

    block3__div: {
        backgroundColor: '#fff',
        marginTop: '150px'
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
    block3__title: {
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
    block3__content__title: {
        fontFamily: 'Century Gothic',
        fontSize: '20px',
        fontWeight: 'bold'

    },
    divider: {

        width: '100%',
        height: '1px',
        backgroundColor: '#30BB97',
        marginTop: '50px'
    },
    block3__button: {
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

        }
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
    block3button: {
        textDecoration: 'none',
        textAlign: ' center',
        padding: ' 0px 30px',
        border: ' none',
        fontFamily: 'Century Gothic',
        fontSize: ' 21px',
        fontWeight: ' bold',
        color: ' #30bb97',
        backgroundImage: `url(${rea})`,
        backgroundRepeat: ' no-repeat',
        backgroundSize: ' 20px auto, 100%',
        cursor: ' pointer',
        margin: '20px auto',
        [theme.breakpoints.between('lg', 'xl')]: {
            backgroundPosition: ' left 0% top 10%, 0 0',
        },
        [theme.breakpoints.between('md', 'lg')]: {
            backgroundPosition: ' left 0% top 10%, 0 0',
        },
        [theme.breakpoints.between('sm', 'md')]: {
            backgroundPosition: ' left 0% top 30%, 0 0',
        },
        [theme.breakpoints.between('xs', 'sm')]: {
            backgroundPosition: ' left 0% top 30%, 0 0',
        },
        '&:hover': {
            color: ' #000',
            backgroundImage: `url(${reablock})`,

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

        },
        [theme.breakpoints.between('md', 'lg')]: {

        },
        [theme.breakpoints.between('sm', 'md')]: {
            display: 'none'
        },
        [theme.breakpoints.between('xs', 'sm')]: {
            display: 'none'
        },

    },

}));

const Block3 = () => {
    const mitheme = useTheme();
    const mimatches = useMediaQuery(mitheme.breakpoints.down('md'));
    const useStylesBlock3 = stylesBlock3();

    return (
        <Grid container={true} className={useStylesBlock3.block3__div}>
            <Grid item container={true}
                  justify="center"
                  alignItems="flex-start" className={useStylesBlock3.block3}>

                <Grid item className={useStylesBlock3.block3__title} id="section3">Wallet</Grid>


                <Grid item container={true}  xs={12} sm={12} md={12} lg={10} xl={10}>


                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6} container={true}>

                        <Grid item className={useStylesBlock3.block3__span}>02. Wallet</Grid>
                        <Grid item className={useStylesBlock3.title__screen}>Advanced features for professionals and
                            institutions
                        </Grid>


                        <Grid item direction="row" xs={12} sm={12} md={12} lg={12} xl={12} container={true}
                              style={{padding: '0 30px'}}>


                            <Grid item container xs={12} sm={12} md={12} lg={6} xl={6} direction='column'
                                  justify="space-between" className={useStylesBlock3.icontext}
                                  alignItems="flex-start">
                                <Grid item><img src={icon1}/></Grid>
                                <Grid item className={useStylesBlock3.block3__content__title}> As the home of
                                    professional trading
                                </Grid>
                                <Grid item className={useStylesBlock3.text}>We understand the unique and complex
                                    requirements of professionals</Grid>

                            </Grid>
                            <Grid item container xs={12} sm={12} md={12} lg={6} xl={6} direction='column'
                                  justify="space-between" className={useStylesBlock3.icontext}
                                  alignItems="flex-start">
                                <Grid item><img src={icon2}/></Grid>
                                <Grid item className={useStylesBlock3.block3__content__title}> Wellet great secure
                                </Grid>
                                <Grid item className={useStylesBlock3.text}>Corporate accounts and professional traders
                                    can take advantage, understand
                                    the unique and complex</Grid>

                            </Grid>
                            <Grid item className={useStylesBlock3.divider}></Grid>

                        </Grid>


                        <div item className={useStylesBlock3.block3button}>Read more</div>


                    </Grid>


                    <Grid item container={true} direction="column" xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Grid item>Perfect Wallet</Grid>
                        <Grid item><img className={useStylesBlock3.imgagphoneBlock3} src={iphoneblock3}/></Grid>

                    </Grid>

                </Grid>
                <Grid item container xs={12} sm={12} md={12} lg={2} xl={2} style={{height:'60%', }} direction="column" justify="center" alignItems="flex-end">

                    <Grid item container={true}  xs={12} sm={12} md={12} lg={12} xl={12} className={useStylesBlock3.displaynone}   >

                        <Grid item container={true} direction="column" justify="center" alignItems="flex-end" xs={0} sm={0} md={12} lg={12} xl={12} style={{marginLeft:'-40px'}}>
                            <Grid item className={useStylesBlock3.dot__rowsbottomn}><img src={pingb}/></Grid>
                            <Grid item className={useStylesBlock3.dot__rowsbottomn}><img src={pingb}/></Grid>
                            <Grid item className={useStylesBlock3.dot__rowsbottomn}><img src={pingg}/></Grid>
                            <Grid item className={useStylesBlock3.dot__rowsbottomn}><img src={pingb}/></Grid>
                            <Grid item className={useStylesBlock3.dot__rowsbottomn}><img src={pingb}/></Grid>
                            <Grid item className={useStylesBlock3.dot__rowsbottomn}><img src={pingb}/></Grid>
                            <Grid item> <Link
                                activeClass="active"
                                to="section4"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                <img src={rowsbottomblack}
                                     style={{ cursor: 'pointer'}}/>
                            </Link> </Grid>

                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </Grid>
    )
}


export default Block3;
