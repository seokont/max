import React, {createRef} from "react";
import Grid from "@material-ui/core/Grid";
import {connect} from "react-redux";

import {Field, Form, reduxForm} from "redux-form";
import {compose} from "redux";
import {authAdminThunkCreator} from "../../Redux/auth-reducer";


class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state={token:''}
    }

    componentDidMount() {

        // let login='admin';
        // let password='admin';
        // this.props.authAdminThunkCreator(login, password)

        const tokenValue = localStorage.getItem('token');

console.log(tokenValue)
        this.setState({  token:tokenValue });


    }


    render() {

        return (<div>

            <Grid container
                  direction="column"
                  justify="space-between"
                  alignItems="stretch">
                <Grid item container xs={12} sm={12} md={12} lg={12} xl={12}
                >
                    {this.state.token}

                    <Form onSubmit={this.props.handleSubmit}>
                        <div><Field type={'text'} name={'login'} component={'input'}/></div>
                        <div><Field type={'password'} name={'password'} component={'input'}/></div>
                        <div><button>Отправить</button></div>



                    </Form>
                </Grid>
            </Grid>

        </div>)
    }


}





export default compose(
    reduxForm({form: 'login'}),
)(Login);



