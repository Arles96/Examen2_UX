import React, {Component} from 'react'

export default class Profile extends Component {

    render(){
        return (
            <div id="perfil" className="container profile animated bounceInDown" >
                <h2 className="text-center" > Perfil </h2>
                <div className="row">
                    <div className="col-3">
                        <img className="img-profile" src={this.props.user.imageUrl} alt="foto"/>
                    </div>
                    <div className="col-9" >
                        <br/>
                        <p><b>Nombre:</b> {this.props.user.name}</p>
                        <br/>
                        <p><b>Email</b>: {this.props.user.email}</p>
                        <br/>
                        <p><b>Mensajes Publicos:</b> {this.props.public}</p>
                        <br/>
                        <p><b>Mensajes Privados:</b> {this.props.private} </p>
                    </div>
                </div>
            </div>
        )
    }

}