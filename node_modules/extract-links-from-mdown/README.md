# EXTRACTOR DE LINKS DE ARCHIVOS MARKDOWN (NODE.JS)

Implementación de un módulo de Node.js que extrae todos los links encontrados en un string en formato Markdown.

# Entorno de Desarrollo

El modulo esta desarrollado con **JavaScript**, **Node** y los test se realizaron con **Mocha**. 

## Instalación

1. Descargar el modulo extract-links-from-mdown, de la página https://www.npmjs.com/.

2. Dentro de la librería existe una función llamada extract, que toma como argumento un texto en formato markdown y extrae un array de objetos con los links y sus textos correspondientes.

3. Si desea ver ejemplos de uso de la librería, puede descargar un demo aquí: https://github.com/ValeritaPaz/extract-links-from-md/tree/claudvalekelly

## Demo

 1. En el archivo index.js se declara una variable llamada str con un String en formato markdown.

## let str = `# Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut [labore] (https://en.wiktionary.org/wiki/labore) et [dolore] (https://en.wiktionary.org/wiki/dolore) magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. [foo](http://foo.com) Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

Luego de declarar la variable dentro del archivo index.js, debes crear otra variable donde llamaras a la función extractLinks.extract(str)  pasandole como parametro la variable. De la siguiente manera:

    let linksArray = extractLinks.extract(str);

Finalmente para ver el resultado puedes hacer un console.log:

    console.log(linksArray);

Guarda los cambios y en la consola escribes:

`node index.js`, presionas ENTER, y de esta manera vas a poder visualizar los links que se encuentran en la variable. 


## Resultado de Demo
   [
		   { href: 'https://en.wiktionary.org/wiki/labore', text: 'labore' },
		   { href: 'https://en.wiktionary.org/wiki/dolore', text: 'dolore' },
		   { href: 'http://foo.com', text: 'foo' }, 
   ]

## Equipo de Desarrollo

 - Claudina Cortez (https://github.com/claudinacr
 - Raquel Jarpa (https://github.com/Klebuck)
 - Valeria Navarrete (https://github.com/ValeritaPaz), 

