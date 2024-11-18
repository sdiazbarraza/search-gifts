## Gifs search by API endpoint

Este proyecto permite buscar y mostrar GIFs utilizando un endpoint de API. La aplicación está construida con React y Vite, y se comunica con la API de Giphy para obtener los GIFs basados en términos de búsqueda proporcionados por el usuario.

### Características

- **Búsqueda de GIFs**: Los usuarios pueden ingresar términos de búsqueda para encontrar GIFs relevantes.
- **Interfaz Reactiva**: La aplicación utiliza React para renderizar dinámicamente los resultados de búsqueda.
- **Integración con API**: Se conecta con la API de Giphy para obtener los datos de los GIFs.

### Uso

1. Inicia la aplicación en modo desarrollo:
    ```sh
    npm run dev
    # o
    yarn dev
    ```

2. Abre tu navegador y navega a `http://localhost:3000`.

3. Ingresa un término de búsqueda en el campo de búsqueda y presiona Enter para ver los GIFs relacionados.

### Configuración de la API

Para utilizar la API de Giphy, necesitas una clave de API. Sigue estos pasos para configurarla:

1. Regístrate en [Giphy Developers](https://developers.giphy.com/) y obtén tu clave de API.
2. Crea un archivo `.env` en la raíz del proyecto y agrega tu clave de API:
    ```env
    VITE_GIPHY_API_KEY=tu_clave_de_api
    ```

### Construcción para Producción

Para construir la aplicación para producción, ejecuta:
```sh
npm run build
# o
yarn build