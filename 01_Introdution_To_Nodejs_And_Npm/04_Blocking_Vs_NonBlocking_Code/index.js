const fs = require("fs");

fs.readFile("./start.txt", "utf-8",(error,data1)=>{
    fs.readFile(`./${data1}.txt`, "utf-8",(error,data2)=>{
        console.log(data2);

        fs.readFile("./append.txt","utf-8",(err,data3)=>{
            console.log(data3);
            fs.writeFile("./final.txt",`${data2}\n${data3}`, "utf-8",err =>{
                console.log("Your File has been written");
            })
        })
    })
})