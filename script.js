import * as fs from '/Users/prayas gautam/Desktop/Full Stack End term project -1/node_modules/fs';


function getFile(filename) {
    const content = fs.readFileSync(filename,'utf-8').split('\n');
    console.log(content);
    document.getElementById('paragraph').innerText = content;
}

getFile('AliceInWonderland.txt');
