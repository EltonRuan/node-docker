<div align='center'>
 <img style="width:100%" src="https://capsule-render.vercel.app/api?type=soft&height=200&color=FFFFFF&text=Node.js%20Express%20MongoDB%20Docker&fontSize=50&fontAlign=50&strokeWidth=0&descAlignY=80&stroke=000000">
</div>

<nav align="center">
  <h2>🔗 NAVIGATION </h2>
  <p>
   <a href="#about-this-project">ABOUT THIS PROJECT</a> |
   <a href="#features">FEATURES</a> |
   <a href="#setup">SETUP</a> |
   <a href="#access-mongo-express">ACCESS MONGO EXPRESS</a> |
   <a href="#final-considerations">FINAL CONSIDERATIONS</a>
  </p>
</nav>

## ABOUT THIS PROJECT

This project is a **development environment using Node.js, Express, and MongoDB** set up entirely with **Docker and Docker Compose**.
It includes a simple Express API (`server.js`) to test CRUD operations and **Mongo Express** to manage MongoDB visually.

Perfect for learning, testing APIs, or quickly starting new Node.js + MongoDB projects without installing Node or MongoDB locally.

## FEATURES

* **Node.js 20 + Express**: Web server ready to serve your APIs.
* **MongoDB 6.0**: Database server with a preconfigured database `mydb`.
* **Mongo Express**: Web interface to manage the database easily.
* **Dockerized**: Runs in isolated containers; no local installation of Node.js or MongoDB required.
* **Volumes**: Database data is persisted, so data is not lost when containers are restarted.
* **Hot Reload**: Nodemon is configured to automatically restart the server on code changes.

## SETUP

### PREREQUISITES

* Docker Desktop installed (Linux containers mode)
* Docker Compose (comes with Docker Desktop)
* Basic knowledge of terminal/command prompt

### INSTALLATION

1. **Clone the repository to your local machine:**

```bash
git clone https://github.com/EltonRuan/node-express-mongo-docker
```

2. **Navigate to the project directory:**

```bash
cd node-express-mongo-docker
```

3. **Start the containers:**

```bash
docker-compose up -d --build
```

4. **Verify containers are running:**

```bash
docker ps
```

You should see **node\_app**, **mongo\_db**, and **mongo\_express** running.

### PROJECT STRUCTURE

```
node-express-mongo-docker/
│
├─ docker-compose.yml   # Docker Compose configuration
├─ Dockerfile           # Node.js + Express image configuration
├─ package.json         # Node.js dependencies and scripts
└─ server.js            # Simple Express API connecting to MongoDB
```

### SERVER TEST (`server.js`)

Example endpoint:

```js
GET http://localhost:3000/
```

Response:

```
🚀 API Node.js + Express + MongoDB rodando!
```

CRUD example:

```js
POST http://localhost:3000/users
GET  http://localhost:3000/users
```

Body example for `POST /users`:

```json
{
  "name": "Elton",
  "email": "elton@test.com"
}
```

### ACCESS MONGO EXPRESS

* URL: [http://localhost:8081](http://localhost:8081)
* **Username:** admin
* **Password:** admin
* Database: `mydb`

This allows you to **browse collections, run queries, and manage your MongoDB database** visually.

### DOCKER COMPOSE SERVICES

| Service         | Description                     | Ports       |
| --------------- | ------------------------------- | ----------- |
| `node_app`      | Node.js + Express API           | 3000:3000   |
| `mongo_db`      | MongoDB database server         | 27017:27017 |
| `mongo_express` | Web interface to manage MongoDB | 8081:8081   |

### FINAL CONSIDERATIONS

This Dockerized Node.js environment provides a **ready-to-use setup** for learning, testing, or starting new projects.
It ensures:

* Quick setup without local installations of Node.js or MongoDB
* Persistent data through Docker volumes
* Easy database management via Mongo Express
* Hot reload with Nodemon for rapid development

Feel free to modify, expand, and use this as a foundation for your Node.js + MongoDB projects.

<p><strong>© 2025 EltonRuan. All rights reserved.</strong></p>

<footer align="center">
 <img style="width:100%" src="https://capsule-render.vercel.app/api?type=soft&height=20&color=FFFFFF&fontSize=50&fontAlign=50&strokeWidth=0&descAlignY=80&stroke=000000&reversal=false&section=footer">
</footer>

Quer que eu faça isso?
