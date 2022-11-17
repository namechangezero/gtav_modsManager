const fs = require("fs")
const { app, BrowserWindow } = require('electron')
const path = require('path')

window.onload = ()=>{

    document.getElementById("howToUse").onclick = ()=>{
        window.open("guide.html")
    }

}

