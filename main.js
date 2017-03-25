const electron = require("electron");
const app = electron.app;
const BroWin = electron.BrowserWindow;
const Menu = electron.Menu;
const url = require("url");
const path = require("path");

let mainWindow;

/*menu*/

/*menu*/

function createWindow(){
    mainWindow = new BroWin({
        width:470, 
        height:300
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

app.on("ready", createWindow)



app.on("window-all-closed", function(){
    if(process.platform !== "darwin"){
        app.quit();
    }
   
})

app.on("activate", function() {
    if(mainWindow === null) {
        createWindow();
    }
})