
const fs= require("fs");
const pathnode= require("path");
//const markdownLinkExtractor = require('markdown-link-extractor');
const marked=require("marked");

//lee archivo md

let path=process.argv[2];

path=pathnode.resolve(path);

path=pathnode.normalize(path);


/** Leer archivos .md **/
/*function readMdFile (path){
  const promise = new Promise((resolve,reject)=>{
    fs.readFile(path,"UTF-8", (error, data)=>{
      if(error){
        reject (new Error ("No hay archivo"))
      } 
      resolve (data);
      console.log(data);
    })
  })
  return promise
}
readMdFile(path)*/

//Extraer links
function extractLinks (path){
  const promise = new Promise((resolve,reject)=>{
    fs.readFile(path,"UTF-8", (error, data)=>{
      if(error){
        reject (new Error ("No hay links"))
      }
      const links = [];
      const renderer = new marked.Renderer();
      renderer.link = function(href, file, text){
        links.push({
          href: href,
          text: text,
          file:path
        });
      };
      marked(data, {renderer:renderer})
      resolve (links);
      console.log(links);
    })
  })
  return promise
}
extractLinks(path)
/*

if(require.main === module){
  console.log("Me están ejecutando desde la terminal")
}else{
  console.log("Soy una biblioteca");*/

