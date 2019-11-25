// let/const
// Archivo de Prueba para test con mocha
let extractLinks = require('../lib/extract_links');

let str = `# Lyft

* **Track:** _Common Core_
* **Curso:** _Creando tu primer sitio web interactivo_
* **Unidad:** _Maquetado web con HTML & CSS_

***

Para completar este reto, hemos creado este repositorio boilerplate (plantilla
inicial) con todos los recursos que necesitas. Esto incluye imágenes y
estructura de carpetas y archivos donde colocarás tu código.

## Flujo de trabajo

1. Debes realizar un [**fork**](https://gist.github.com/ivandevp/1de47ae69a5e139a6622d78c882e1f74)
   de este repositorio.

2. Luego deberás **clonar** tu fork en tu máquina. Recuerda que el 
comando a usar
   es \`git clone\` y su estructura normalmente se ve así:

   \`\`\`bash
   git clone https://github.com/<nombre-de-usuario>/lyft.git
   \`\`\`

## Objetivo

El reto consiste en replicar el sitio de **Lyft**, este será el resultado
a lograr:

![Lyft Website](docs/fullpage.png)

## Consideraciones

* Encontrarás un archivo base \`index.html\` en el cual deberás escribir la
  estructura de tu proyecto y enlazar tus archivos de estilos (CSS).

* En la carpeta \`css\` tendrás un archivo base \`main.css\` donde agregarás los
  estilos necesarios para tu proyecto:

* Dentro de la carpeta \`assets\` se encuentra la carpeta \`images\` donde
  encontrarás todas las imágenes necesarias para completar tu proyecto.

* Deberás **actualizar el archivo \`README.md\`** explicando el contenido de tu
  repositorio.

* Esta web utiliza la tipografía \`Montserrat\`.

* La paleta de colores puedes obtenerla inspeccionado el sitio original, pero
  para ganar tiempo, puedes usar los siguientes:

  - Botones, hover: \`#FF00BF\`
  - Fondo de \`footer\`: \`#333447\`
  - Título del formulario: \`#352384\`
  - Texto del formulario: \`#728099\`
  - Gradiente morado: \`linear-gradient(#76278F, #2B1E66);\`

* Para el footer, deberás tomar en cuenta que tiene un hover y se ve como en la
  siguiente imagen:

  ![Lyft - Footer](docs/footer.gif)

  Además, los íconos deberás obtenerlo de \`Icomoon\`.

* Para este reto, encontrarás ciertas cosas que probablemente aun no has visto
  en clase (formularios, videos de Youtube). No te preocupes, estamos seguros
  que los afrontarás con éxito, de igual forma aquí unos tips:

  - Estos son los videos de Youtube:
    * https://www.youtube.com/watch?v=fLSmUWOYpKw
    * https://www.youtube.com/watch?v=V7j8Aqxmbs8
    * https://www.youtube.com/watch?v=xj2VWLV0xCU
  - Para agregar los videos, averigua sobre la etiqueta \`iframe\`.
  - Para el formulario, revisa las etiquetas como form e \`input\`.

* Puedes ver el [sitio original](https://www.lyft.com/), sin embargo, su diseño
  ya ha cambiado en ciertas partes, así que tu fuente de verdad es la imagen que
  muestra el objetivo de este reto.

  > Nota: El sitio original tiene ciertos efectos y funcionalidades que
están fuera del alcance de este reto. Enfócate en obtener la maquetación
lo más parecido posible, usando lo aprendido en clase ;)

## A tener en cuenta

Este reto será evaluado sobre lo siguiente:

* Pixel perfect (replicar el diseño con exactitud)
* Estructura de carpetas y archivos
* Nombramiento de clases, id, etc
* Indentación
* Archivo README.md actualizado y correctamente redactado
* Uso de comentarios para hacer tu código más legible`;

