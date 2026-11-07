# Malla interactiva

Malla curricular interactiva: marcás las materias que aprobaste y las correlativas se van desbloqueando solas. El progreso se guarda en tu navegador (`localStorage`).

## Cómo usarla
- **Click** en una materia disponible → la marcás como aprobada.
- **Click** en una aprobada → la desmarcás (y también las que dependían de ella).
- **Hover** sobre una materia → se resaltan sus correlativas anteriores y posteriores.

## Cargar tu plan de estudios
Editá solo `materias.js`:

```js
{ id: "ed", nombre: "Estructuras de Datos", anio: 3, correlativas: ["prog2", "disc"] }
```

`correlativas` lista los `id` de las materias que deben estar aprobadas.

## Publicar en GitHub Pages
1. Creá un repositorio y subí estos 5 archivos (`index.html`, `style.css`, `app.js`, `materias.js`, `README.md`).
2. En el repo: **Settings → Pages**.
3. En *Build and deployment* elegí **Deploy from a branch**, rama `main`, carpeta `/ (root)`.
4. Guardá. En 1–2 minutos queda en `https://TU-USUARIO.github.io/NOMBRE-DEL-REPO/`.
