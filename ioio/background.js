chrome.experimental.app.onLaunched.addListener(function() {
  chrome.appWindow.create('index.html', {
    width: 640,
    height: 480
  });
});
