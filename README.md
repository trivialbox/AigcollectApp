## AigcollectApp
Aplicación hibrida desarrollada en Ionic 4 con Angular

## Estructura del proyecto

```
.
 ├── resources                    # Archivo de construcción espeficos de plataforma (iOS, Android) y icono app + splash
 ├── src                          # La ubicación de todo el proyecto
 ├── .editorconfig                # Define y mantiene los estilos de código y los entornos
 ├── .gitignore                   # Archivos específicos que no pueden subir al repositorio de Git 
 ├── .io-config.json              # Ionic ID
 ├── config.xml                   # Ionic Archivo de configuración
 ├── .ionic.config.json           # Configuración global de la APP
 ├── package.json                 # Dependencias y scrips para la app
 ├── readme.md                    # Descripción del proyecto
 ├── tsconfig.json                # configuraciones del TypeScript 
 └── tslint.json                  # Opciones del linting TypeScript  
```

### src directorio
```
.
   ├── ...
   ├── src                       
   │   ├── app                    # Contiene los modulos y estilos globales
   │   ├── assets                 # Contiene images y  *data.json*
   |   ├── pages                  # Contiene los componentes individuales (home, tabs, category, list, single-item)
   |   ├── services               # Contiene los ervicios de la app
   |   ├── index.html             # The root index app file - This launches the app
   |   ├── manifest.json          # Metadata de la app
   │   └── service-worker.js      # Configuaciones de cache
   └── ...
```

**Nota** para este projecto es necesario **node >=v8.9.0, npm >=6 y ionic >=4**.

## Iniciar el proyecto
El proyecto va ser inicializado concomandos de ionic.

```bash
$ git clone https://github.com/trivialbox/AigcollectApp.git
$ cd AigcollectApp
# instalamos las dependencias
$ npm install
# Para navegar vamos a `http://localhost:4200/`.
$ ionic serve
# Paa ejecutar en producción se ejecuta
$ Se necesita ttener varias dependencias, entre estas el SDK de Android
```
