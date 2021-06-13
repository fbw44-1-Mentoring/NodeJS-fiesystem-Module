//CommonJS Modules System
const fs = require("fs")

/* console.log(fs) */

//create a directory
/* fs.mkdir("./folder", (err)=>{
    if(err) console.log(err)
    else console.log("directory created")
}) */

//create a file
/* fs.writeFile("./folder/text.txt", "", (err)=>{
    if(err) console.log(err)
    else console.log("file created")
}) */

//write data into a file
/* fs.writeFile("./folder/text.txt", "Hello World", (err)=>{
    if(err) console.log(err)
    else console.log("data added")
}) */

//Adding more data into a file
/* fs.appendFile("./folder/text.txt", ", Hello World", (err)=>{
    if(err) console.log(err)
    else console.log("data added")
}) */

//reading data from file
/* fs.readFile("./folder/text.txt", "utf8", (err,data)=>{
    console.log(data)
}) */


//rename file
/* fs.rename("./folder/text.txt", "./folder/text-renamed.txt",(err)=>console.log(err)) */

//copy file into another fie
/* fs.copyFile("./folder/text-renamed.txt", "./folder/abc.txt", (err=>console.log(err))) */

//delete a file
/* fs.unlink("./folder/abc.txt", (err=>{
    if(err)console.log(err)
    else console.log("file deleted")
})) */


//create readStream
/* btn.addEventListener("click", ()=>{}) */

const readS = fs.createReadStream("./folder/text-renamed.txt")   

const writeS=fs.createWriteStream("./folder/text.txt") 

readS.pipe(writeS)




/* readS.on("data",(data=>{

     console.log(data.toString()) 
       
}))
readS.on("end",()=>{
    console.log("finished file reading")
})
 */