let str2 = `# Freelancer

* **Track:** _Common Core_
* **Curso:** _Creando tu primer sitio web interactivo_
* **Unidad:** _Maquetado web con HTML & CSS_

***

Para completar este reto, hemos creado este repositorio boilerplate (plantilla
inicial) con todos los recursos que necesitas. Esto incluye imágenes y
estructura de carpetas y archivos donde colocarás tu código.

## Flujo de trabajo

1. Debes realizar un [**fork**](https://gist.github.com/ivandevp/1de47ae69a5e139a6622d78c882e1f74)
   de este repositorio.

2. Luego deberás **clonar** tu fork en tu máquina. 
Recuerda que el comando a usar
   es \`git clone\` y su estructura normalmente se ve así:

   \`\`\`bash
   git clone https://github.com/<nombre-de-usuario>/freelancer.git
   \`\`\`

## Objetivo

El reto consiste en replicar el sitio de **Freelancer**, este será el resultado
a lograr:

![Freelancer Website](docs/fullpage.png)

## Consideraciones

* Encontrarás un archivo base \`index.html\` en el cual deberás escribir la
  estructura de tu proyecto y enlazar tus archivos de estilos (CSS).

* En la carpeta \`css\` tendrás un archivo base \`main.css\` donde agregarás los
  estilos necesarios para tu proyecto.

* Dentro de la carpeta \`assets\` se encuentra la carpeta \`images\` donde
  encontrarás todas las imágenes necesarias para completar tu proyecto.

* Deberás **actualizar el archivo \`README.md\`** explicando el contenido de tu
  repositorio.

* Esta web utiliza 2 tipografías: \`Montserrat\` y \`Lato\`.

* La paleta de colores puedes obtenerla inspeccionado el sitio original, pero
  para ganar tiempo, puedes usar los siguientes: \`#2c3e50\`, \`#18bc9c\`,
  \`#212529\`.

* Los íconos de redes sociales puedes obtenerlos de [Font Awesome](http://fontawesome.io/).

* Para este reto, encontrarás ciertas cosas que probablemente aun no has visto
  en clase (formularios). No te preocupes, estamos seguros que lo afrontarás con
  éxito, de igual forma aquí unos tips:

  - Para el formulario, revisa las etiquetas como \`form\`, \`input\`, \`button\`.

* El subrayado que incluye la estrella en las diversas secciones del sitio, en
  la web original se hace con un ícono y pseudoelementos (\`:after\`, \`:before\`),
  es un reto entretenido, sin embargo, no trates de enfocarte en esa parte desde
  un inicio ya que no es el objetivo principal del reto :)

* Puedes ver el [sitio original](https://blackrockdigital.github.io/startbootstrap-freelancer/)
  para que te des una idea de como debe quedar.

  > Nota: El sitio original tiene ciertos efectos y funcionalidades que
están fuera del alcance de este reto. Enfócate en obtener la maquetación
lo más parecido posible, usando lo aprendido en clase ;)

## A tener en cuenta

Este reto será evaluado sobre lo siguiente:

* Pixel perfect (replicar el diseño con exactitud)
* Nombramiento de clases, id, etc
* Indentación
* Archivo \`README.md\` actualizado y correctamente redactado
* Uso de comentarios para hacer tu código más legible`;

let str3 = `# User Experience Design

Este repositorio es el lugar donde vamos a ir continuamente _diseñando_ nuestro
programa de formación en **User Experience Design**.

En este repo se irán _ordenando_, _desarrollando_, _discutiendo_ y
_proponiendo_ todo lo que tenga que ver con el diseño de nuestros _contenidos_
y _sus ejercicios_.

## Mapa de conceptos, tecnologías y herramientas

Como guía en el proceso de diseño de la malla estamos usando un "mapa" de
_conceptos_ y _habilidades_ que queremos cubrir en la currícula. Lo puedes encontrar en este [link](https://trello.com/b/P5neOZ0T/laboratoria-ux-mindmap).
Este mapa es un mapa vivo, se basa en feedback de empleadores, instructores y
alumnas. Si tienes alguna sugerencia o comentario no dudes en hacerlo. 


Además del feedback de empleadores, instructores y alumnas. 
Hemos tenido en cuenta comentarios y artítuclos de referentes 
en el diseño. Aquí algunas de nuestras referencias:


### [Let’s stop talking about THE design process](https://medium.com/stanford-d-school/lets-stop-talking-about-the-design-process-7446e52c13e8)

En este artículo del dschool the la Universidad de Stanford, 
la autora nos habla de cómo debemos dejar de enfocarnos en "EL" 
proceso de diseño sino que debemos enfocarnos en determinados 
skills que deben tener los diseñadores como: 

* Navegar la ambigüedad
* Aprender de otros
* Sintetizar información
* Experimintar rápido
* Moverse entre concreto y abstracto
* Construir y crear intencionalmente
* Comunicar deliberadamente
* Diseñar el trabajo de diseño

Toodos estas habilidades están siendo añadidas en nuestra currícula. 

### [InVision’s Aarron Walter on design culture](https://blog.intercom.com/invisions-aarron-walter-on-design-culture/)

Aarron Walter de Invision nos habla sobre el balance entre teoría y 

práctica al momento de educar en diseño.

> If you’re entirely academic, but you have not actually practiced 
or applied those ivory tower ideas, if you haven’t applied those to 
something practical, then is that very useful? Conversely, if you 
only know the tools of the trade, can you think very deeply about 
the meaning of the product and the strategy? Can you think very high 
level? Maybe not. A balance between those two puts you in a really 
strong position to be a leader in design and technology, versus just 
a technician.

### [Judy Wert - The one thing all top designers have](https://www.youtube.com/watch?v=xPmBRhMX8qQ)

En esta entrevista, Judy Wert, nos habla de que el top 1% de diseñadores 
en el mundo saben sobre la historia del diseño y lo complicado que ha 
sido llegar al rol que juega el diseño hoy en día. Esto está muy 
relacionado con tener empatía con las personas con quiénes trabajamos. 

### [Jared Spool - How to hire designers](https://blog.intercom.com/jared-spool-on-ux-design/)

En esta entrevista, Jared Spool, co-founder de Center Centre, 
explica cómo es la mejor manera de contratar un diseñador. 
Y cuestiona la relación entre seniority y años de experiencia. 

### [Daniel Burka - Design is the scientific method of businesses, if done right](https://www.youtube.com/watch?v=t44kmZ_PFOU)


### [Paul Sherman - The unicorn is dead. Soft skills kill coding skills](https://www.youtube.com/watch?v=tSkDLYDsbBc)

En este talk Paul comenta sobre la importancia de los soft skills para 
un UX Designer. Y destaca los siguientes:

* Comunicación e influencia
* Colaboración
* Empatía
* Pensamiento crítico (judgment)
* Iniciativa

*** 

## Bootcamp

### [01. Primer proyecto de UX](01-sprints/00-intro-ux)

* Track: _UX Design_
* Autor: [Lalo Gonzalez](https://github.com/lalogf)
* Tiempo estimado: _2 semanas_

En este curso trabajaremos en nuestro primer proyecto de diseño, 
aprendiendo las mejores prácticas de research cualitativo, pasando 
por técnicas de síntesis, ideación y priorización hasta llegar al 
prototipado y testeo de la solución. 

* **Venta de pasajes de bus**: El entregable final del curso será 
un prototipo validado de una aplicación de venta de pasajes de bus. 

Main tags: \`research\`, \`entrevistas\`, \`observación\`, 
\`prototipado\`, \`mvp\`, \`testing\`, \`priorizacion\`, 
\`content prototyping\`, \`customer journey maps\`, \`user personas\`.

Secondary tags: \`sketching\`, \`paper prototyping\`, 
\`content prototyping\`, \`interactive prototype\`,
\`investigación contextual\`, \`encuestas\`, \`Figma\`, \`Marvel\`.

*** 

## Contribuciones

Toda contribución es **gratamente bienvenida**.

Pero **POR FAVOR** no olvides leer detalladamente la
[guía para contribuidores](CONTRIBUTING.md) antes de enviar un PR.

## Licencia & Copyright

Todos los materiales de este repo son (c) 2017 [Laboratoria]
(http;//laboratoria.la/).

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-nc-nd/4.0/)


Este trabajo está publicado bajo la licencia [Creative commons Attribution-ShareAlike 4.0](https://creativecommons.org/licenses/by-sa/4.0/).`;

