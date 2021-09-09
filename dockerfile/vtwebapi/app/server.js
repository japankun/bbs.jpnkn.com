const express = require('express');
const app = express();
const VoiceText = require('voicetext');

app.use(express.static('public'));

app.get('/:apikey/:text/:volume/:speed/:speaker/', function(request, response) {
  
  var voice = new VoiceText(request.params.apikey);
  voice.format = "mp3";
  voice.speaker(request.params.speaker);
  voice.volume(request.params.volume);
  voice.speed(request.params.speed);
  voice.speak(request.params.text, function(err, buf) {
    response.writeHead(200, {
      "Content-Type": "audio/mpeg",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "max-age=86400",
      "Expires": "Mon, 21 Jul 2025 05:00:00 GMT",
    });
  
    response.end(buf);
    
  });
  
});

const listener = app.listen(80, function() {
  console.log('Your app is listening on port ' + 80);
});