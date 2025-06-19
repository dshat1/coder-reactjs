# 🛍️ E-commerce de Remeras

Este proyecto es una Single Page Application (SPA) desarrollada con **React**, que simula un e-commerce de remeras. Utiliza **Firebase Firestore** como base de datos y permite a los usuarios navegar productos, agregarlos al carrito y realizar compras.

---

## 🚀 Tecnologías usadas

- ⚛️ React
- 🔥 Firebase (Firestore)
- 📦 React Router DOM
- 💡 Context API
- 💅 Bootstrap (estilado)
- 💾 LocalStorage / Firestore
- 🎬 Framer Motion (transiciones)

---

## 📁 Estructura general

src/
│
├── components/
│ ├── ItemListContainer.jsx
│ ├── ItemList.jsx
│ ├── Item.jsx
│ ├── ItemDetailContainer.jsx
│ ├── CartWidget.jsx
│ ├── NavBar.jsx
│ └── CartItem.jsx
│
├── context/
│ └── CartContext.jsx
│
├── routes/
│ ├── Cart.jsx
│ └── CheckoutForm.jsx
│
├── firebase.js
├── App.jsx
├── main.jsx
└── utils/


---

## 🔧 Funcionalidades

- ✅ Catálogo dinámico de productos desde Firestore
- ✅ Navegación por categorías
- ✅ Detalle individual de producto
- ✅ Componente `ItemCount` para seleccionar cantidad
- ✅ Carrito persistente conectado a Firebase
- ✅ Checkout con formulario de usuario
- ✅ Registro de orden en Firestore con ID generado
- ✅ Renderizado condicional (loaders, carrito vacío, etc.)

---

## 🔗 Firebase

- 📦 Productos almacenados en la colección `products`
- 🧾 Órdenes de compra guardadas en `orders`
- 📦 Carritos sincronizados por sesión (`carts`)

---

## ▶️ Cómo correr el proyecto

1. Cloná el repo:
   ```bash
   git clone https://github.com/tu-usuario/tu-repo.git
   cd tu-repo

    Instalá dependencias:

npm install

Configurá Firebase:

    Renombrá .env.example a .env.local

    Agregá tus claves de Firebase

Iniciá el proyecto:

    npm run dev

🌐 Deploy

Este proyecto fue deployado en Vercel.
Podés acceder a la app en:
📎 