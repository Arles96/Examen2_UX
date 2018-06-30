import React, { Component } from 'react'

export default class Message extends Component {

    render(){
        return(
            <div className="container-fluid text-center" >
                    <div className="card">                    
                        <div className="card-body">
                            <h5 className="card-title text-center">Titulo: {this.props.doc.title}</h5>
                            <div className="container text-center" >
                                <i className="img-card fas fa-envelope-square"></i>
                            </div>
                            <p>Correo: {this.props.doc.email}</p>
                            <p>Estado: {this.props.doc.state}</p>
                            <br/>
                            <p>Mensaje: {this.props.doc.message}</p>
                        </div>
                    </div>
                    <br/>
                </div>
        )
    }

}