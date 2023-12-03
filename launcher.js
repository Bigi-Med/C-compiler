const tokenizer =  require('./tokenize.js');
const fs  = require('fs').promises
const path = require('path')

async function readFile(filePath){
    try{
      const data = await fs.readFile(filePath,'utf8')
      return data;
    } catch(err){
      console.log(err);
    }
}

async function processFile(filePath){
    if(!filePath){
      console.log("Please provide a file path as an argument");
      process.exit(1);
    }
    try{
      const data = await readFile(filePath);
      tokenizer(data)
    } catch(err){
      console.log(err)
    }

}
const filePath = process.argv[2];
processFile(filePath);