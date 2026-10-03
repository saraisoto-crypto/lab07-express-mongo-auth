🔐 Express Mongo Auth

<p align="center"> **Sistema de autenticación y gestión de usuarios con Node.js, Express y MongoDB** </p>

<p align="center"> ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white) ![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white) ![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white) </p>

✨ Características
🔑 Autenticación JWT — Inicio de sesión seguro.
👥 Gestión de usuarios — Registro y administración.
🛡️ Control RBAC — Permisos según roles.
🔒 Contraseñas cifradas — Protección con bcrypt.
⚙️ Middleware — Protección de rutas.
🗄️ MongoDB — Almacenamiento de información.
🖥️ Interfaz web — Vistas dinámicas con EJS.
🧰 Tecnologías
Tecnología	Uso
🟢 Node.js	Entorno de ejecución
🚀 Express	Servidor y API
🍃 MongoDB	Base de datos
🔗 Mongoose	Modelado de datos
🔐 JWT	Autenticación
🔒 Bcrypt	Cifrado de contraseñas
🎨 EJS	Vistas web
📂 Estructura
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
🚀 Instalación

1. Clonar el repositorio

git clone https://github.com/saraisoto-crypto/lab07-express-mongo-auth.git

2. Entrar al proyecto

cd lab07-express-mongo-auth

3. Instalar dependencias

npm install

4. Configurar las variables de entorno

cp .env.example .env

Configura tu conexión a MongoDB y tu clave JWT en .env.

5. Ejecutar

npm start

Para desarrollo:

npm run dev
🌐 Acceso
Servicio	Dirección
💻 Aplicación	http://localhost:3000
❤️ Estado del servidor	http://localhost:3000/health
🛡️ Seguridad
Autenticación mediante tokens JWT.
Contraseñas protegidas con bcrypt.
Rutas restringidas según roles.
Variables sensibles almacenadas en .env.
Exclusión de archivos privados mediante .gitignore.
⚡ Comandos
Comando	Acción
npm install	Instalar dependencias
npm start	Iniciar aplicación
npm run dev	Modo desarrollo

<p align="center"> **👩‍💻 Autor: Sarai Soto** 🔐 *Express Mongo Auth* </p>
