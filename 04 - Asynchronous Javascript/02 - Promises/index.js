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

readFilePro(`${__dirname}/dog.txt`)
  .then(data => {
    console.log(`Breed: ${data}`);
    return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
  })
   .then(res =>{
      console.log(res.body.message);
     return writeFilePro("dog-img.txt", res.body.message);

    // fs.writeFile("dog-img.txt", res.body.message, err => {
    //   console.log('Random dog image saved to file')
    // })
   })
  .then(() => {
    console.log('Random dog image saved to file')
  })
  .catch((err) => {
    
    console.log(err.message);
    
})


// fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
//   console.log(`Breed: ${data}`);
//   superagent.get(`https://dog.ceo/api/breed/${data}/images/random`)
//     .then(res =>{
//       console.log(res.body.message);
    
//     fs.writeFile("dog-img.txt", res.body.message, err => {
//       console.log('Random dog image saved to file')
//     })
//     })
//     .catch((err) => {
    
//     console.log(err.message);
    
// })
// })

