
const fs= require("fs");
const pathnode= require("path");
const marked=require("marked");
const fetch=require("node-fetch")

//lee archivo md

let path=process.argv[2];

path=pathnode.resolve(path);

path=pathnode.normalize(path);


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


let validate =() =>{
  //let promiseFetch = new Promise((resolve ,reject)=>{
  extractLinks(path).then((links)=>{
  links.map(element => {
      return fetch(element.href).then(res =>{
         // v.status=res.statusText;
         if(res.ok){
         console.log(element.href +  res.status);
         console.log(res.statusText);
         // v.statusCode = res.status;
         }
         else{
          console.log(element.href  +  res.status)
          console.log(res.statusText);
         } 
        }).catch((err)=>{
            console.log(err.statusText );
         // v.status = err
        }) ;
      
  });    
  
  })
  
  }
  
  validate()
