import React from "react";
import Grid from "@material-ui/core/Grid";


import {Field, Form, reduxForm} from "redux-form";
import {compose} from "redux";
import {authAdminThunkCreator, watcherSagaMiddleware, axios, axiosik, getFormData} from "../../Redux/auth-reducer";
import Login from "./Login";
import {connect} from "react-redux";


class Logincontainer extends React.Component {

    constructor(props) {
        super(props);


    }

    onSubmit = (formData) => {

        this.props.getFormData(formData)
        localStorage.setItem(
            'token', this.props.authadminToken
        );

    }

    render() {
        return (<Login onSubmit={this.onSubmit} authadminlogin={this.props.authadminlogin}
                       authadminToken={this.props.authadminToken}/>)
    }
}


let mapStateToProps = (state) => ({
    authadminToken: state.AuthAdmin.token,
    authadminlogin: state.AuthAdmin.login,
    authadminpassword: state.AuthAdmin.password,

})


export default connect(mapStateToProps, {getFormData})(Logincontainer);



