# Portfolio de Ciberseguridad - Mario Barajas

Este es el código fuente del portafolio personal, diseñado con una estética "Cyberpunk/Terminal".

## Estructura del Proyecto

El proyecto está diseñado para ser modular y fácil de mantener.

```text
/
├── index.html              # Archivo principal HTML
├── src/
│   ├── main.js             # Lógica principal
│   └── styles/             # Estilos CSS
│       ├── main.css        # Importador principal
│       ├── variables.css   # Colores y fuentes
│       ├── terminal.css    # Efectos visuales de terminal
│       └── ...
└── package.json            # Configuración de dependencias
```

## Instrucciones de Uso

1.  **Instalar dependencias**:
    ```bash
    npm install
    ```

2.  **Iniciar servidor de desarrollo** (para ver cambios en tiempo real):
    ```bash
    npm run dev
    ```

3.  **Construir para producción** (para subir a vercel/netlify):
    ```bash
    npm run build
    ```

## Tecnologías
- **Vite**: Entorno de desarrollo ultrarrapido.
- **Vanilla CSS**: Estilos puros sin frameworks pesados.
- **Vanilla JS**: Lógica simple y directa.
