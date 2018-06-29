import React, {Component} from 'react'
import Menu from './Menu'

export default class Navbar extends Component {

  constructor(){
    super()
    this.state = {
      menu : false
    }
    this.handleStateMenu = this.handleStateMenu.bind(this)
    this.handleMenu = this.handleMenu.bind(this)
  }

  handleStateMenu(){
    this.setState({
      menu : !this.state.menu
    })
  }

  handleMenu(){
    if (this.state.menu) {
      return (
        <Menu closed={this.handleStateMenu} user={this.props.user} />
      )
    }
  }

  render(){
    return(
      <nav className="navbar navbar-dark bg-dark row navbar-forex position-fixed" >
        <div className="col-6" >
          <a className="navbar-brand" >ForeX</a>
        </div>
        <div className="col-6 content-button" > 
          <i onClick={this.handleStateMenu} className="fas fa-bars button-menu"></i>
        </div>
        {this.handleMenu()}
      </nav>
    )
  }

}