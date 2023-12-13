const fs = require('fs');

const pathToFile = "1-counter.md";

fs.readFile(pathToFile,(err,data)=>{
    console.log(data.toString());
})

const allText = fs.readFileSync(pathToFile, {encoding: 'utf8'})
console.log(allText);

for(let i = 0; i<100;i++){
    console.log("..................EXPENSIVE OPERATION...............................");
}