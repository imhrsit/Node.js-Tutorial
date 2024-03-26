const fs = require("fs");
const os = require("os");

//console.log(os.cpus().length);

//synchronous call (Blocking Req)
fs.writeFileSync('./test.txt', 'Hey there!');

// console.log('1');
// const result = fs.readFileSync('./contacts.txt', 'utf-8');
// console.log(result);
// console.log('2');

//asynchronous call (Non-Blocking Req)
fs.writeFile('./test2.txt', 'Hello there Async!', (err) => {});

// console.log('1');
// fs.readFile('./contacts.txt', 'utf-8', (err, result) => {
//     if(err) {
//         console.log('Error', err);
//     } else {
//         console.log(result);
//     }
// })
// console.log('2');
// console.log('3');
// console.log('4');

// fs.appendFileSync("./test.txt", `${Date.now()} Hey Harsh!\n`);

// fs.copyFileSync('./test.txt', './copy.txt');
//fs.unlinkSync('./copy.txt');
// console.log(fs.statSync('./test.txt'));
//fs.mkdirSync('my-docs/a/b', {recursive: true});