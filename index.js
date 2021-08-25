var twilio = require('twilio');

// Find your account sid and auth token in your Twilio account Console.
var client = new twilio('ACe62dc4a18a5400003ac3e4aaa97363de', 'bbef30ce0d80aae59148a9f144181fe3');

// Send the text message.
client.messages.create({
  to: '+17575305870',
  from: '+14133442053',
  body: 'Hi Daniel, this is the Donald Trump 2024 reelection team. Can we count on your vote to get Big Daddy T R U M P back in the White House? Reply with "YES" if you cool or "NO" if you like smelling Joe Biden\'s stale commie farts.'
});