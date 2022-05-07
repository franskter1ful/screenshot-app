const { app, BrowserWindow, Menu } = require('electron');

let myWindow;

function createMyWindow() {
    myWindow = new BrowserWindow({
        titleBarStyle: 'customBUttonsOnHover',
        transparent: false,
        //width: 800,
        //height: 600, 
        webPreferences: {
            nodeIntegration: true,
            //contextIsolation: false
            //enableRemoteModule: true
        },
        frame: true,
    });
    
    process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';

    //if (process.env.DEBUG) {
        // myWindow.loadFile('index.html');
        //myWindow.loadURL(`file://${__dirname}/build/index.html`);
        myWindow.loadURL(`http://localhost:3000`);
    //} else {
    //    myWindow.loadURL(`file://${__dirname}/build/index.html`);
    //}
    
    myWindow.on('closed', () => {
        myWindow = null;
    });
}

app.on('ready', createMyWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'win32') {
        app.quit();
    }
});

app.on('activate', () => {
    if (win === null) {
        createMyWindow();
    }
});




