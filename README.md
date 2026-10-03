Express Mongo Auth

Sistema de autenticación y gestión de usuarios desarrollado con Node.js, Express y MongoDB, que implementa autenticación mediante JWT, cifrado de contraseñas y control de acceso basado en roles (RBAC).

El proyecto tiene como objetivo aplicar conceptos de seguridad informática, autenticación, autorización y administración de usuarios mediante una arquitectura modular.

Tecnologías utilizadas
Node.js: Entorno de ejecución de JavaScript.
Express.js: Framework para el desarrollo del servidor y las API REST.
MongoDB: Base de datos NoSQL.
Mongoose: Modelado y gestión de datos.
JWT: Autenticación mediante tokens.
Bcrypt: Cifrado seguro de contraseñas.
EJS: Motor de plantillas para las vistas.
Dotenv: Administración de variables de entorno.
Nodemon: Reinicio automático del servidor durante el desarrollo.
Funcionalidades principales
Registro de nuevos usuarios.
Inicio y cierre de sesión.
Autenticación mediante JSON Web Tokens (JWT).
Cifrado de contraseñas con bcrypt.
Control de acceso basado en roles (RBAC).
Protección de rutas mediante middleware.
Gestión y consulta de usuarios.
Validación de permisos según el rol asignado.
Interfaz web para la autenticación y administración.
Registro de usuarios y roles iniciales.
Endpoint para comprobar el estado del servidor.
Estructura del proyecto
express-mongo-auth/
├── src/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── public/
│   ├── repositories/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── views/
│   └── server.js
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
Requisitos previos

Antes de ejecutar el proyecto, es necesario contar con:

Node.js.
npm (incluido con Node.js).
MongoDB instalado o una instancia de MongoDB accesible.
Git (opcional).
Instalación

1. Clonar el repositorio

git clone https://github.com/saraisoto-crypto/lab07-express-mongo-auth.git

2. Ingresar a la carpeta

cd lab07-express-mongo-auth

3. Instalar las dependencias

npm install

4. Configurar las variables de entorno

En Git Bash, macOS o Linux:

cp .env.example .env

En Windows PowerShell:

Copy-Item .env.example .env

Configurar el archivo .env con los valores correspondientes a la base de datos y la autenticación.

PORT=3000
MONGODB_URI=mongodb://localhost:27017/auth_db
JWT_SECRET=tu_clave_secreta
JWT_EXPIRES_IN=1h
BCRYPT_SALT_ROUNDS=10

Importante: No se deben publicar las credenciales ni las claves secretas en repositorios públicos.

Ejecución

Para iniciar el servidor:

npm start

Para ejecutar el proyecto en modo desarrollo:

npm run dev

Una vez iniciado, se podrá acceder a la aplicación desde:

Aplicación web: http://localhost:3000
Estado del servidor: http://localhost:3000/health
Seguridad y control de acceso

El sistema implementa mecanismos de seguridad para proteger los recursos y la información de los usuarios.

Autenticación: Verifica la identidad de los usuarios mediante JWT.
Autorización: Controla el acceso a las funcionalidades de acuerdo con los roles asignados.
Cifrado de contraseñas: Utiliza bcrypt para evitar almacenar contraseñas en texto plano.
Middleware: Protege las rutas que requieren autenticación y permisos específicos.
Variables de entorno: Permiten mantener separadas las configuraciones sensibles del código fuente.
Scripts disponibles
Comando	Descripción
npm install	Instala las dependencias
npm start	Inicia el servidor
npm run dev	Ejecuta el servidor en modo desarrollo
Consideraciones
Es necesario mantener MongoDB en funcionamiento para que la aplicación pueda conectarse a la base de datos.
El archivo .env contiene información privada y no debe subirse a GitHub.
La carpeta node_modules no necesita incluirse en el repositorio, ya que puede reconstruirse mediante npm install.
Los roles y usuarios iniciales deben revisarse en los archivos de configuración correspondientes.
Autor

Sarai Soto

Proyecto: Express Mongo Auth
