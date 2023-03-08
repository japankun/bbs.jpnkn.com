onmessage = function(e) {
  console.log('[Worker] Message listener thread Start.');
  setInterval(postMessage, 500, "Worker: Message Check.");
}
