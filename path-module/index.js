const fs = require('fs');
const path = require('path');

const dataFolder = path.join(__dirname, "data");

if(!fs.existsSync(dataFolder)){
    fs.mkdirSync(dataFolder);
    console.log("Data folder created.");
}

const  filePath = path.join(dataFolder, "info.txt");

fs.writeFileSync(filePath, "This is some sample text.");
console.log("File created with sample text.");
 
const readContentFromFile = fs.readFileSync(filePath, "utf-8");
console.log("Content read from file:", readContentFromFile); 