import React, {Component} from 'react'
import {GoogleLogin, GoogleLogout} from 'react-google-login'

export default class Login extends Component {

    handleButton(){
        if (this.props.user) {
            return (
                <GoogleLogout 
                    clientId={'399776468822-sqok0gdsbdrvpg7d2lurj7ves9gh21gf.apps.googleusercontent.com'}
                    onLogoutSuccess={this.props.logout}
                />
            )
        } else {
            return (
                <GoogleLogin
                    clientId={'399776468822-sqok0gdsbdrvpg7d2lurj7ves9gh21gf.apps.googleusercontent.com'}
                    onSuccess={this.props.login}
                    onFailure={this.props.failure}
                />
            )
        }
    }

    render(){
        return (
            <div id="autenticacion" className="login">
                <h2 className="text-center m-5" >Autenticación</h2>
                <p>
                    Para poder usar esta aplicación debe de iniciar sesión con 
                    los siguiente proveedor:
                </p>
                <div className="text-center m-5">
                    {this.handleButton()}
                </div>
            </div>
        )
    }

}