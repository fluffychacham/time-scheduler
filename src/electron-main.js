const { app, BrowserWindow } = require('electron');

function createWindow(){
    let win = new BrowserWindow({
        width: 1080,
        height: 1920,
        minWidth: 1080,
        minHeight: 1920
    });

    win.webContents.openDevTools();
    win.setMenu(null);
    win.loadFile('index.html');
}

app.on('ready', createWindow);