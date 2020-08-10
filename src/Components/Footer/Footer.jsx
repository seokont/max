import React from "react";
import style from './Footer.module.css';
import Grid from "@material-ui/core/Grid";
import logo from './../../Assets/logo.svg';
import phone from './../../Assets/icon-phone.svg';
import map from './../../Assets/icon-map.svg';
import {NavLink} from "react-router-dom";


const Footer = () => {


    return (
        <Grid container  xs={12} sm={12} md={12} lg={12} xl={12} className={style.footer__footer}>
            <Grid item container xs={12} sm={12} md={12} lg={12} xl={12}
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                  className={style.footer}>

                <Grid item container xs={12} sm={12} md={12} lg={8} xl={8}
                      direction="row"
                      justify="flex-start"
                      alignItems="center">
                    <Grid item><img src={logo}/></Grid>
                    <Grid item>
                        <div className={style.hr}>
                            <NavLink className={style.li} to='#'>Каталог</NavLink>
                            <NavLink className={style.li} to='#'>Доставка</NavLink>
                            <NavLink className={style.li} to='#'>Оплата</NavLink>
                            <NavLink className={style.li} to='#'>Контакты</NavLink>
                            <NavLink className={style.li} to='#'>О галереи</NavLink>
                        </div>
                    </Grid>
                </Grid>


                <Grid item container xs={12} sm={12} md={4} lg={4} xl={4} direction="row"
                      justify="space-between"
                      alignItems="center">
                    <Grid item className={style.phone}>
                        <img src={phone}/> +7 (495) 555-55-55
                    </Grid>
                    <Grid item className={style.adress}>
                        <img src={map}/> г. Москва, ул. Расплетина, 24
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )


}


export default Footer;