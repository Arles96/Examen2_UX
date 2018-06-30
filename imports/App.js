import React, {Component} from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import Profile from './components/Profile'
import AddMessage from './components/AddMessage'
import {Meteor} from 'meteor/meteor'
import ListMessage from './components/ListMessage'

export default class App extends Component {

    constructor(){
        super()
        this.state = {
            user : null,
            list : [],
            public : 0,
            private : 0
        }
        this.handleSignInGoogle = this.handleSignInGoogle.bind(this)
        this.handleLogoutGoogle = this.handleLogoutGoogle.bind(this)
        this.AddMessage = this.AddMessage.bind(this)
        this.updateListMessages = this.updateListMessages.bind(this)
    }

    handleSignInGoogle(res){
        this.setState({
            user : res.profileObj
        })
    }

    handleLogoutGoogle() {
        this.setState({
            user : null
        })
    }

    
    AddMessage(e){
        e.preventDefault()
        let data = {
            title : e.target.titulo.value,
            message : e.target.mensaje.value,
            state : e.target.estado.value,
            email : this.state.user.email
        }
        Meteor.call('addMessage', data, (err, res)=> {
            if (err) {
                console.log(err)
                alert('Error al agregar el mensaje')
            }else {
                console.log(res)
                alert('Se agrego un mensaje')
                this.updateListMessages()
            }
        })
    }

    updateListMessages(){
        if (this.state.user){
            Meteor.call('listMessage', this.state.user.email, (err, res) => {
                if (err){
                    console.log(err)
                }else {
                    this.setState({
                        list : res.list,
                        public : res.public,
                        private : res.private
                    })
                }
            })
        }
    }
    
    handleContentUser(){
        if (this.state.user){
            return (
                <div>
                    <Profile 
                        user={this.state.user}
                        public={this.state.public} 
                        private={this.state.private} 
                    />
                    <hr/>
                    <AddMessage event={this.AddMessage} />
                    <hr/>
                    <ListMessage load={this.updateListMessages} list={this.state.list} />
                </div>
            )
        }
    }

    render(){
        return (
            <div>
                <Navbar user={this.state.user} />
                <Home />
                <Login  
                    user={this.state.user}
                    login={this.handleSignInGoogle}
                    logout={this.handleLogoutGoogle}
                />
                <hr/>
                {this.handleContentUser()}
                <footer className="bg-dark mt-5 footer" >
                    <h4 className="author">By Arles cerrato</h4>
                </footer>
            </div>
        )
    }
}