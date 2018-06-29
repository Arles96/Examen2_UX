import React, {Component} from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import Profile from './components/Profile'

export default class App extends Component {

    constructor(){
        super()
        this.state = {
            user : null,
            public : 0,
            private : 0
        }
        this.handleSignInGoogle = this.handleSignInGoogle.bind(this)
        this.handleLogoutGoogle = this.handleLogoutGoogle.bind(this)
    }

    handleSignInGoogle(res){
        this.setState({
            user : res.profileObj
        })
        console.log(this.state.user)
    }

    handleLogoutGoogle() {
        this.setState({
            user : null
        })
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
                {this.handleContentUser()}
            </div>
        )
    }
}