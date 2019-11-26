
const fs= require("fs");
const pathnode= require("path");
//const markdownLinkExtractor = require('markdown-link-extractor');
const Marked=require("marked");

//lee archivo md

let path=process.argv[2];

path=pathnode.resolve(path);

path=pathnode.normalize(path);


const readmdfile =(path=>{

  return new Promise((res,rej)=>{

    fs.readFile(path,"UTF-8",(error,data)=>{
      if(error)
       rej(new error ("no se encuentra archivo"));
      
       res(data);
     
      })
   }) 
}) 

const readmd=readmdfile(path);

readmd.then(datos => {
  
  const links = [];

  const renderer = new Marked.Renderer(datos);

  renderer.link = function(href, file, text) {
    links.push({
      href: href, 
      text: text,  
      file:path
    });
  };

  Marked(datos, {renderer: renderer});
  //return links;
  console.log(links);
  
})
.catch(error => console.log(error));
/*

if(require.main === module){
  console.log("Me están ejecutando desde la terminal")
}else{
  console.log("Soy una biblioteca");*/

