# 🎬 Movie Search App

Una aplicación web para buscar películas usando la [OMDb API](https://www.omdbapi.com/). Estilo visual inspirado en **Letterboxd**, con un diseño oscuro, elegante y responsivo.

## 🚀 Características

- Búsqueda por título de película
- Filtro opcional por año
- Resultados con posters, título y año
- Diseño responsivo tipo grid
- Animación de carga
- Estilo tipo Letterboxd
- Footer con créditos

## 🧪 Tecnologías utilizadas

- React
- Vite
- OMDb API
- CSS personalizado

## 🖼 Captura de pantalla

![Captura](./screenshot.png)

## 🔧 Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/tu-usuario/movie-search-app.git
cd movie-search-app
```

2. Instala las dependencias:

```bash
npm install
```

3. Crea un archivo `.env` en la raíz del proyecto con tu API key de OMDb:

```env
VITE_OMDB_API_KEY=tu_api_key_aquí
```

Puedes obtener tu clave gratuita en [http://www.omdbapi.com/apikey.aspx](http://www.omdbapi.com/apikey.aspx)

4. Ejecuta la app:

```bash
npm run dev
```

## 📁 Estructura

```
movie-search-app/
│
├── public/
│   └── ...
├── src/
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── .env
├── package.json
└── vite.config.js
```

## 📦 Build

```bash
npm run build
```

## 📄 Licencia

MIT © \[Luis]
