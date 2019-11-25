
const fs= require("fs");
const path= require("path");
const markdownLinkExtractor = require('markdown-link-extractor');

//lee archivo md
const readmdfile =(path=>{

  return new Promise((res,rej)=>{

    fs.readFile(path,"UTF-8",(error,data)=>{
      if(error)
       rej(new error ("no se encuentra archivo"));
      
       res(data);
     
      })
   }) 
}) 

const readmd=readmdfile("./README.md");

readmd.then(datos => {
  //console.log(datos);
  const links = markdownLinkExtractor(datos);
  links.forEach(function (link) {
    console.log(link);
    })
  })
.catch(error => console.log(error))

console.log(process.argv);

/*if(require.main === module){
  console.log("Me están ejecutando desde la terminal")
}else{
  console.log("Soy una biblioteca")
}*/
