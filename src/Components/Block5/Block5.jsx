import React from "react";
import style from "./Block5.module.css";
import iphoneblock5 from "../../Assets/iphone-block5.png";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import readmore from "../../Assets/readmore.png";
import rea from "../../Assets/readmore.png";
import rowsgreeen from "../../Assets/rows-green.png";
import {Link} from "react-scroll";
import rowsbottom from "../../Assets/rows-bottom.png";
import rowsbottomblack from "../../Assets/rows-bottom-black.png";
import pingb from "../../Assets/pingb.png";
import pingg from "../../Assets/pingg.png";


const StylesBlock5 = makeStyles((theme) => ({
    container: {
        width: '100%',
        maxWidth: "90%",
        margin: "0 auto",

        padding: '80px 0 80px 0',

        [theme.breakpoints.between('lg', 'xl')]: {

            height: 'auto',
        },
        [theme.breakpoints.between('md', 'lg')]: {

            height: 'auto',
        },
        [theme.breakpoints.between('sm', 'md')]: {

            height: 'auto',
        },
        [theme.breakpoints.between('xs', 'sm')]: {

            height: 'auto',
        },


    },
    intro: {
        backgroundColor: 'white'
    },
    iphoneblock5: {

        [theme.breakpoints.between('lg', 'xl')]: {
            marginTop: '-250px',
            width: '100%',
            height: 'auto',
        },
        [theme.breakpoints.between('md', 'lg')]: {
            marginTop: '-250px',
            width: '100%',
            height: 'auto',
        },
        [theme.breakpoints.between('sm', 'md')]: {
            marginTop: '-250px',
            width: '100%',
            height: 'auto',
        },
        [theme.breakpoints.between('xs', 'sm')]: {
            marginTop: '-250px',
            width: '100%',
            height: 'auto',

        },


    },
    block5__header__text: {
        fontFamily: 'Century Gothic',
        fontSize: '40px',
        fontWeight: 'bold',
        color: '#1c2631',
        width: '70%',
        margin: '0 auto',
        textAlign: 'center'
    },
    block5__subtitle: {
        fontFamily: 'HelveticaNeueCyr-Roman',
        color: '#929ba4',
        fontSize: '21px',
        lineHeight: '34px',
        textAlign: 'center'

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

const Block5 = () => {
    const stylesForBlock5 = StylesBlock5();
    return (

        <Grid container={true} className={stylesForBlock5.intro} xs={12} sm={12} md={12} lg={12} xl={12}>
            <Grid item container xs={12} sm={12} md={12} lg={12} xl={12}>
                <Grid item container={true} xs={12} sm={12} md={12} lg={11} xl={11}
                      justify="center"
                      alignItems="center" className={stylesForBlock5.container} id='section5'>
                    <grid item><img className={stylesForBlock5.iphoneblock5} src={iphoneblock5}/></grid>

                    <Grid item className={stylesForBlock5.block5__header__text}>Advanced features
                        for professionals and institutions
                    </Grid>
                    <Grid item className={stylesForBlock5.block5__subtitle}>We understand the unique and complex
                        requirements of professionals
                    </Grid>


                </Grid>
                <Grid item container xs={12} sm={12} md={12} lg={1} xl={1}>


                    <Grid item container={true}  xs={12} sm={12} md={12} lg={12} xl={12} className={stylesForBlock5.displaynone}   >

                        <Grid item container direction="column"style={{marginLeft:'-15px'}}
                              justify="center"
                              alignItems="center" >
                            <Grid item className={stylesForBlock5.dot__rowsbottomn}><img src={pingb}/></Grid>
                            <Grid item className={stylesForBlock5.dot__rowsbottomn}><img src={pingb}/></Grid>
                            <Grid item className={stylesForBlock5.dot__rowsbottomn}><img src={pingb}/></Grid>
                            <Grid item className={stylesForBlock5.dot__rowsbottomn}><img src={pingb}/></Grid>
                            <Grid item className={stylesForBlock5.dot__rowsbottomn}><img src={pingg}/></Grid>
                            <Grid item className={stylesForBlock5.dot__rowsbottomn}><img src={pingb}/></Grid>
                            <Grid item >  <Link
                                activeClass="active"
                                to="section6"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                <img src={rowsbottomblack} style={{ cursor:'pointer'}}/>
                            </Link> </Grid>

                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

        </Grid>
    )
}


export default Block5;

