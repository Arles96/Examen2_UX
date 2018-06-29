import React, {Component} from 'react'

export default class Menu extends Component {

    constructor(){
        super()
        this.handleUser = this.handleUser.bind(this)
    }

    handleUser(){
        if (this.props.user){
            return (
                <div>
                    <li className="nav-item link-menu" >
                        <a href="#perfil" className="nav-link">Perfil</a>
                    </li>
                    <hr className="hr" />
                    <li className="nav-item link-menu" >
                        <a  href="#mensaje" className="nav-link">Nuevo Mensaje</a>
                    </li>
                    <hr className="hr" />
                    <li className="nav-item link-menu" >
                        <a  href="#muro" className="nav-link">Mensajes</a>
                    </li>
                    <hr className="hr" />
                    <li onClick={this.props.event2} className="nav-item link-menu" >
                        <a className="nav-link">SignOut</a>
                    </li>
                </div>
            )
        }else {
            return (
                <li className="nav-item link-menu" >
                    <a href="#autenticacion" className="nav-link">Autenticación</a>
                </li> 
            )
        }
    }

    render(){
        return (
            <div className="animated fadeInRight menu bg-dark p-4" >
                <div className="text-right" >
                    <i onClick={this.props.closed} className="exit fas fa-times"></i>
                </div>
                <ul className="nav flex-column nav-color2">
                    <li className="nav-item link-menu" >
                        <a href="#Home" className="nav-link">Home</a>
                    </li>
                    <hr className="hr" />                   
                    {this.handleUser()}
                </ul>
            </div>
        )
    }

}