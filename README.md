<h1>Desafío número tres del 7 days code</h1>
<h2> Actididad a reailzar </h2>
<p> ¿Alguna vez has jugado un juego que te dé más de una opción y, dependiendo de lo que elijas, el destino del personaje sea completamente diferente? 
  
  Hoy se va a desarrollar un ejemplo con Javascript.

Quiero que trabajes con estructuras de control de flujo. Esta forma complicada de decirlo significa que, al igual que en los juegos, la historia que desarrolles debe adaptarse a las respuestas dadas por quien está jugando.
Para ello, necesitarás algunas estructuras capaces de alterar el flujo de la aplicación, como for, while, if y else. Todas estas pueden cumplir con este objetivo, dada una cierta condición.
El if y el else, que ya te he mostrado en los últimos días, son capaces de crear ramificaciones dentro de la aplicación para que se tome una u otra acción, dependiendo de la condición proporcionada.
Los bucles (como for y while) son capaces de transformar una tarea repetitiva en pocas líneas de código, sin importar cuántas veces necesites repetir esa tarea.

Tu desafío de hoy es crear los destinos posibles de un juego, en el que el usuario pueda elegir:
Si quiere seguir hacia el área de Front-End o seguir hacia el área de Back-End.
Si está en el área de Front-End, si quiere aprender React o aprender Vue. Si está en el área de Back-End, podrá aprender C# o aprender Java.

Después, independientemente de las elecciones anteriores, el usuario podrá elegir entre seguir especializándose en el área elegida o desarrollarse para convertirse en Fullstack. 
Debes mostrar en pantalla un mensaje específico para cada elección.
Finalmente, pregunta en qué tecnologías le gustaría a la persona especializarse o conocer. Aquí, la persona puede responder N tecnologías, una a la vez. 
Entonces, mientras continúe respondiendo **ok** a la pregunta: "¿Hay alguna otra tecnología que te gustaría aprender?", sigue presentando el Prompt, para que complete el nombre de la tecnología en cuestión. 
Y, justo después, presenta un mensaje comentando algo sobre la tecnología ingresada.
 
Lo importante es que la persona que esté jugando siempre pueda elegir qué decisión tomar para aprender y desarrollarse en el área de programación.
Además, también es esencial que, al final del juego, pueda ingresar tantas tecnologías como desee en la lista de aprendizaje.</p>

<h2>Extra</h2>
<p>Ya has visto estructuras condicionales en Javascript anteriormente, pero vamos a recapitular. El if se usa para verificar si una determinada condición es verdadera.

 

Ejemplo:

 

if (ciudad === "Roma") {

    // muestra la foto del "Coliseo"

}




Además, también puede usarse con uno o varios else if, que verificará si la condición anterior era falsa y comprobará si la actual es verdadera.

 

Finalmente, existe el else solo, sin ninguna condición, y el código dentro de él se ejecutará siempre que todas las condiciones anteriores encadenadas sean falsas.




if (ciudad === "Roma") {

    // muestra la foto del "Coliseo"

} else if (ciudad === "París") {

    // muestra la foto de la "Torre Eiffel"

} else {

    // da la respuesta "No escribiste una ciudad válida"

}




Además, para la parte 4, necesitarás una estructura de repetición (bucle) como el while. Para usarlo, es bastante fácil:

 

let edad = 0;

 

while (edad < 8) {

    // algún comando para imprimir la edad

    edad = edad + 1;

}</p>
