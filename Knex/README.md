# Knex

Knex.js es un constructor de **consultas SQL* para JavaScript, es una abstracción delgada en la parte superior del controlador. Se utiliza en las bases de datos relacionales (PG, MYSQL, SQL).

# Instalación

Se puede instalar de dos maneras cuando se va a utilizar en un proyecto:

1. Global: 'npm i knex -g'
  - Recordando que '-g' es un modificador para instalar de manera global (es decir, en todo el computador, no sólo para el proyecto que se está trabajando).

2. Local: 'npm i knex'
  - Lo que permitirá instalarlo sólo para el proyecto en el que se corra el comando.

Se recomienda la instalación local para los proyectos, para evitar problemas de versionamiento de Knex.

## Scripts

Si optas por la opción 2, todos los comandos que mencionaremos más adelante se deberán agregar en un script dentro de nuestro package.json y la instalación se hará después de inicilizar el proyecto.

## Iniciar el proyecto

1. Inicializamos el proyecto dentro de una carpeta destinada para el mismo.
  - 'npm init -y'

2. Instalar los recuros necesarios:
  'npm i express knex pg'
  - express: biblioteca para creación de API.
  - knex: Query Builder (constructor de consultas)
  - pg: driver de PostgreSQL que se puede cambiar dependiendo de la base de datos que se ocupe.

3. Crear mi .gitignore:
  - node_modules/

## Configuración de Knex

1. Iniciar la configuración de Kmex para el CRUD de operaciones por medio de 'migrations' en Knex.

```
Migraciones

Una migración es una 

```


