# BananaTrack

**BananaTrack** es un aplicativo web diseñado para la gestión eficiente y seguimiento de contenedores de banano. Su objetivo es optimizar el manejo de datos relacionados con camiones, contenedores, choferes, y otros detalles relevantes para el transporte de banano.

---

## Requisitos previos

Asegúrate de tener instalados los siguientes elementos antes de iniciar:

- [Node.js](https://nodejs.org/) (versión 14 o superior recomendada)
- [npm](https://www.npmjs.com/) (incluido con Node.js)
- [MySQL](https://www.mysql.com/) (versión 8 o superior recomendada)

---

## Cómo ejecutar el proyecto

1. **Clona este repositorio**  
   ```bash
   git clone https://github.com/Lester-Bassantes/BananaTrack.git
   cd BananaTrack
   ```
2. **Instala las dependencias**  
   ```bash
   npm install
   ```
3. **Configura el archivo de entorno**  
   ```bash
   cp .env.example .env
   ```
4. **Configura la base de datos MySQL**
   - Crea una base de datos.
   - Ajusta las credenciales de acceso en el archivo .env para conectar con tu base de datos.
5. **Ejecuta las migraciones (si están disponibles)**
   ```bash
   npm run migrate
   ```
6. **Ejecuta el servidor**  
   ```bash
   npm run dev
   ```
## Consideraciones adicionales

- **Puerto predeterminado**: Si el puerto 3000 está ocupado, ajusta la variable `PORT` en el archivo `.env`.
- **Control de dependencias**: Asegúrate de no modificar directamente las carpetas generadas como `node_modules`. Usa siempre `npm install` para gestionar las dependencias.
- **Scripts disponibles**: Además de `npm run dev`, puedes usar:
  - `npm start`: Ejecuta el servidor en modo producción.
  - `npm test`: Corre las pruebas (si están configuradas).



