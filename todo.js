const jsonfile = require('jsonfile');

const file = 'data.json'


if (process.argv[2] === "add"){
    //read the file first
    jsonfile.readFile(file, (err, obj) => {
        //error check
        if (err){
            console.log("error at read file");
        }
        //manipulate object
        obj["todoItems"].push([process.argv[3], " "]);
        //write changes to file
        jsonfile.writeFile(file, obj, (err) => {
            if (err){
                console.log(err)
            }
        });
    });
} else if (process.argv[2] === "show"){
    //read the file
    jsonfile.readFile(file, (err, obj) =>{
        for (let i = 1; i <= obj["todoItems"].length; i++){
            console.log(`${i}. [${obj["todoItems"][i -1][1]}] - ${obj["todoItems"][i - 1][0]}`)
        }
    });
} else if (process.argv[2] === "done"){
    //Show stuff
    jsonfile.readFile(file, (err, obj) =>{
         if (err){
            console.log("error at read file");
        }
        //manipulate object
        obj["todoItems"][process.argv[3] - 1][1] = "x";
        //write changes to file
        jsonfile.writeFile(file, obj, (err) => {
            if (err){
                console.log(err)
            }
        });

        for (let i = 1; i <= obj["todoItems"].length; i++){
            console.log(`${i}. [${obj["todoItems"][i -1][1]}] - ${obj["todoItems"][i - 1][0]}`)
        }
    });
} else {
    console.log("input: node todo.js [show/add/done] [item number]")
}



// console.log("works!!", process.argv[2]);

// var commandType = process.argv[2];

// console.log("Your command was: "+commandType);



;