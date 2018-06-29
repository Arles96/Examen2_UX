import React, {Component} from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'

export default class App extends Component {

    constructor(){
        super()
        this.state = {
            user : null
        }
        this.handleSignInGoogle = this.handleSignInGoogle.bind(this)
        this.handleLogoutGoogle = this.handleLogoutGoogle.bind(this)
    }

    handleSignInGoogle(res){
        console.log(res.profileObj)
        this.setState({
            user : res.profileObj
        })
    }

    handleLogoutGoogle() {
        this.setState({
            user : null
        })
    }

    render(){
        return (
            <div>
                <Navbar />
                <Home />
                <Login  
                    user={this.state.user}
                    login={this.handleSignInGoogle}
                    logout={this.handleLogoutGoogle}
                />
            </div>
        )
    }
}