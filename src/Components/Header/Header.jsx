import React from "react";
import style from './Header.module.css';
import Grid from "@material-ui/core/Grid";
import logo from './../../Assets/logo.svg';
import {NavLink} from "react-router-dom";


const Header = () => {


    return (
        <Grid container className={style.headerfirst}>

            <Grid item container xs={12}
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                  className={style.header}>

                <Grid item container xs={12} sm={12} md={8} lg={8} xl={8}
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
                            <NavLink className={style.li} to='#'>О Галереи</NavLink>
                        </div>
                    </Grid>
                </Grid>

                <Grid item container xs={12} sm={12} md={4} lg={4} xl={4} direction="row"
                      justify="flex-end"
                      alignItems="center">
                    <Grid item><input placeholder='Поиск по названию картинки'/>
                        <button>Найти</button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )


}


export default Header;