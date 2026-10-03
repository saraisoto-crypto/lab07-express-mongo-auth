# 🔐 Express Mongo Auth

Sistema de autenticación y gestión de usuarios desarrollado con **Node.js, Express y MongoDB**, con autenticación JWT y control de acceso basado en roles.

---

## ✨ Características

- 🔑 Autenticación mediante JWT.
- 👤 Registro e inicio de sesión.
- 🛡️ Control de acceso basado en roles (RBAC).
- 🔒 Cifrado de contraseñas con Bcrypt.
- 🍃 Gestión de datos con MongoDB.
- ⚙️ Protección de rutas mediante middleware.
- 🖥️ Interfaz web con EJS.

## 🛠️ Tecnologías

| Tecnología | Descripción |
|---|---|
| Node.js | Entorno de ejecución |
| Express.js | Framework backend |
| MongoDB | Base de datos |
| Mongoose | Modelado de datos |
| JWT | Autenticación |
| Bcrypt | Protección de contraseñas |
| EJS | Plantillas web |

## 📁 Estructura

```text
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
```

## 🚀 Instalación

**1. Clonar el repositorio**

```bash
git clone https://github.com/saraisoto-crypto/lab07-express-mongo-auth.git
```

**2. Acceder al proyecto**

```bash
cd lab07-express-mongo-auth
```

**3. Instalar dependencias**

```bash
npm install
```

**4. Configurar las variables de entorno**

```bash
cp .env.example .env
```

Configura la conexión a MongoDB y la clave JWT en el archivo `.env`.

**5. Iniciar el servidor**

```bash
npm start
```

Para desarrollo:

```bash
npm run dev
```

## 🌐 Acceso

- **Aplicación:** http://localhost:3000
- **Estado del servidor:** http://localhost:3000/health

## 🔐 Seguridad

El proyecto incorpora autenticación mediante JWT, contraseñas protegidas con Bcrypt y autorización basada en roles para restringir el acceso a las funcionalidades.

Las variables sensibles se almacenan en `.env`, excluido del repositorio mediante `.gitignore`.

## 👩‍💻 Autora

**Sarai Soto**

---

<p align="center">
  🔐 Express Mongo Auth
  <br/>
  Desarrollo de aplicaciones seguras
</p>
