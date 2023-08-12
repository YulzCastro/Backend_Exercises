# Backend

1. Crear la carpeta.

2. Entrar a la carpeta.
``cd Backend ``

3. Inicializar el proyecto.
``npm init -y``

4. Añadir el ``.gitignore`` con la línea

```
node_modules/
```

5. Crear nuestro servidor:
  1. Instalar `express` => `npm i express`;
  2. Crear el código base para una API con express:

  ```
  const express = require('express');
  const server = express();
  const port = 3000;

  server.listen(port, () => {
    console.log('API escuchando en puerto ${port},');
  })

  ```

  

