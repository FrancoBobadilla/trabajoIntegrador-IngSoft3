# trabajoIntegrador-IngSoft3

Utilizar la versión de payroll server trabajada en clase.
Subirla en un repositorio de Git.
Tener la construcción de la salida automatizada, utilizando alguna de las herramientas vistas en clase (Jenkins, AppVeyor, CircleCI)
Cada commit a master deberá construir la aplicación.
Se deberán correr los test de unidad y eventualmente recolectar y mostrar los resultados.
La salida de la construcción deberá ser una Imagen de Docker.
Esta imagen deberá ser almacenada en DockerHub.
Ejecutar análisis de código, puede estar automatizado en cada build o manual.
Desplegar la aplicación (Docker) en un entorno:
	Puede ser Cloud (AWS, GCloud, Heroku)
	Esto debe estar automatizado y ser parte del pipeline.
	Ejemplo otro job en Jenkins o alguna herramienta de las anteriormente mencionadas

Una vez desplegado, correr test de integración (Selenium o alguna otra validación).
	Se puede correr desde un Job o step en Jenkins.

Mostrar alguna mejora o cambio en el código que se haya realizado.
Mostrar los test cases escritos.
Cualquier agregado y/o mejora de lo antes descrito se tendrá en consideración para la nota del mismo.
