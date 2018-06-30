import React, {Component} from 'react'
import Message from './Message'

export default class ListMessage extends Component {

    componentDidMount(){
        this.props.load()
    }

    render(){
        let messages = this.props.list.map((doc, i) => {
            return (<Message key={i} doc={doc} />)
        })
        return (
            <div id="muro" className="container" >
                <hr/>
                <br/>
                <h2 className="text-center" >Mensajes</h2>
                <br/>
                {messages}
            </div>
        )
    }
}