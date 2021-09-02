var twilio = require('twilio');

// Find your account sid and auth token in your Twilio account Console.
var client = new twilio('ACe62dc4a18a5400003ac3e4aaa97363de', '15a5129f2a19a6e694c08895dc451d38');

// Send the text message.
client.messages.create({
  to: '+18043474652',
  from: '+14133442053',
  body: 'What\'s up Coom! Check out my codepen: https://codepen.io/grozzrox/pen/QWvXmox' 
});

