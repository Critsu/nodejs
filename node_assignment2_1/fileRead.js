var fs = require('fs')
var y = require('yargs')

var filename = y.argv.filename
var fileArray = []


console.log(filename)

// //read and write the file in array 
fs.readFile('filename.txt', function(err,data){
    if(err)  console.error(err)
    else{
        
        fileArray = JSON.parse(data)

        if(fileArray.includes(filename)){
            console.log("filename already exists\n " + fileArray) }
        
        else{
            fileArray.push(filename)
            
            console.log(fileArray)

            fs.writeFile('filename.txt', JSON.stringify(fileArray), (err)=>{
                 console.error(err)
            })

            //create a new file
            fs.writeFile(filename, "You are awesome", (err)=>{
            console.error(err)
            })
        }
    }
})