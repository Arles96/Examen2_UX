import { Meteor } from 'meteor/meteor'
import {Message} from '../api/collections/Message'

Meteor.startup(() => {
  // code to run on server at startup
})

Meteor.methods({
  addMessage(data){
    Message.insert(data)
    return true
  },
  listMessage(email2) {
    let listM = Message.find({state : "publico"}).fetch()
    listM.concat(Message.find({email : email2}).fetch())
    let privateM = Message.find({state : "privado", email : email2}).fetch().length
    let publicM = Message.find({state : "publico", email : email2}).fetch().length
    let data = {
      list : listM,
      private : privateM,
      public : publicM
    }
    return data
  }
})