const fs = require("fs");
const superagent = require("superagent");

const readFilePro = file => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if(err) reject('Unable to find the file 😅')
      resolve(data);
    })
  })
}

const writeFilePro = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, err => {
      if (err) reject("Unable to Write to File");
      resolve('success');
    })
  })
  
} 


const getDogPic = async () => {
  try {
      const data = await readFilePro(`${__dirname}/dog.txt`);
  console.log(`Breed: ${data}`);
  
  const res = await superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
  console.log(res.body.message);


  await writeFilePro('dog-img.txt', res.body.message);
    console.log(`Random dog image saved to file`)
    
    return '2:Ready'
  } catch (error) {
    console.log(error)
    throw (err)
  }

  

}
console.log("Willl get dog pics")
getDogPic().then(x => {
  console.log(x);
  console.log("Done")
}).catch(err => {
  console.log("Error")
})
