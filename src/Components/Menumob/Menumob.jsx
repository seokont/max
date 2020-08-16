import React from "react";
import style from "./Menumob.module.css";

import {makeStyles, useTheme} from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import rows from "../../Assets/rows.png";
import menulines from "./../../Assets/menulines.png";
import menuclose from "./../../Assets/menuclose.png";

import ModalMenu from "../ModalMenu/ModalMenu";
import MenuReducer, {actionmodalmenu} from "../../Redux/menu-reducer";
import {compose} from "redux";
import {connect} from 'react-redux';
import {NavLink} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    header: {
        width: '100%',
        maxWidth: "90%",
        margin: "0 auto",
        height: '139px',
        [theme.breakpoints.down('md')]: {
            height: 'auto',

        }

    },
    itemslanguage: {
        marginLeft: "0"
    },
    modalmenuEnable: {
        width: '100%',
        height: '1000vh',
        position: 'absolute',
        background: 'linear-gradient(135deg, #141d26 0%,#284c4c 100%)',
        display: "block",
        zIndex: '10000',
        top: '0',
        left: '0',
        transition: '.55s opacity, .55s visibility',
    },

    modalmenuDisable: {
        visibility: 'hidden',
        transition: '.55s opacity, .55s visibility',
    },
    closeicon: {
        width: '40px',
        cursor: 'pointer',
        margin: '30px 80%',
        position:'relative'
    },
    menuicon: {
        width: '40px',
        cursor: 'pointer'

    },


}));


const Menumob = (props) => {


    let getModalMenuEnable = () => {
        props.actionmodalmenu(true)
    }
    let getModalMenuDisable = () => {
        props.actionmodalmenu(false)
    }

    // let clickModalMenu = () =>{
    //     return ()
    // }
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const styles = useStyles();

    return (<>

            {props.statusmenu === true ? <div className={styles.modalmenuEnable}>
                <div style={{color: '#fff', position: 'fixed',}}>
                    <div>
                        <img src={menuclose} className={styles.closeicon} onClick={getModalMenuDisable}/>
                        <div>
                            <div className={style.header__nav__v}>

                                <div style={{padding:'10px 0'}}><NavLink onClick={getModalMenuDisable}  className={style.nav__link__v}
                                              to='/messager'>Messager</NavLink></div>
                                <div style={{padding:'10px 0'}}><NavLink onClick={getModalMenuDisable} className={style.nav__link__v}
                                              to='/wallet'>Wallet</NavLink></div>
                                <div style={{padding:'10px 0'}}><NavLink onClick={getModalMenuDisable} className={style.nav__link__v}
                                              to='/exchange'>Exchange</NavLink></div>
                                <div style={{padding:'10px 0'}}><NavLink onClick={getModalMenuDisable} className={style.nav__link__v}
                                              to='/features'>Features</NavLink></div>
                                <div style={{padding:'10px 0'}}><NavLink onClick={getModalMenuDisable} className={style.nav__link__v}
                                              to='/about'>Company</NavLink></div>
                                <div style={{padding:'10px 0'}}><NavLink onClick={getModalMenuDisable} className={style.nav__link__v}
                                              to='/contacts'>Contact</NavLink></div>

                            </div>
                        </div>
                    </div>
                </div>
            </div> : <div className={styles.modalmenuDisable}>
                <div style={{color: '#fff', position: 'fixed',}}></div>
            </div>}

</>

    )
}


let mapStateToProps = (store) => ({

    statusmenu: store.Menumodal.statusMenu,


})

export default compose(
    connect(mapStateToProps, {actionmodalmenu}),
)(Menumob);


