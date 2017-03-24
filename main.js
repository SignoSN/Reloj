const electron = require("electron");
const app = electron.app;
const BroWin = electron.BrowserWindow;
const url = require("url");
const path = require("path");

let mainWindow;

function createWindow(){
    mainWindow = new BroWin({
        width:450, 
        height:200,
        frame: false
    });
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, "index.html"),
        protocol: "file",
        slashes: true
    }));

    mainWindow.on("close", function(){
        mainWindow = null;
    });
}

app.on("ready", createWindow);

app.on("window-all-closed", function(){
    if(process.platform !== "darwin"){
        app.quit();
    }
});

app.on("activate", function(){
    if(mainWindow === null){
        createWindow();
    }
});