let str4 = `
* Track: _UX Design
* Tiempo estimado: _2 semanas_

En este curso trabajaremos en nuestro primer proyecto de diseño,
// aprendiendo las mejores prácticas de research cualitativo, pasando 
// por técnicas de síntesis, ideación y priorización hasta llegar al 
// prototipado y testeo de la solución. 

* **Venta de pasajes de bus**: El entregable final del curso será un 
prototipo validado de una aplicación de venta de pasajes de bus. 

Main tags: \`research\`, \`entrevistas\`, \`observación\`, \`prototipado\`,
 \`mvp\`, \`testing\`, \`priorizacion\`, \`content prototyping\`,
  \`customer journey maps\`, \`user personas\`.`;


describe('Prueba de extract()', ()=>{
  it('Debería Devolver true si el string posee enlaces []()', () => {
    if (typeof extractLinks.extract(str) !== 'object') {
      console.error('✗ fail');
    } else {
      console.log('✓ ok');
    }
  });
  it('Devuelve false si el string No posee enlaces []()y No Links', () => {
    if ( typeof extractLinks.extract(str4) !== 'string') {
      console.error('✗ fail');
    } else {
      console.log('✓ ok ' + extractLinks.extract(str4));
    }
  });
});

describe('Prueba de hasLinks()', ()=>{
  it('Debería Devolver true si el string posee enlaces []()', () => {
    if (extractLinks.hasLinks(str) !== true) {
      console.error('✗ fail');
    } else {
      console.log('✓ ok');
    };
  });

  it('Debería Devolver false si el string No posee enlaces []()', () => {
    if (extractLinks.hasLinks(str4) !== false) {
      console.error('✗ fail');
    } else {
      console.log('✓ ok');
    }
  });
});

describe('Prueba de sameSize()', ()=>{
  it('Debería Devolver true si los array son de Igual Tamaño', () => {
    if (extractLinks.sameSize([1, 23, 'd'], ['ee', {}, 11]) !== true) {
      console.error('✗ fail');
    } else {
      console.log('✓ ok');
    };
  });
  it('Debería Devolver false si los array NO son de Igual Tamaño', () => {
    if (extractLinks.sameSize([1, 23], ['ee', {}, 11]) !== false) {
      console.error('✗ fail');
    } else {
      console.log('✓ ok');
    }
  });
});

describe('Prueba de extractBracketsParentheses()', ()=>{
  it('Debería Devolver true si los array son de Igual Tamaño', () => {
    if (extractLinks.sameSize([1, 23, 'd'], ['ee', {}, 11]) !== true) {
      console.error('✗ fail');
    } else {
      console.log('✓ ok');
    }
  });
  it('Debería Devolver false si los array NO son de Igual Tamaño', () => {
    if (extractLinks.sameSize([1, 23], ['ee', {}, 11]) !== false) {
      console.error('✗ fail');
    } else {
      console.log('✓ ok');
    }
  });
});
