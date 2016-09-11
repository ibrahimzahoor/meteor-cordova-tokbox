import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});

// Meteor.startup(function() {

  if(Meteor.isCordova) {

    // Sign up for an OpenTok API Key at: https://tokbox.com/signup
    // Then generate a sessionId and token at: https://dashboard.tokbox.com
    var apiKey = "45643482"; // INSERT YOUR API Key
    var sessionId = "1_MX40NTY0MzQ4Mn5-MTQ3MzYzNTA3Mjk4MX5EVHlTUHMybVFiM3pPb0V1TzY0VDhQZzR-UH4"; // INSERT YOUR SESSION ID
    var token = "T1==cGFydG5lcl9pZD00NTY0MzQ4MiZzaWc9ZjcyZTNkMTYxMjkxOWI5NzJkNDg2NjRmZjQyMDgyYjI4OThhYjM0NjpzZXNzaW9uX2lkPTFfTVg0ME5UWTBNelE0TW41LU1UUTNNell6TlRBM01qazRNWDVFVkhsVFVITXliVkZpTTNwUGIwVjFUelkwVkRoUVp6Ui1VSDQmY3JlYXRlX3RpbWU9MTQ3MzYzNTEwMSZub25jZT0wLjc4NTgwMzgyMTE3MDcwMjYmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTQ3MzYzODcwMA=="; // INSERT YOUR TOKEN

    console.log("TB", TB);
    console.log("window", window);
    console.log("message");


    // Very simple OpenTok Code for group video chat
    var publisher = TB.initPublisher('myPublisherDiv');

    var session = TB.initSession( apiKey, sessionId );
    session.on({
    'streamCreated': function( event ){
        var div = document.createElement('div');
        div.setAttribute('id', 'stream' + event.stream.streamId);
        document.body.appendChild(div);
        session.subscribe( event.stream, div.id, { subscribeToAudio: true } );
    }
    });
    session.connect(token, function(){
      session.publish( publisher );
    });
  }
// });
