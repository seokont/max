import React from "react";
import style from './Content.module.css';
import Grid from "@material-ui/core/Grid";

import g from './../../Assets/g.svg';
import {connect} from "react-redux";
import {authResultCodeFalse, authThunk} from "../../Reducer/shop-reducer";


class Content extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userId: parseInt(localStorage.getItem('userId')),
            productIdOne: '',
            productIdTwo: '',
            productIdTree: '',
            productIdFor: '',
        }
    }

// const state={
//     userId:localStorage.getItem('userId')
// }


    getCartApiTrue(productId) {
        this.props.authThunk()
        let parser = parseInt(localStorage.getItem('userId'))
        switch (productId) {
            case 1:
                localStorage.setItem('productIdOne', productId);
                this.setState((state, props) => {
                    return {productIdOne: parseInt(localStorage.getItem('productIdOne'))};
                });

                if (parser !== NaN) {
                    this.setState({userId: parser})
                }
                this.setState({userId: this.props.shopreducer})

                break;
            case 2:
                localStorage.setItem('productIdTwo', productId);
                this.setState((state, props) => {
                    return {productIdTwo: parseInt(localStorage.getItem('productIdTwo'))};
                });

                if (parser !== NaN) {
                    this.setState({userId: parser})
                }
                this.setState({userId: this.props.shopreducer})
                break;
            case 3:
                localStorage.setItem('productIdTree', productId);
                this.setState((state, props) => {
                    return {productIdTree: parseInt(localStorage.getItem('productIdTree'))};
                });

                if (parser !== NaN) {
                    this.setState({userId: parser})
                }
                this.setState({userId: this.props.shopreducer})
                break;
            case 4:
                localStorage.setItem('productIdFor', productId);
                this.setState((state, props) => {
                    return {productIdFor: parseInt(localStorage.getItem('productIdFor'))};
                });

                if (parser !== NaN) {
                    this.setState({userId: parser})
                }
                this.setState({userId: this.props.shopreducer})
                break;
            default:
                alert("Нет таких значений");
        }


    }

    componentDidUpdate(prevProps, prevState, snapshot) {
    }

    componentDidMount() {
    }


    getCartApiFalse = (productId) => {


        switch (productId) {
            case 1:
                localStorage.setItem('userId', null)
                this.setState(
                    {
                        userId: parseInt(localStorage.getItem('userId'))
                    }
                )
                localStorage.setItem('productIdOne', null);
                this.setState(
                    {
                        productIdOne: null
                    }
                )
                break;
            case 2:
                localStorage.setItem('userId', null)
                this.setState(
                    {
                        userId: parseInt(localStorage.getItem('userId'))
                    }
                )
                localStorage.setItem('productIdTwo', null);
                this.setState(
                    {
                        productIdTwo: null
                    }
                )
                break;
            case 3:
                localStorage.setItem('userId', null)
                this.setState(
                    {
                        userId: parseInt(localStorage.getItem('userId'))
                    }
                )
                localStorage.setItem('productIdTree', null);
                this.setState(
                    {
                        productIdTree: null
                    }
                )
                break;
            case 4:
                localStorage.setItem('userId', null)
                this.setState(
                    {
                        userId: parseInt(localStorage.getItem('userId'))
                    }
                )
                localStorage.setItem('productIdFor', null);
                this.setState(
                    {
                        productIdFor: null
                    }
                )
                break;
            default:
                alert("Нет таких значений");
        }


    }


    buttonСhangeAdd(item) {
        return parseInt(localStorage.getItem(item))
    }

    render() {

        return (<Grid container xs={12} className={style.mainmain}>

                <Grid item container xs={12} sm={12} md={12} lg={12} xl={12}
                      direction="row"
                      justify="center"
                      alignItems="center"
                      className={style.main}>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={style.text}><h1>Картины эпохи Возрождения</h1></Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} container
                          direction="row"
                          justify="space-between"
                          alignItems="center">

                        {/*Начало контейнеар с гридами*/}


                        {this.props.itemproducts.map((product) =>
                            <Grid key={product.id} item xs={12} sm={6} md={4} lg={3} xl={3} container
                                  direction="row"
                                  justify="space-between"
                                  alignItems="center">
                                <Grid item container className={style.block} xs={12} sm={12} md={12} lg={12} xl={12} >
                                    <Grid item container className={style.block__block}
                                          direction="row"
                                          justify="space-between"
                                          alignItems="center">
                                        <Grid item className={style.img}><img src={product.images}/></Grid>
                                        <Grid item  style={{height:'100px'}} className={style.hed}><h2>{product.title}</h2></Grid>
                                        <Grid item container direction='row' xs={12}
                                              justify="space-between"
                                              alignItems="center" className={style.body}>
                                            <Grid item container direction="column" xs={6}
                                                  justify="space-between"
                                                  alignItems="center">
                                                <Grid item className={style.priceold}>{product.priceold}</Grid>
                                                <Grid item className={style.pricenew}>{product.pricenew}</Grid>
                                            </Grid>
                                            <Grid item xs={6}>


                                                {this.buttonСhangeAdd('productIdOne') === product.id || this.buttonСhangeAdd('productIdTwo') === product.id
                                                || this.buttonСhangeAdd('productIdTree') === product.id || this.buttonСhangeAdd('productIdFor') === product.id ?
                                                    <button type="submit" id={product.id} onClick={() => {
                                                        this.getCartApiFalse(product.id)
                                                    }}
                                                            className={style.addCart}>
                                                        <img src={g}/> В корзине</button> :
                                                    <button type="submit" id={product.id} onClick={() => {
                                                        this.getCartApiTrue(product.id)
                                                    }}
                                                            className={style.add}>Купить</button>}
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        )}
                    </Grid>
                </Grid>
            </Grid>
        )
    }


}


let mapStateToProps = (state) => {

    return {
        shopreducer: state.reducerFromShopReducer.userId,
        itemproducts: state.reducerFromShopReducer.itemproduct

    }
}


export default connect(mapStateToProps, {
    authThunk, authResultCodeFalse
})(Content);