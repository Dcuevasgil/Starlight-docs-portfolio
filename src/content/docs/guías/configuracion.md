---
title: Guía de configuracion para la creacion del proyecto con node
description: Este es un apartado a modo de guía para la instalación de Node.js
---

# Guía de configuración para la creación del proyecto con Node

## Descripción
Este es un apartado a modo de guía para la instalación y configuración de Node.js en el proyecto.

## Requisitos previos

Antes de comenzar, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/): La plataforma de JavaScript para la creación de aplicaciones web.
- [npm](https://www.npmjs.com/): El gestor de paquetes de Node.js que se instala junto con Node.

Para verificar si ya tienes Node.js y npm instalados, puedes correr los siguientes comandos en tu terminal:

```bash
node -v
npm -v
```

Si ambos comandos te devuelven una versión, significa que tienes Node.js y npm instalados. Si no, deberás proceder a la instalación.

## Instalación de Node.js

Descargar Node.js: Ve a la página oficial de Node.js y descarga la última versión estable para tu sistema operativo.

Instalar Node.js: Sigue el asistente de instalación para completar el proceso. Asegúrate de instalar npm (lo cual es recomendado por defecto).

Verificación de la instalación: Después de la instalación, abre la terminal y ejecuta:

```bash
node -v
npm -v
```

## Configuración del Proyecto

Inicializar un nuevo proyecto Node.js: En la terminal, navega hasta el directorio de tu proyecto y ejecuta el siguiente comando para crear un archivo package.json:

```bash
npm create astro@latest
```

El atributo o flag `-y` es para aceptar la configuración predeterminada. Este archivo contiene toda la configuración del proyecto, como dependencias, scripts, entre otros.

Instalar dependencias necesarias: Dependiendo de las necesidades de tu proyecto, puedes instalar las dependencias necesarias con npm. Por ejemplo, si necesitas instalar express, puedes ejecutar:

```bash
npm install
```

Este comando instalará todas las dependencias necesarias en la carpeta `node_modules` para el proyecto de Astro.

Y ahora pasamos a las tecnologías principales que he utilizado para el proyecto