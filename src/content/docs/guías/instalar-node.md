---
title: Instalación de Node.js en tu ordenador
description: Este es un apartado a modo de guía para la instalación de Node.js
---

## Guia de instalacion de Node.js

¡Bienvenido a la guía de instalación de Node.js en tu ordenador! En esta guía aprenderás cómo instalar Node.js paso a paso.

---

## Paso 1: Descargar Node.js

1. Ve al sitio web oficial de Node.js [https://nodejs.org](https://nodejs.org)
2. En la página principal, encontrarás dos versiones de Node.js:
    - **LTS (Long Term Support):** Recomendado para la mayoria de usuarios.
    - **Current:** Incluye las ultimas caracteristicas, pero puede no ser tan estable.
3. Haz clic en el boton de descarga para la version **LTS** compatible con tu sistema operativo (Windows, macOS o Linux)

---

## Paso 2: Instalacion de Node.js

1. **Windows:**
    - Abre el archivo descargado (`node-vXX.X.X-x64.msi`)
    - Sigue los pasos del asistente de instalacion:
        - Acepta los terminos y condiciones
        - Deja la configuracion predeterminada y haz clic en "Siguiente"
        - Haz clic en "Instalar" para completar la instalacion

2. **macOS:**
   - Abre el archivo descargado (`node-vXX.X.X.pkg`).
   - Sigue los pasos del asistente de instalación:
       - Acepta los términos y condiciones.
       - Completa la instalación con la configuración predeterminada.

**Linux:**

- Usa un gestor de paquetes como `apt` o `yum` para instalar Node.js. Por ejemplo, en distribuciones basadas en Debian, ejecuta:

    ```bash
     sudo apt update
     sudo apt install nodejs npm
    ```

---

## Paso 3: Verifica la instalacion de node.js

1. Abre la terminal
2. Ejecuta el siguiente comando para verificar la version instalada de Node.js:

    ```bash
        node -v
    ```

Deberías ver algo como vXX.X.X (la versión instalada). 3. Verifica también la instalación de npm con:

```bash
npm -v
```

Esto mostrará la versión instalada de npm.

## Paso 4: Comienza a usar Node.js

En el siguiente apartado veremos cómo utilizar node.js
