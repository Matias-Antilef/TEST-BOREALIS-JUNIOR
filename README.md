# TEST BOREALIS JUNIOR

Versiones utilizadas:

- NestJS: 11.0.1
- Node.js: 22.12.0
- PostgreSQL: 13.5
- Docker: 27.4.0
- Docker compose: 2.31.0-desktop.2 
# Instalación paso a paso

### Clonar el repositorio:

- Abrir la terminal y copiar el siguiente comando:

```bash
  git clone https://github.com/Matias-Antilef/TEST-BOREALIS-JUNIOR.git
```

- Abrir la carpeta clonada con el editor de codigo.


### Variables de entorno

- Creamos en la raíz del proyecto un archivo con el nombre:

```bash
  .env
```

- A este archivo le ingresamos los siguientes datos.

```bash
POSTGRES_HOST=
POSTGRES_PORT=
POSTGRES_DB_NAME=
POSTGRES_USER=
POSTGRES_PASSWORD=


DATABASE_URL="postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DB_NAME}?schema=public"
```

- Estas variables deben tener algun valor, al ser etapa de desarrollo y pruebas, se pueden agregar los siguientes valores, (localhost es necesario):

```bash
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_DB_NAME=pruebajr
POSTGRES_USER=pruebajr
POSTGRES_PASSWORD=pruebajr
```


### Instalación de dependencias

- Empezamos instalando todas las dependencias necesarias para el correcto funcionamiento de la aplicación. Abrimos una terminal en el editor de codigo y nos aseguramos de estar en la raíz del proyecto para ejecutar el siguiente comando:

```bash
  npm install
```

- Nos aseguramos de tener la aplicación de Docker corriendo y ejecutamos el siguiente comando, para levantar la base de datos:

```bash
  docker-compose up -d
```

- Ahora migramos los modelos del archivo prisma/schema.prisma a la sintaxis de la base de datos que estamos usando (En este caso PostgreSQL):

```bash
  npx prisma migrate dev --name "init"  
```

- Para testear la aplicación usamos un seeder para ingresar datos de prueba, el cual se encuentra en prisma/seeder.ts, con un comando personalizado en el package.json:

```bash
  npx prisma db seed
```

- Por último iniciaremos la aplicación.

```bash
  nest start  
```

# Cómo testear el endpoint en Postman

1.- Creamos un nuevo espacio de trabajo.
2.- Seleccionamos API Testing.
3.- Le designamos un nombre y creamos.
4.- En la esquina superior izquierda pinchamos en "new".
5.- Seleccionamos la opción HTTP.
6.- Nos aseguramos de que sea una petición GET e ingresamos la URL base:
```bash
  http://localhost:3000  
```

En este caso queremos entrar en la ruta de categorias con un ID en especifico, por lo que se veria asi (El número 1 se puede cambiar por otro valor numerico, ya que es dínamico):

```bash
  http://localhost:3000/categoria/1  
```

Enviamos la petición con el botón "Send", hay dos posibles respuestas:


1.- En el caso de que el ID exista se mostrará:

{
  "id": 1,
  "nombre": "NOMBRE DE UNA CATEGORIA"
}


2.- En el caso de que NO exista el ID se mostrará:

{
  "message": "Categoría no encontrada",
  "error": "Not Found",
  "statusCode": 404
}
