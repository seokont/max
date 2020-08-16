import React from "react";
import style from "./Headerforpages.module.css";
import Grid from "@material-ui/core/Grid";
import logo from "./../../Assets/logo-black.png";

import menulines from "./../../Assets/menulines-black.png";
import MenuReducer, {actionmodalmenu} from "../../Redux/menu-reducer";

import {connect} from 'react-redux';
import {NavLink} from "react-router-dom";
import Menumob from "../Menumob/Menumob";

import './../Headerforpages/styleheaderforpages.css';


let lastScrollY = 0;
let ticking = false;


class Headerforpages extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScrolling, true);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScrolling);
    }

    naving = React.createRef();
    handleScrolling = () => {
        lastScrollY = window.scrollY;
        if (lastScrollY >= 50 && this.naving.current) {
            window.requestAnimationFrame(() => {
                this.naving.current.className = " headermyforpages header-prepare header-fixed";
            });
        } else if (lastScrollY < 50 && this.naving.current) {
            window.requestAnimationFrame(() => {
                this.naving.current.className = " header__for__pages";
            });
        }
    };
    getModalMenuEnable = () => {
        this.props.actionmodalmenu(true)
    }

    getModalMenuDisable = () => {
        this.props.actionmodalmenu(false)
    }

    render() {
        return (<div style={{backgroundColor:'#fff'}}>
                <header id="header" class='header__for__pages' ref={this.naving}>
                    <Grid container
                          direction="row"
                          justify="space-between"
                          alignItems="flex-end">
                        <Grid item
                              justify="flex-start"
                        >
                            <NavLink to='/н'>
                                <div className={style.headerlogo}><img src={logo}/></div>
                            </NavLink>
                        </Grid>
                        <Menumob/>
                        {/*<Grid item justify="flex-start"*/}
                        {/*      className={styles.itemslanguage}><Languages/></Grid>*/}
                        <Grid item>
                            <img src={menulines} class='iconion' onClick={this.getModalMenuEnable}
                                 width='40px'/>
                            <div class='my-menu'>
                                <div className={style.header__nav__div}>
                                    <nav className={style.header__nav}>
                                        <NavLink className={style.nav__link} to='/messager'>Messager</NavLink>
                                        <NavLink className={style.nav__link} to='/wallet'>Wallet</NavLink>
                                        <NavLink className={style.nav__link} to='/exchange'>Exchange</NavLink>
                                        <NavLink className={style.nav__link} to='/features'>Features</NavLink>
                                        <NavLink className={style.nav__link} to='/about'>Company</NavLink>
                                        <NavLink className={style.nav__link} to='/contacts'>Contact</NavLink>
                                    </nav>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </header>
            </div>
        );
    }
}


let mapStateToProps = (state) => ({
    statusmenu: state.Menumodal.statusMenu,
})

export default connect(mapStateToProps, {actionmodalmenu})(Headerforpages);











