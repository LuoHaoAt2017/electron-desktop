const { app, BrowserWindow } = require('electron');

const createWindow = () => {
  new BrowserWindow({
    width: 800,
    height: 600
  }).loadFile('index.html');
}

app.whenReady().then(function() {
  createWindow();

  app.on('activate', function() {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});
.0
app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') {
    app.quit();
  }
})