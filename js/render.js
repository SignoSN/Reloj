

const BrowserWindow = require('electron').remote.BrowserWindow;

const path = require('path');

const reloj = document.getElementById('reloj');

reloj.addEventListener("click", function() {
  
  const tempoDir = path.join('file://', __dirname, 'tempo.html');
  let win = new BrowserWindow({
    width: 700,
    height: 320,
    frame: false
  });
  win.on("close", function() {
    return win = null;
  });
  win.loadURL(tempoDir);
  win.show();
});
