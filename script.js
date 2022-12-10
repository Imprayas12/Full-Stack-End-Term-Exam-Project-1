// import * as fs from '/Users/prayas gautam/Desktop/Full Stack End term project -1/node_modules/fs';

var globalData;
function getFile(filename) {
    const xhr = new XMLHttpRequest();
    xhr.onload = function() {
        globalData = this.responseText;
        console.log(globalData);
        document.getElementById('card-body').innerHTML = this.responseText;
    }
    xhr.open("GET",`${filename}`,true);
    xhr.send();
}



