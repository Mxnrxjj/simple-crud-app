# Product API (No BS)

![Built With](https://img.shields.io/badge/Built%20With-Node.js%20%7C%20Express%20%7C%20MongoDB-black)
![API](https://img.shields.io/badge/API-REST-blue)
![Made By](https://img.shields.io/badge/Made%20by-Manraj-8A2BE2)

A clean **REST API** built with Node.js + Express + MongoDB.
Basic CRUD, solid structure, and easy to extend.

---

## ⚡ What this thing does

* 🛒 Create products
* 📦 Get all products
* 🔍 Get single product
* ✏️ Update product
* 🗑️ Delete product

Basically… full CRUD. Nothing fancy, just solid.

---

## 🧃 Tech Stack

* Node.js
* Express
* MongoDB + Mongoose
* dotenv (to hide secrets like a pro 🕵️‍♂️)

---

## 🧠 Why this exists

Learning backend?
Same.

This project is:

* clean
* modular
* not spaghetti 🍝
* actually usable

---

## 🚀 How to run (don’t overthink it)

### 1. Clone it

```bash
git clone https://github.com/Mxnrxjj/simple-crud-app.git
cd simple-crud-app
```

---

### 2. Install stuff

```bash
npm install
```

---

### 3. Add your secret sauce

Create `.env`:

```bash
MONGO_URI=your_mongodb_uri_here
```

---

### 4. Run it

```bash
npm run dev
```
or
```bash
npm run serve
```

Now go to:

```bash
http://localhost:3000
```

---

## 📡 API Routes (hit these with Postman)

| Method | Route             | What happens |
| ------ | ----------------- | ------------ |
| GET    | /api/products     | get all      |
| GET    | /api/products/:id | get one      |
| POST   | /api/products     | create       |
| PUT    | /api/products/:id | update       |
| DELETE | /api/products/:id | delete       |

---

## 🧪 Sample JSON

```json
{
  "name": "iPhone 15",
  "quantity": 2,
  "price": 80000
}
```

---

## 🧱 Project Structure (not chaos)

```bash
models/
routes/
controllers/
index.js
.env
```

---

## 🧩 Future plans (if I don’t get lazy)

* 🔐 Auth (JWT)
* 📊 Pagination
* 🧼 Better structure (MVC)
* 🌍 Deploy it

---

## 🤝 Contribute?

PRs welcome.
Bugs? yeah probably.
